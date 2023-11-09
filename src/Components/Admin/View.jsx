import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading, setJobData } from "../../features/job/jobSlice";

function View({
  // onClickDetails,
  setIsStatic,
  // showRenderOnLoad,
  setShowRenderOnLoad,
}) {
  // const { careerDetails, setCareerDetail } = onClickDetails;
//   const { deleteFromServer } = useContext(dataContext);

const jobs = useSelector(state => state.jobs.jobData)
const dispatch = useDispatch()

  function handleDetails(job) {
    console.log(job);
    setJobDetail(job);
    setIsStatic(false);
    setShowRenderOnLoad(true);
  }

  async function handelDelete(jobId) {
    const response = await axios.delete(`https://gighunter-l0tq.onrender.com/jobs/${jobId}`)

    fetch(`https://gighunter-l0tq.onrender.com/jobs`)
      .then((res) => res.json())
      .then((data) => dispatch(setJobData(data.jobs)))
      .finally(dispatch(setIsLoading(false)));
  }

  const displayCareerdata = jobs.map((job) => {
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
                    {job.title}
                  </h3>
                  <p className="text-lg">{job.company}</p>
                  <p className="text-lg">{job.location}</p>

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
                      {job.experience}
                    </button>
                  </div>
                  <p className="pt-4">{job.description}</p>
                </div>

                <div className="p-2" id="admin-jobs-card-btn-outer-div">
                  <div
                    className="grid justify-items-end mt-6"
                    id="admin-jobs-card-btn-inner-div"
                  >
                    <button
                      onClick={() => handleDetails(job)}
                      className="inline-block mt-2 w-40 px-4 py-2 text-white font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"
                      href="#"
                    >
                      Check Details
                    </button>

                    <button
                      className="inline-block mt-2 w-40 px-4 py-2 text-white font-semibold tracking-tight bg-red-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"
                      href="#"
                      onClick={() => handelDelete(job.id)}
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