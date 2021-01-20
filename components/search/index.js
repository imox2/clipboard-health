const Search = ({searchFor}) => {
  return (
    <div className="m-4 bg-white shadow p-4 flex">
        <span className="w-auto flex justify-end items-center text-gray-500 p-2">
        <button className="w-5 flex-gro-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
        </span>
        <input 
        className="w-full rounded p-2" 
        type="search" 
        placeholder="Search for any job, title, keywords or company" 
        onChange={(e) => searchFor(e.target.value)} />
    </div>
  );
};

export default Search;
