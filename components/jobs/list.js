import JobHospital from "./JobHospital";

export default function ListItems({jobs}) {
    return (
            jobs ? jobs.map((job, index) => (
                <JobHospital job={job} key={index}/>
            )):<div>
            <div className="p-4">
          <div className="p-8">
            <h2 className="bg-gray-400 animate-pulse h-4  mb-2"></h2>
            <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
            <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
            <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
            <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
            <div className="flex items-center flex-wrap ">
              <a className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0">
                
              </a>
              <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1">
                
              </span>
              
            </div>
          </div>
      </div>
      <div className="p-4">
          <div className="p-8">
            <h2 className="bg-gray-400 animate-pulse h-4  mb-2"></h2>
            <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
            <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
            <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
            <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
            <div className="flex items-center flex-wrap ">
              <a className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0">
                
              </a>
              <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1">
                
              </span>
              
            </div>
          </div>
      </div>
      <div className="p-4">
          <div className="p-8">
            <h2 className="bg-gray-400 animate-pulse h-4  mb-2"></h2>
            <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
            <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
            <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
            <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
            <div className="flex items-center flex-wrap ">
              <a className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0">
                
              </a>
              <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1">
                
              </span>
              
            </div>
          </div>
      </div>
            </div>
        
    )
}