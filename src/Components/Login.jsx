import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { jwtDecode } from "jwt-decode"
import { useDispatch } from "react-redux";
import { setIsLoading, setLoggedInUser } from "../features/job/jobSlice";

function Login() {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [FormObject, setFormObject] = useState({
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

    const { username, password } = FormObject;
    
    // check if username input is an email, if it is email, add email key and use the email input value
    let finalData = null
    if (username.indexOf("@") > 1) {
      finalData = {email: username, password }
      console.log("EMAIl")
    } else {
      finalData = {username, password }
    }

    await axios.post('https://skillhunter-sj7f.onrender.com/employees/login', finalData)
        .then((response) => {
            console.log(response)
            if (response.status === 200) {
                dispatch(setIsLoading(false))
                console.log("SUCCESS LOG IN")

                const token = response.data.access_token

                var decoded = jwtDecode(token)
                console.log(decoded)

                const user = {username, access_token: token}
                localStorage.setItem('token', token);
                dispatch(setLoggedInUser())
                localStorage.setItem('user', JSON.stringify(user));
            }

            navigate('/');
        }).catch((error) => {
            // Handle error.
            console.log(error);

            // if (error.response.status === 401 || error.response.status === 400) {
                // setErrorMessage(error.response.data.message);
            // }
        });

    setFormObject({
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
                  Log in to your account
                </h1>
                
                <label
                  htmlFor="username"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  username or e-mail address
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
                {/* <button
                  onClick={handleFormClose}
                  className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                >
                  Cancel
                </button> */}
                <button
                  type="submit"
                  className="mb-2 md:mb-0 bg-[#6d9b99] border  border-bg-[#6d9b99] px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-600"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
