import React from "react";
import { useState } from "react";

function AdminLoadDetailOnInitialRender() {
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
    <div className="max-w-2xl px-8 mt-4 py-4 mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-900">
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
      <div className="card">
        <h3>Description</h3>

        <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cum
          tempore dolores ipsa. Aspernatur iure similique facilis autem modi
          esse placeat praesentium nihil voluptas quia, necessitatibus adipisci
          explicabo, enim totam.
        </p>

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
  );
}

export default AdminLoadDetailOnInitialRender;