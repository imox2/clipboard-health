import ListItems from './list'
import Filters from './filters'
import axios from 'axios';
import React, {useState, useEffect, Fragment} from 'react';
import { computeTotalJobs } from '../../utils/apiHelper';

export default function Jobs({ searchText }) {
    const [jobs, setJobs] = useState();
    const [filters, setFilters] = useState();
    const [sortMenus, setSortMenus] = useState({
      'Location': '',
      'Role': '',
      'Department': '',
      'Education': '',
      'Experience': '',
    });

    const selectSort = (key) => {
      console.log("selectSort:",key);
    const sortDataCopy = { ...sortMenus };
    const value = sortDataCopy[key];
    if (value === "asc") sortDataCopy[key] = "desc";
    if (value === "desc") sortDataCopy[key] = '';
    if (value === '') sortDataCopy[key] = "asc";
    setSortMenus(sortDataCopy);
    console.log("sortDataCopy:",sortDataCopy);
  };

    const selectFilters = (checked, filter) => {
      const filtersCopy = !filters ? [] : JSON.parse(JSON.stringify(filters));
      console.log("filtersCopy:",filtersCopy);
      if(checked && filtersCopy.indexOf(filter) == -1) {
        filtersCopy.push(filter);
      } else {
        const index = filtersCopy.indexOf(filter);
        if (index > -1) {
          filtersCopy.splice(index, 1);
        }
      }
      setFilters(filtersCopy);
    };

    const getJobsData = async () => {
      let url = `api/jobs?search=${searchText}`;
      console.log("filters:",filters);
      if(filters && filters.length > 0) {
        url = url + `&filters=${filters.toString()}`
      }
       const sortDataCopy = { ...sortMenus };
       Object.keys(sortDataCopy).forEach(key => {
        if(sortDataCopy[key]) {
          url = url + `&${key.toLowerCase()}=${sortDataCopy[key]}`
        }
       });
      const result = await axios(
         url
      );
      console.log("getJobsData:",url);
      setJobs(result.data);
    };

    useEffect(() => {
    getJobsData();
    }, []);

    useEffect(() => {
      setJobs(null);
      getJobsData();
  }, [searchText,filters,sortMenus.Location, sortMenus.Role, sortMenus.Experience,
      sortMenus.Department,sortMenus.Education]);

    return (
        <div className="m-4 flex flex-row lg:space-x-4">
            <div className="hidden lg:block lg:w-1/5">
                <Filters selectFilters={selectFilters}/>
            </div>
            <div className="w-full bg-white  lg:border lg:border-gray-200">
            <div className="grid grid-cols-2">
  <div className="space-x-3 p-3.5 items-center">{jobs ? computeTotalJobs(jobs) + ' Job posting' : ''}</div>
  <div className="flex flex-row space-x-6 p-3.5 items-center">
  <div>Sort by</div>
  {sortMenus ? (
                Object.keys(sortMenus).map((sortMenu, index) => (
                    <div key={index} 
                    onMouseDown={() => selectSort(sortMenu)}>
                    {sortMenu}
                    <span className="inline-block">
                    {sortMenus[sortMenu] === "desc" && <svg viewBox="0 0 24 24" fill="black" width="16px" height="16px">
    <rect fill="none" height="24" width="24" />
    <path d="M19,15l-1.41-1.41L13,18.17V2H11v16.17l-4.59-4.59L5,15l7,7L19,15z" />
  </svg>}
                    {sortMenus[sortMenu] === "asc" && <svg viewBox="0 0 24 24" fill="black" width="16px" height="16px">
    <rect fill="none" height="24" width="24" />
    <path d="M5,9l1.41,1.41L11,5.83V22H13V5.83l4.59,4.59L19,9l-7-7L5,9z" />
  </svg>}
                    
    </span>
                    </div>
                ))
            ):''}
</div>
</div>
                <ListItems jobs={jobs}/>
            </div>
        </div>
    )
}