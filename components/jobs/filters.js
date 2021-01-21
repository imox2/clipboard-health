import Link from 'next/link';
import axios from 'axios';
import React, {useState, useEffect, Fragment} from 'react';
import { firstLetterCapitalized } from '../../utils/viewHelper';

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
                                 <label className="inline-flex items-center mt-3">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" 
                onChange={(e) => changeFilterInfo(event.target.checked, el['key'])}/>
                <span className="ml-2 text-gray-700">{el['key']}</span>
                <span className="text-xs text-gray-300">{el['doc_count']}</span>
            </label>:
                            <a onClick={() => setShowModal(true)}>
                                Show More
                            </a>
                            }
                            
                        </li>:''
                    ))}
                </ul>
                {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Department
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-3 flex-auto">
                  <div className="grid grid-cols-4 gap-2">
                    {data.map((el, index) =>(
                        <div key={index} onClick={(e) => changeFilterInfo(true, el['key'])}>
                        <span className="ml-2 text-gray-700">{el['key']}</span>
                <span className="text-xs text-gray-300">{el['doc_count']}</span>
                        </div>
                        ))}
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
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