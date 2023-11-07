function NoResultsCard (){
    return (
        <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap ">
                <div className="w-full p-1">
                <a
                    className="block p-6 mb-11  bg-white hover:bg-opacity-50 transform hover:-translate-y-1 rounded-lg transition duration-500"
                    href="#"
                >
                    <div className="flex flex-wrap items-center justify-between -m-2">
                        <div className="w-auto p-2 text-red-500">
                            <h3 className="font-semibold tracking-tight">
                                No jobs available :(

                            </h3>
                            
                        </div>
                    </div>
                </a>
                </div>
            </div>
        </div>
    )
}

export default NoResultsCard;