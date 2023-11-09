import "./signup.css";
import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import img from "../assets/img1.png";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "../features/job/jobSlice";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const userSchema = yup.object().shape({
  name: yup.string().min(5).required("Name is required"),
  email: yup.string().email().required("Please enter valid email"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Password is required"),
});

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    console.log("submitted");

    const { name, email, username, password, usertype } = values;
    console.log(name, email, username, password);

    await axios
      .post(`https://skillhunter-sj7f.onrender.com/${usertype}s/register`, {
        name: values.name,
        email: values.email,
        username: values.username,
        password: values.password,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          dispatch(setIsLoading(false));
          // setLoggedInUser(response.data);
          // localStorage.setItem('token', response.data.access_token);
          // localStorage.setItem('user', JSON.stringify(response.data));
        }

        // if (usertype === "employee") {
          navigate("/login");
        // } else {
          // navigate("/");
        // }
      })
      .catch((error) => {
        // Handle error.
        console.log(error);
      });

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
      username: "",
      name: "",
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit,
  });

  return (
    <>
      <div className="grid md:grid-cols-2   md:h-[100vh]  ">
        <div className=" bg-[#bad9d8] hidden md:block w-full pt-60 lg:pt-10 ">
          <img className="w-[50vw] h-auto" src={img} alt="Sign Up" />
          <div className="flex justify-center text-[18px]  lg:text-[24px]  ">
            <p>
              Become part of our{" "}
              <span className="text-[#235F97]">community</span>. <br /> Get
              access to our services and life becomes easier with us
            </p>
          </div>
        </div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6">
          <h1 className="text-center font-bold text-3xl lg:text-5xl mb-1">
            Sign Up
          </h1>
          <p className="mb-6 text-center font-medium text-2xl lg:text-4xl">
            The start of something new
          </p>

          <div className="md:mx-auto md:w-auto lg:w-full md:max-w-sm">
            <form
              className="m-0 flex flex-col space-y-2"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div>
                <label className="mb-3">Employee or Employer</label>
                <select
                  id="usertype"
                  name="usertype"
                  onChange={handleChange}
                  value={values.usertype}
                >
                  <option value="Select an option">Select an option</option>
                  <option value="employer">Employer</option>
                  <option value="employee">Employee</option>
                </select>
              </div>

              <div>
                <label className="mb-3">Name</label>
                <input
                  className={errors.name && touched.name ? "input-error" : ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  id="name"
                  type="text"
                  placeholder="John Doe"
                />
                {errors.name && touched.name && (
                  <p className="error">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="mb-3">Username</label>
                <input
                  className={
                    errors.username && touched.username ? "input-error" : ""
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  id="username"
                  type="text"
                  placeholder="johndoe"
                />
                {errors.username && touched.username && (
                  <p className="error">{errors.username}</p>
                )}
              </div>

              <div>
                <label className="mb-3">Email</label>
                <input
                  className={errors.email && touched.email ? "input-error" : ""}
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
              </div>

              <div>
                <label className="mb-4">Password</label>
                <input
                  className={
                    errors.password && touched.password ? "input-error" : ""
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
              </div>

              <button
                disabled={isSubmitting}
                className="bg-[#235F97] flex w-full justify-center rounded-md px-3 p-2.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="submit"
              >
                Sign Up
              </button>
            </form>
            <br />
            <div className="ml-5">
              this isn't my first rodeo{" "}
              <NavLink to="/login" className="text-[#235F97]">
                LOG IN
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
