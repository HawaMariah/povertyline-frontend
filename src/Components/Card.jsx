import React from "react";
import { Link } from "react-router-dom";

function Card({ job, onButtonClick }) {
  function detailsHandle(id) {
    // console.log(id);
    onButtonClick(id);
  }
  return (
    <div className="max-w-3xl mx-auto" id="card-dv">
      <div className="flex flex-wrap ">
        <div className="w-full p-1">
          <a
            className="block p-6 bg-white hover:bg-opacity-50 transform hover:-translate-y-1 rounded-lg transition duration-500"
            href="#"
          >
            <div
              className="flex flex-wrap items-center justify-between -m-2"
              onClick={() => detailsHandle(job.id)}
            >
              <div className="w-auto p-2">
                <h3 className="mb-1 font-semibold tracking-tight">
                  {job.title}
                </h3>
                <p className="text-lg">{job.company}</p>
                <p className="text-lg mb-2">{job.location}</p>

                <div className="mt-3">
                  <span className="bg-gray-300 mr-3 px-2.5 py-1.5 rounded-lg">
                    {job.type}
                  </span>
                  <span className="bg-green-100 mr-3 px-2.5 py-1.5 rounded-lg">
                    {" "}
                    <i className="fa fa-money-bills"></i> $
                    {job.salary.toLocaleString()} per year
                  </span>
                  <button
                    type="button"
                    className="text-gray-900 border border-gray-300 px-2 py-1 rounded-lg"
                  >
                    {job.experience}+ years
                  </button>
                </div>
                <p className="pt-4">{job.description}</p>
              </div>

              <div className="w-auto p-2">
                <div className="flex flex-row justify-center">
                  <Link
                    to="/"
                    onClick={() => detailsHandle(job.id)}
                    className="inline-block mx-auto px-4 py-2 text-white font-semibold tracking-tight bg-[#6d9b99] hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"
                  >
                    Job Details
                  </Link>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
