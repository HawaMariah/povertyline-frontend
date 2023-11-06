import React from "react";

function Youtube() {
  return (
    <>
    <div className="border shadow-xl pt-8">
        <div className="text-center text-4xl font-bold  ">
            <h1>
                Tips From Top Employers
            </h1>
        </div>
        <div className="px-10 py-8 ">
          <p className="text-xl text-center">
            Welcome to our video series featuring tips from top employers in
            various industries. 
            <br />
            In these videos, industry leaders share their
            insights and advice on a range of topics, from career development
            to workplace culture. 
            <br />
            We hope you find these videos informative and
            inspiring for your own career journey!
          </p>
        </div>
      <div className=" lg:ml-32 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="embed-responsive embed-responsive-16by9     bottom-0 left-0 top-0 overflow-hidden  ">
          <iframe
            className="embed-responsive-item w-full h-full  lg:w-[40vw] lg:h-[50vh] rounded-[10px] "
            src="https://www.youtube.com/embed/WRC7y8VriuM?rel=0"
            allowFullScreen
          ></iframe>
        </div>

        <div className="pt-10 lg:pt-0 embed-responsive embed-responsive-16by9    bottom-0 left-0 top-0 overflow-hidden ">
          <iframe
            className="embed-responsive-item w-full h-full lg:w-[40vw]  lg:h-[50vh] rounded-[10px] "
            src="https://www.youtube.com/embed/PAuA65nhVSE??rel=0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
     
      </div>
    </>
  );
}

export default Youtube;
