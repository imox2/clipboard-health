export default function Footer() {
    return (
        <div className="flex flex-col m-4 p-4 space-y-4 bg-white mt-8 lg:flex-row">
            <div className="lg:w-1/2">
                <div className="text-xl font-bold">About us</div>
                <div className="mt-3 text-sm text-gray-700 space-y-2">
                    <p>
                        We are a team of nurses, doctors, technologists and
                        executives dedicated to help nurses find
                        <br/> jobs that they
                        love.
                    </p>
                    <p>All copyrights reserved &copy; 2020 - Health Explore</p>
                </div>
            </div>
            <div className="lg:w-1/4">
                <div className="text-xl font-bold">Sitemap</div>
                <div className="mt-3 text-sm text-gray-700 space-y-2">
                    <ul className="space-y-2">
                        <li>
                            
                                <a href="/">Nurses</a>
                            
                        </li>
                        <li>
                            
                                <a href="/">Employers</a>
                            
                        </li>
                        <li>
                            
                                <a href="/">Social networking</a>
                            
                        </li>
                        <li>
                            
                                <a href="/">Jobs</a>
                            
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="text-xl font-bold">Privacy</div>
                <div className="mt-3 text-sm text-gray-700 space-y-2">
                    <ul className="space-y-2">
                        <li>
                            
                                <a href="/">Terms of use</a>
                            
                        </li>
                        <li>
                            
                                <a href="/">Privacy policy</a>
                            
                        </li>
                        <li>
                            
                                <a href="/">Cookie policy</a>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}