import Link from 'next/link';
import axios from 'axios';
import React, {useState, useEffect, Fragment} from 'react';

function Widget({title, data}) {
    return (
        <div className="bg-white p-4 border border-gray-200">
            <div className="font-bold">title</div>
            <div className="text-sm mt-3">
                <ul className="space-y-2">
                    {data.map((el, index) =>(
                         index<=11 ?
                        <li key={index}>
                            {index<=10 ?
                                <a href="/">
                                {el['key']} <span className="text-xs text-gray-300">{el['doc_count']}</span>
                            </a>:
                            <a href="/">
                                Show More
                            </a>
                            }
                            
                        </li>:''
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default function Filters() {
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
                    <Widget key={filter} title={filter} data={filters[filter]} />
                ))
            ):''}
            </Fragment>
    )
}