import React, { useEffect } from "react";
import { useContext } from "react";
import { dataContext } from "../../data/DataContextProvider";

function View({
  jobs,
  onClickDetails,
  setIsStatic,
  showRenderOnLoad,
  setShowRenderOnLoad,
}) {
  const { careerDetails, setCareerDetail } = onClickDetails;
  const { deleteFromServer } = useContext(dataContext);

  function handleDetails(career) {
    console.log(career);
    setCareerDetail(career);
    setIsStatic(false);
    setShowRenderOnLoad(true);
  }

  function handelDelete(id) {
    deleteFromServer(id);
  }

  const displayCareerdata = jobs.map((career) => {
    return (
      <div className="max-w-3xl mx-auto" id="admin-job-cards">
        <div className="flex flex-wrap ">
          <div className="w-full p-1">
            <span
              className="block p-6 bg-white  transform hover:-translate-y-1 rounded-lg transition duration-500"
              href="#"
            >
              <div
                className="flex flex-wrap items-center justify-between -m-2"
                id="admin-jobs-card-body"
              >
                <div className="w-auto p-2">
                  <h3 className="mb-1 font-semibold tracking-tight">
                    {career.title}
                  </h3>
                  <p className="text-lg">{career.company}</p>
                  <p className="text-lg">{career.location}</p>

                  <div className="mt-3">
                    <span className="bg-gray-300 mr-3 px-2.5 py-1.5 rounded-lg">
                      {career.type}
                    </span>
                    <span className="bg-green-100 mr-3 px-2.5 py-1.5 rounded-lg">
                      {" "}
                      <i className="fa fa-money-bills"></i> $
                      {career.salary.toLocaleString()} per year
                    </span>
                    <button
                      type="button"
                      className="text-gray-900 border border-gray-300 px-2 py-1 rounded-lg"
                    >
                      {career.experience}+ years
                    </button>
                  </div>
                  <p className="pt-4">{career.description}</p>
                </div>

                <div className="p-2" id="admin-jobs-card-btn-outer-div">
                  <div
                    className="grid justify-items-end mt-6"
                    id="admin-jobs-card-btn-inner-div"
                  >
                    <button
                      onClick={() => handleDetails(career)}
                      className="inline-block mt-2 w-40 px-4 py-2 text-white font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"
                      href="#"
                    >
                      Check Details
                    </button>

                    <button
                      className="inline-block mt-2 w-40 px-4 py-2 text-white font-semibold tracking-tight bg-red-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"
                      href="#"
                      onClick={() => handelDelete(career.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="" id="admin-jobs">
        {displayCareerdata}
      </div>
    </>
  );
}

export default View;
