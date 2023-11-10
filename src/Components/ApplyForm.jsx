import React, { useEffect } from "react";
import { useState} from "react";
import { toast } from "react-toastify";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function ApplyForm() {
  const baseUrl = useSelector(state => state.jobs.baseUrl)
  const navigate = useNavigate()
  const loggedInUser = useSelector(state => state.jobs.loggedInUser)
  useEffect(() => {
    emailjs.init("rZNjwCu7QYQwYwSoa")
  })

  const form = useRef();
  const sendEmail = () => { 
    const serviceId = "service_o77mhct"
    const templateId = "template_h28a5h8"

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
    "name": "",
    "date_of_birth": "",
    "nationality": "",
    "city": "",
    "email": "",
    "mobile": "",
    "role": "",
    "work_duration": "",
    "work_location": "",
    "work_description": "",
    "school": "",
    "major": "",
    "year_completed": 1
  });

  const saveJob = async () => {
    return axios.post(`${baseUrl}/employees/apply/2`, {
      "name": "BENNY VILLA",
      "date_of_birth": "1990-01-01",
      "nationality": "US",
      "city": "New York",
      "user_email": "bennyhouse11@gmail.com",
      "mobile": "+1 555-1234",
      "role": "Software Engineer",
      "work_duration": "Full-time",
      "work_locati  on": "Remote",
      "work_description": "Experienced software engineer with a focus on web development.",
      "school": "University of XYZ",
      "major": "Computer Science",
      "year_completed": 2015
    }, {
      headers: {
        Authorization: `Bearer ${loggedInUser.access_token}`
      }
    })
  }
  

  function FornObjectCreator(e) {
    const { name, value } = e.target;

    setFormObject((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  async function formSubmit(e) {
    e.preventDefault();
    
    try {

      console.log(loggedInUser)
      console.log(FormObject);
      // postToApplicantServer(FormObject);

      const response = await saveJob()
      console.log(response)

      if (response.status === 201) {
        sendEmail();
        toastSuccessfullyApplied();

        setFormObject({
          "date_of_birth": "",
          "nationality": "",
          "city": "",
          "user_email": "",
          "mobile": "",
          "role": "",
          "work_duration": "",
          "work_location": "",
          "work_description": "",
          "school": "",
          "major": "",
          "year_completed": 1
      });
      
        navigate("/findjobs")
    }

    } catch (err) {
      console.log(error)
    }
  }

  function handleFormClose() {
    setCloseForm(!closeForm);
  }

  const toastSuccessfullyApplied = () =>
    toast(`Your Application has been successfully submited...`, {
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
                  // required
                  className="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="James Paul"
                />

                <label
                  for="user_email"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  Email Address
                </label>
                <input
                  id="user_email"
                  name="user_email"
                  value={FormObject.user_email}
                  onChange={FornObjectCreator}
                  // required
                  className="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="johndoe@gmail.com"
                />


                <label
                  for="date"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  Date of birth
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={FormObject.date}
                  onChange={FornObjectCreator}
                  // required
                  className="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="johndoe@gmail.com"
                />


<label
                  for="nationality"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  Nationality
                </label>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  value={FormObject.nationality}
                  onChange={FornObjectCreator}
                  // required
                  className="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="Kenya"
                />


<label
                  for="city"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  city
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={FormObject.city}
                  onChange={FornObjectCreator}
                  // required
                  className="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="Nairobi"
                />


<label
                  for="mobile"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  mobile
                </label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={FormObject.mobile}
                  onChange={FornObjectCreator}
                  // required
                  className="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="+1 555-1234"
                />


<label
                  for="role"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={FormObject.role}
                  onChange={FornObjectCreator}
                  // required
                  className="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="Software engineer"
                />


<label
                  for="work_duration"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  work_duration
                </label>
                <input
                  type="text"
                  id="work_duration"
                  name="work_duration"
                  value={FormObject.work_duration}
                  onChange={FornObjectCreator}
                  // required
                  className="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="Full time"
                />


<label
                  for="work_location"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  work_location
                </label>
                <input
                  type="text"
                  id="work_location"
                  name="work_location"
                  value={FormObject.work_location}
                  onChange={FornObjectCreator}
                  // required
                  className="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="Remote"
                />



<label
                  for="work_description"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  work_description
                </label>
                <input
                  type="text"
                  id="work_description"
                  name="work_description"
                  value={FormObject.work_description}
                  onChange={FornObjectCreator}
                  // required
                  className="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder=""
                />


<label
                  for="school"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  school
                </label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  value={FormObject.school}
                  onChange={FornObjectCreator}
                  // required
                  className="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="University of XYZ"
                />


<label
                  for="major"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  major
                </label>
                <input
                  type="text"
                  id="major"
                  name="major"
                  value={FormObject.major}
                  onChange={FornObjectCreator}
                  // required
                  className="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="Computer Science"
                />


<label
                  for="year_completed"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  year_completed
                </label>
                <input
                  type="text"
                  id="year_completed"
                  name="year_completed"
                  value={FormObject.year_completed}
                  onChange={FornObjectCreator}
                  // required
                  className="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="2015"
                />



              </div>
              <div className="p-3  mt-2 text-center space-x-4 md:block">
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
