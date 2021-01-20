import React, { useState } from 'react';
import moment from 'moment'

export const Job = (props) => {
  const [isOpened, setisOpened] = useState(false);
  const { title, city, salary_range, job_type, department, hours,
          summary, created } = props
  return (
    <div>
      <button
        onClick={() => setisOpened(!isOpened)}
        className='focus:outline-none flex lg:flex-row flex-col justify-between lg:items-center w-full py-4 px-1 border-t border-gray-200'
      >
        <div className='flex items-start text-left flex-col'>
          <span className='font-bold'>{title}</span>
          <span>{`${job_type} | $${salary_range[0]} - $${salary_range[1]} an hour | ${city}`}</span>
        </div>
        <span> { moment(created.split('T')[0], 'YYYY.MM.DD').fromNow()} </span>
      </button>
      {isOpened && (
        <div className='flex flex-col lg:flex-row w-full lg:items-center'>
          <div className='flex flex-1 flex-col p-1'>
            <div className='flex flex-col lg:flex-row mb-2'>
              <span className='font-bold w-48'>Department:</span>
              <p className='break-words w-64'>{department}</p>
            </div>
            <div className='flex flex-col lg:flex-row mb-2'>
              <span className='font-bold w-48'>Hours / shift:</span>
              <p className='break-words w-64'>{`${hours[0]} hours / shift`}</p>
            </div>
            <div className='flex flex-col lg:flex-row '>
              <span className='font-bold w-48'>Summary:</span>
              <p className='break-words w-64'>{summary}</p>
            </div>
          </div>
          <div className='flex lg:w-48 lg:flex-col lg:items-end'>
            <button className=' bg-blue-500 text-white rounded-lg px-5 py-2 m-1'>
              Job details
            </button>
            <button className='border border-blue-500 text-blue-500 rounded-lg px-5 py-2 m-1'>
              Save job
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Job;
