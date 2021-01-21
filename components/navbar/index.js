function Navbar() {
    return (
        <div className="flex bg-white  content-center">
            <div className="flex flex-grow lg:w-1/4">
                <div className="p-5 lg:hidden">
                    <div className="w-6">
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
                d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
                    </div>
                </div>
                <div className="flex-grow text-blue-500 font-bold pt-5 lg:p-5">
                        <a className="block">HEALTH EXPLORE</a>
                </div>
            </div>
            <div className="hidden lg:block lg:w-1/2 lg:h-full">
                <ul className="flex mt-5 h-full space-x-8">
                    <li><a href="/">PROFILE</a></li>
                    <li><a href="/">JOBS</a></li>
                    <li><a href="/">PROFESSIONAL NETWORK</a></li>
                    <li><a href="/">LOUNGE</a></li>
                    <li><a href="/">SALARY</a></li>
                </ul>
            </div>
            <div className="mr-3.5 flex space-x-5">
                <div className="hidden lg:block">
                        <a className="text-blue-400 block mt-3 p-2 border-blue-400 border rounded-lg">
                            CREATE JOB
                        </a>
                </div>
                <div className="mt-3">
                    <div className="relative">
                        <div className="flex content-center justify-center w-8 h-8 rounded-full bg-blue-500">
                            <div className="text-white pt-1">JO</div>
                        </div>
                        <div className="flex content-center justify-center absolute -top-2 -right-2 border-white border-2 rounded-full bg-red-500 text-xs w-5 h-5 text-white">
                            2
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <button className="p-2 mt-3">
                        LOGOUT
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;