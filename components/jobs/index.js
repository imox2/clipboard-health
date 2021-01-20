import ListItems from './list'
import Filters from './filters'
import axios from 'axios';
import React, {useState, useEffect, Fragment} from 'react';
import { computeTotalJobs } from '../../utils/apiHelper';

export default function Jobs() {
    const [jobs, setJobs] = useState();

    useEffect(async () => {
    const result = await axios(
        'api/jobs',
    );
    setJobs(result.data);
    console.log("result.data:",result.data);
    }, []);

    return (
        <div className="m-4 flex flex-row lg:space-x-4">
            <div className="hidden lg:block lg:w-1/5">
                <Filters />
            </div>
            <div className="w-full bg-white  lg:border lg:border-gray-200">
            <div className="grid grid-cols-2">
  <div className="space-x-3 p-3.5 items-center">{jobs ? computeTotalJobs(jobs) + ' Job posting' : ''}</div>
  <div className="flex flex-row space-x-3 p-3.5 items-center">
  <div>Sort by</div>
  <div>Location</div>
  <div>Role</div>
  <div>Department</div>
  <div>Education</div>
  <div>Experience</div>
</div>
</div>
                <ListItems jobs={jobs}/>
            </div>
        </div>
    )
}