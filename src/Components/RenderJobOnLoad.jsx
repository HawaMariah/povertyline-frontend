import React, { useState } from "react";
import Apply from "./Apply";
import CareerDetails from "./CareerDetails";

function RenderJobOnLoad() {
  const [isShowMore, setIsShowMore] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  function toggleApplied() {
    setIsApplied(!isApplied);
  }

  return (
    <div className="max-w-2xl px-8 mt-4 py-4 mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">
          Jan 15, 2022
        </span>
        <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
          JavaScript
        </a>
      </div>
      <div className="mt-2">
        <a
          href="https://stackdiary.com/"
          className="text-2xl font-bold text-gray-900 "
        >
          Senior React Developer
        </a>
        <p className="mt-2 text-gray-600 font-bold">Nairobi</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={toggleApplied}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {isApplied ? "Close" : "Apply"}
        </button>

        <a
          href="#"
          className="text-blue-600 dark:text-blue-400 hover:underline"
          onClick={toggleReadMoreLess}
        >
          {isShowMore ? "Read less" : "Read More⟶"}
        </a>
        <div className="flex items-center">
          <img
            src="https://stackdiary.com/140x100.png"
            alt="Author Photo"
            className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
          />
          <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-700">
            Amazon
          </a>
        </div>
      </div>
      {isApplied && (
        <>
          <Apply />
        </>
      )}
      {isShowMore && (
        <div
          className="max-w-2xl px-8 mt-4 text-left py-4 mx-auto"
          id="requirements"
        >
          <p>
            Since its founding over 80 years ago, Krispy Kreme’s focus has
            remained the same - making fresh, premium quality doughnuts inspired
            by their founder’s original recipe. The brand’s iconic Hot Light
            lets guests know when doughnuts are being made fresh in shop so they
            can enjoy hot doughnuts fresh off the line. To make Krispy Kreme’s
            in-shop experience e
          </p>

          <p></p>
        </div>
      )}
    </div>
  );
}

export default RenderJobOnLoad;
