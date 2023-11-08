import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode"
import axios from "axios";
import { setLoggedInUser } from "../features/job/jobSlice";


import "./signup.css";
import img from "../assets/img1.png";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;


const userSchema = yup.object().shape({
  email: yup.string().email().required("Please enter a valid email"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Password is required"),
});

function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const loggedInUser = useSelector(state => state.jobs.loggedInUser)

  useEffect(() => {
    if (loggedInUser !== null) {
      navigate("/")
    }
  }, [])


  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    console.log("submitted");

    const { email, password, usertype } = values;
    console.log(usertype);

    const fetchUser =  async (email) => {
      return await fetch(`https://skillhunter-sj7f.onrender.com//employees/search?email=${email}`)
    }

    try {
      const response = await axios.post(`https://skillhunter-sj7f.onrender.com/${usertype}s/login`, {
        email: values.email,
        password: values.password,
      })
    
      console.log(response)
      if (response.status === 200) {
        // dispatch(setIsLoading(false))
        console.log("SUCCESS LOG IN")

        const token = response.data.access_token

        localStorage.setItem('token', token);

        const userDetails = await fetchUser(values.email)
        console.log(userDetails)

        const currentLoggedInUser = {
          email: response.data.email,
          username: response.data.username,
          access_token: token,
          id: response.data.id
        }

        dispatch(setLoggedInUser(currentLoggedInUser))
        localStorage.setItem('user', JSON.stringify(currentLoggedInUser));

        if (usertype === "employee") {
          navigate("/findjobs");
        } else {
          navigate("/")
        }
      }
    } catch (error) {
      // Handle error, e.g., display error message to the user
      console.log(error);

      if (error.response.status === 401 || error.response.status === 400) {
        setErrorMessage(error.response.data.message);
      }
    };

    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      usertype: "",
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit,
  });

  return (
    <>
      <div className="grid md:grid-cols-2   md:h-[100vh]  ">
        <div className=" bg-[#bad9d8] hidden md:block w-[50vw] pt-60 lg:pt-10 ">
          <img className="w-[50vw] h-auto" src={img} alt="Sign Up" />
        </div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12">
          <h1 className="text-center font-bold text-3xl lg:text-3xl mb-1">
            Log In{" "}
          </h1>
          <p className="text-center font-Actor font-medium text-xs lg:text-2xl">
            Welcome back!
          </p>

          <div className=" md:mx-auto md:w-auto lg:w-full md:max-w-sm">
            <form
              className="m-0 flex flex-col space-y-10"
              onSubmit={handleSubmit}
              autoComplete="on"
            >

              <label className="">Employee or Employer</label>
              <select id="usertype" name="usertype" onChange={handleChange} value={values.usertype}>
              <option value="Select an option">Select an option</option>
                <option value="employer">Employer</option>
                <option value="employee">Employee</option>
              </select> 


              <label className="">Email</label>
              <input
                className={
                  errors.email && touched.email ? "input-error" : "py-2"
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                id="email"
                type="text"
                placeholder="johndoe@gmail.com"
              />
              {errors.email && touched.email && (
                <p className="error">{errors.email}</p>
              )}
              <label className="">Password</label>
              <input
                className={
                  errors.password && touched.password ? "input-error" : "py-2"
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                id="password"
                type="password"
                placeholder="password"
              />
              {errors.password && touched.password && (
                <p className="error">{errors.password}</p>
              )}
              <button
                disabled={isSubmitting}
                className="bg-[#235F97] flex w-full justify-center rounded-lg px-3 p-2.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="submit"
              >
                LOGIN
              </button>
            </form>
            <div className="ml-5">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#235F97]">
                SIGN UP
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
