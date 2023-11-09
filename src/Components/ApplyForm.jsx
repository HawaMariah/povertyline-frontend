import React, { useEffect } from "react";
import { useState} from "react";
import { toast } from "react-toastify";
import { useRef } from "react";
import emailjs from "@emailjs/browser";



function ApplyForm() {
  useEffect(() => {
    emailjs.init("rZNjwCu7QYQwYwSoa")
  })

  const form = useRef();
  const sendEmail = () => { 
    const serviceId = "service_o77mhct"
    const templateId = "template_u70t73l"

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        "rZNjwCu7QYQwYwSoa"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          alert ('message succesfully sent')
        
        },
        (error) => {
          console.log(error.text);
        }
      );
   
  };

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

    sendEmail();
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
      <form onSubmit={formSubmit} ref={form}>
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

export default ApplyForm;
