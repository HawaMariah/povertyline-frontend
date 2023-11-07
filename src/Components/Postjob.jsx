
import React from "react";
import { useState } from "react";

function Postjob() {
  const [formData, setFormData] = useState({
    companyName: "",
    companyType: "",
    description: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle form submission here
    console.log("Form submitted:", formData);
  };
  return (
    <>
      <div>
        <div className="  flex justify-center w-full">
          <div className="bg-white w-[1728px]  relative">

            <div className="w-[80vw] h-[64vh] top-[241px] left-[90px] bg-[#bad6d6] absolute rounded-[20px]">
              <p className="absolute w-[600px] font-bold top-[67px] left-[75px]  text-[64px] leading-[1.] tracking-[2px]"
               style={{
                fontFamily: "junge",
              }}
              >
                <span className="text-black">Find </span>
                <span className="text-blue-500">talent</span>
                <span className="text-black"> and </span>
                <br />
                <span className="text-blue-500">experts </span>

                <span className="text-black">
                  to scale
                  <br />
                  your organization,
                  <br />
                  get your work done
                </span>
              </p>
              <div className="w-[35.5vw] h-[60vh] top-[15px] left-[829px] bg-white absolute rounded-[20px] ">
                <div className="max-w-lg mx-auto ">
                  <div className="flex justify-center">
                    <p className="text-3xl font-bold mt-4 mb-4">Posts A Job</p>
                  </div>
                  <div className="flex justify-center ">
                    {" "}
                    <p className="text-2xl text-gray-700  mb-4">
                      Please enter the job details below
                    </p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="">
                      <label
                        htmlFor="companyName"
                        className="block text-gray-500 font-bold mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="border p-2 w-full"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="description"
                        className="block text-gray-500 font-bold mb-2"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="border p-2 w-full h-32"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="location"
                        className="block text-gray-500 font-bold mb-2"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="border p-2 w-full"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Postjob;