import React, {useState, useEffect, Fragment} from 'react';
import Job from "./job";

export default function JobHospital({job}) {
    const [isOpened, setIsOpened] = useState(false);
    return (    <Fragment>
                <div className="flex text-sm space-x-3 p-3.5 items-center cursor-pointer"
                onClick={() => setIsOpened(!isOpened)}>
                <div className="flex-shrink-0 rounded-md bg-gray-400 w-8 h-8 text-lg font-bold text-white">
                <div className="flex justify-center items-center w-full h-full uppercase">
                    {job.name.substr(0, 2)}
                 </div>
             </div>
             <div className="flex w-full">
                 <div>
                     {job.total_jobs_in_hospital} jobs for {job.name}
                 </div>
             </div>
             </div> 
             {isOpened && (
                <div className='grid grid-cols-1  p-3.5'>
                  {job.items.map((listing) => (
                    <Job
                      key={listing.created}
                      title={listing.job_title}
                      job_type={listing.job_type}
                      salary_range={listing.salary_range}
                      city={listing.city}
                      summary={listing.description}
                      department={listing.department}
                      hours={listing.hours}
                      created={listing.created}
                    />
                  ))}
                </div>
              )}    
              </Fragment>   
    )
}