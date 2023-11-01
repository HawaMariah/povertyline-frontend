import React from "react";
import { useState } from "react";
import Careers from "../Careers";
function AdminCareerDetails({ careerDetails, isStatic }) {
  const [isShowMore, setIsShowMore] = useState(false);
  //date
  //type
  //title
  //location
  //company

  const toggleReadMoreLess = ({ careerDetailss }) => {
    console.log(careerDetailss);
    setIsShowMore();
  };
  const [state, setState] = useState(false);
  return (
    <div>
      {" "}
      <div class="max-w-2xl px-8 py-4 mx-auto mt-10 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div class="flex items-center justify-between">
          <span class="text-sm font-light text-gray-600 dark:text-gray-900">
            {careerDetails.posted}
          </span>
          <h3 class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
            {careerDetails.type}
          </h3>
        </div>
        <div class="mt-2">
          <a
            href="https://stackdiary.com/"
            className="text-2xl font-bold text-gray-900"
          >
            {careerDetails.title}
          </a>
        </div>
        <div class="flex items-center justify-between mt-4">
          <div class="flex items-center">
            <img
              src="https://stackdiary.com/140x100.png"
              alt="Author Photo"
              class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
            />
            <a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200">
              John Doe
            </a>
          </div>
        </div>

        <div className="card">
          <h3>Description</h3>

          <p className="mb-6">{careerDetails.description}</p>

          {isShowMore && (
            <p>
              sapiente exercitationem odio quia, animi eos distinctio tempora,
              ipsum hic vitae modi eum nostrum id perspiciatis impedit dolores.
            </p>
          )}

          <button
            class="text-blue-600 dark:text-blue-400 hover:underline"
            onClick={toggleReadMoreLess}
          >
            {isShowMore ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminCareerDetails;
