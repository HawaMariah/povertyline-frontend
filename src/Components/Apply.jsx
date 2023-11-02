import React from "react";
import { useState, useEffect, useContext } from "react";
import { dataContext } from "../data/DataContextProvider";
import { toast } from "react-toastify";

function Apply() {
  const [closeForm, setCloseForm] = useState(true);
  const [FormObject, setFormObject] = useState({
    name: "",
    CV: "",
    email: "",
  });

  function FornObjectCreator(e) {
    const { name, value } = e.target;
    console.log(e.target.value);

    setFormObject((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function formSubmit(e) {
    e.preventDefault();
    console.log(FormObject);
    // postToApplicantServer(FormObject);
    setFormObject({
      name: "",
      CV: "",
      email: "",
    });
    toastSuccessfullyApplied();
  }

  function handleFormClose() {
    setCloseForm(!closeForm);
  }

  const toastSuccessfullyApplied = () =>
    toast(`Your Applicatin has been successfully submited...`, {
      type: "success",
    });
  return (
    <div id="apply-form">
      <form onSubmit={formSubmit}>
        <div
          className=" mt-4  left-0 top-0 flex justify-center items-center "
          id="modal-id"
        >
          <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
            <div className="">
              <div className="text-center p-5 flex-auto justify-center">
                <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-2">
                  Enter Personal Details
                </h1>
                <label
                  for="name"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={FormObject.name}
                  onChange={FornObjectCreator}
                  required
                  className="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="James Paul"
                />
                <label
                  for="name"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  value={FormObject.email}
                  onChange={FornObjectCreator}
                  required
                  className="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="johndoe@gmail.com"
                />
              </div>
              <div className="max-w-xl">
                <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                  <span className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <span className="font-medium text-gray-600">
                      Drop files to Attach, or
                      <span className="text-blue-600 underline">browse</span>
                    </span>
                  </span>
                  <input
                    type="file"
                    id="CV"
                    name="CV"
                    value={FormObject.CV}
                    onChange={FornObjectCreator}
                    required
                    className="hidden"
                  />
                </label>
              </div>
              <div className="p-3  mt-2 text-center space-x-4 md:block">
                <button
                  onClick={handleFormClose}
                  className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="mb-2 md:mb-0 bg-[#6d9b99] border  border-bg-[#6d9b99] px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Apply;
