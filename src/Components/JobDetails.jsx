import React, { useRef, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Card from "./Card";
import Jobs from "./Jobs";
import RenderJobOnLoad from "./RenderJobOnLoad";

import Apply from "./Apply";
function JobDetails({
  jobData,
  jobId,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isShowMore, setIsShowMore] = useState(true);
  const [isApplied, setIsApplied] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  function toggleApplied() {
    setIsApplied(!isApplied);
  }
  // console.log(jobId);
  // console.log(jobData);
  const currentJobDetail = jobData.find(
    (job) => job.id === jobId
  );

  if (!currentJobDetail) {
    // const displyJobOnInitialLoad = jobData[0].title;
    // console.log(displyJobOnInitialLoad);
    return isLoading ? <h1>Loading....</h1> : <h1></h1>;
  }
  return (
    <div>
      {!currentJobDetail ? (
        <h1>LOADING...</h1>
      ) : (
        <div
          className="max-w-2xl px-8 mt-4 py-4 mx-auto bg-white rounded-lg shadow-lg  dark:bg-gray-800"
          id="job-details"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-light text-gray-600 dark:text-gray-400">
              {currentJobDetail.posted}
            </span>
            <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
              {currentJobDetail.type}
            </a>
          </div>
          <div className="mt-2">
            <a
              href="https://stackdiary.com/"
              className="text-2xl font-bold text-gray-900"
            >
              {currentJobDetail.title}
            </a>

            <p className="mt-3 mb-3 dark:text-gray-400">
              {currentJobDetail.description}
            </p>
            <p className="mt-2 text-gray-600 font-bold dark:text-gray-700">
              {currentJobDetail.location}
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={toggleApplied}
              type="button"
              className="text-white bg-[#6d9b99] hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-[#6d9b99] font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {isApplied ? "Close" : "Apply"}
            </button>

            {/* <a
              href="#"
              className="text-blue-600 dark:text-blue-400 hover:underline"
              onClick={toggleReadMoreLess}
            >
              {isShowMore ? "Read less" : "Read More⟶"}
            </a> */}
            <div className="flex items-center">
              <img
                src="https://stackdiary.com/140x100.png"
                alt="Author Photo"
                className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
              />
              <a className="font-bold text-gray-700 cursor-pointer">
                {currentJobDetail.company}
              </a>
            </div>
          </div>
        </div>
      )}
      {isApplied ? (
        <Apply
          // PostFormObjectToApplicantServer={PostFormObjectToApplicantServer}
        />
      ) : (
        <div>
          {isShowMore ? (
            <div className="max-w-2xl px-8 mt-4 text-left py-4 mx-auto">
              <p>{currentJobDetail.details}</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default JobDetails;