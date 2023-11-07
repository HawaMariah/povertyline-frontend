import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoading } from "../features/job/jobSlice";

function Register() {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [FormObject, setFormObject] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
    });

    function FornObjectCreator(e) {
        const { name, value } = e.target;
    
        setFormObject((prevState) => {
          return { ...prevState, [name]: value };
        });
      }

  async function formSubmit(e) {
    e.preventDefault();
    dispatch(setIsLoading(true))

    await axios.post('https://skillhunter-sj7f.onrender.com/employees/register', FormObject)
        .then((response) => {
            console.log(response)
            if (response.status === 201) {
                dispatch(setIsLoading(false))
                // setLoggedInUser(response.data);
                // localStorage.setItem('token', response.data.access_token);
                // localStorage.setItem('user', JSON.stringify(response.data));
            }

            navigate('/');
        }).catch((error) => {
            // Handle error.
            console.log(error);

            if (error.response.status === 401 || error.response.status === 400) {
                setErrorMessage(error.response.data.message);
            }
        });

    setFormObject({
        name: "",
        email: "",
        username: "",
        password: "",
        });
  }

  const handleFormClose = () => {
    console.log("CLOSE")
  }

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
                  Register - Enter your details
                </h1>
                <label
                  htmlFor="name"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={FormObject.name}
                  onChange={FornObjectCreator}
                  required
                  className="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="James Paul"
                />
                <label
                  htmlFor="username"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  username
                </label>
                <input
                  id="username"
                  name="username"
                  autoComplete="username"
                  value={FormObject.username}
                  onChange={FornObjectCreator}
                  required
                  className="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="jamespaul"
                />
                <label
                  htmlFor="email"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={FormObject.email}
                  onChange={FornObjectCreator}
                  required
                  className="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="johndoe@gmail.com"
                />
                <label
                  htmlFor="password"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={FormObject.password}
                  onChange={FornObjectCreator}
                  required
                  className="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="password"
                />
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

export default Register;
