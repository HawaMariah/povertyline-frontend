function Newsletter (){

    return (

        <section>
            <div className="relative items-center w-full px-5 py-12 mb-11 mt-11 mx-auto md:px-12 lg:px-16 max-w-7xl">
                <div className="max-w-3xl mx-auto text-center lg:p-10">
                    <div>
                        <p className="text-5xl tracking-tight text-black">
                        Subscribe to our newsletter <span className="lg:block">to stay up to date</span>
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-gray-600">
                             Discover a simpler way to find tailored job opportunities with our newsletter designed exclusively for job seekers. Join a proactive community that stays ahead in their job search journey. Say goodbye to endless job searching!
                        </p>
                    </div>
                    <div className="flex flex-col items-center max-w-sm pt-8 pb-12 mx-auto md:pt-6">

                        <div className="flex flex-col w-full gap-1 mt-3 sm:flex-row">
                            <input name="email" type="email" className="block w-full px-4 py-2 text-sm font-medium text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-full font-spline focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600/50 disabled:opacity-50" placeholder="Enter your email..." required="" />
                            <button type="button" className="items-center inline-flex justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full hover:bg-blue hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black">
                            <div style={{ position: "relative" }}></div>
                            Subscribe
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-4 h-auto ml-2">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                            </svg>
                            </button>
                        </div>
                    </div>
                    <div className="mx-auto sm:max-w-lg sm:flex">
                        <p className="mx-auto mt-3 text-xs text-gray-500">
                        By subscribing, you agree to Skill Hunter's
                        <a className="text-blue-600 hover:text-black underline" target="_blank" href="#">Terms of Service</a>
                        and
                        <a className="text-blue-600 hover:text-black" target="_blank" href="#">Privacy Policy</a>.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:py-6 lg:px-8">
                            <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-6">
                                <div className="flex justify-center col-span-1 px-8">
                                    <img className="max-h-12" src="slack.svg" alt=" logo" />
                                </div>
                                <div className="flex justify-center col-span-1 px-8">
                                    <img className="max-h-12" src="google.svg" alt="logo" />
                                </div>
                                <div className="flex justify-center col-span-1 px-8">
                                    <img className="max-h-12" src="x.svg" alt="logo" />
                                </div>
                                <div className="flex justify-center col-span-1 px-8">
                                    <img className="max-h-12" src="fiverr.svg" alt="logo" />
                                </div>
                                <div className="flex justify-center col-span-1 px-8">
                                    <img className="max-h-12" src="mastercard.svg" alt="logo" />
                                </div>
                                <div className="flex justify-center col-span-1 px-8">
                                    <img className="max-h-12" src="apple-pay.svg" alt="logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    )
}


export default Newsletter;