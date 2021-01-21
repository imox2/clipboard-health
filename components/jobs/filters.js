import Link from 'next/link';
import axios from 'axios';
import React, {useState, useEffect, Fragment} from 'react';
import { firstLetterCapitalized } from '../../utils/viewHelper';
import { FilterModal } from './filterModal'
function Widget({title, data, changeFilterInfo}) {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="bg-white p-4 border border-gray-200">
            <div className="font-bold">{firstLetterCapitalized(title)}</div>
            <div className="text-sm mt-3">
                <ul className="space-y-2">
                    {data.map((el, index) =>(
                         index<=11 ?
                        <li key={index}>
                            {index<=10 ?
                                 <label className="inline-flex items-center mt-3 cursor-pointer">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" 
                onChange={(e) => changeFilterInfo(event.target.checked, el['key'])}/>
                <span className="ml-2 text-gray-700">{el['key']}</span>
                <span className="text-xs text-gray-300">{el['doc_count']}</span>
            </label>:
                            <a className="cursor-pointer text-blue-600"
                            onClick={() => setShowModal(true)}>
                                Show More
                            </a>
                            }
                            
                        </li>:''
                    ))}
                </ul>
                {showModal ? (
                    <FilterModal data={data} changeFilterInfo={changeFilterInfo} setShowModal={setShowModal} />) 
                : null}
            </div>
        </div>
    )
}

export default function Filters({selectFilters}) {
    const [filters, setFilters] = useState({
        'job_type': [],
        'department': [],
        'work_schedule': [],
        'experience': []
    });

    useEffect(async () => {
    const result = await axios(
        'api/filters',
    );
    setFilters(result.data);
    console.log("result.data:",result.data);
    }, []);
    return (
   
            <Fragment>
            {filters ? (
                Object.keys(filters).map(filter => (
                    <Widget key={filter} title={filter} data={filters[filter]} changeFilterInfo={selectFilters} />
                ))
            ):''}
            </Fragment>
    )
}