import React from "react";
import '../App.css';
import * as yup from "yup";
import { useFormik } from "formik";
import '../styles/signup.css'
import img from "../resource/signup.jpeg";
import bcrypt from "bcryptjs/dist/bcrypt";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const userSchema = yup.object().shape({
  name: yup.string().min(5).required("Name is required"),
  email: yup.string().email().required("Please enter valid email"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {message : "Please create a stronger password." })
    .required("Password is required"),
});
// It must contain at least one digit, one lowercase letter and one uppercase letter and must be at least 5 characters long.
const onSubmit = async (values, actions) => {

  const hashedpassword = bcrypt.hashSync(values.password, 10);
  console.log(hashedpassword + "AFTER submission");
  actions.setValues({...values, hashedpassword: hashedpassword});
  console.log(values);
//    console.log(actions);
  console.log("submitted");

// put post api here
window.localStorage.setItem('signup', JSON.stringify({values}))
  await new Promise((resolve) => setTimeout(resolve, 1000));
  //actions.resetForm(); 
};

function SignUp() {
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
      name: "",
      email: "",
      password: "",
      hashedpassword: "",
    },
    validationSchema: userSchema,
    onSubmit,
  });

  console.log(values)

  return (
    <>
      <div className="grid md:grid-cols-2   md:h-[100vh]  ">
        <div className=" bg-[#bad9d8] hidden md:block w-[50vw] pt-60 lg:pt-10 ">
          <img className="w-[50vw] h-auto" src={img} alt="Sign Up" />
          <div className="flex justify-center text-[18px] lg:text-[24px]  ">
            <p>
              Become part of our{" "}
              <span className="text-[#235F97]">community</span>. <br /> Get
              access to our services and life becomes easier with us
            </p>
          </div>
        </div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12">
          <h1 className="text-center font-bold text-3xl lg:text-5xl mb-1">Sign Up</h1>
          <p className="text-center font-medium text-2xl lg:text-4xl">
            The start of something new
          </p>

          <div className=" md:mx-auto md:w-auto lg:w-full md:max-w-sm">
            <form
              className="m-0 flex flex-col space-y-10"
              onSubmit={handleSubmit}
              autoComplete="on"
            >
              <label className="">Name</label>
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
              <label className="">Email</label>
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
              <label className="">Password</label>
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
              <button
                disabled={isSubmitting}
                className="bg-[#235F97] flex w-full justify-center rounded-md px-3 p-2.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="submit"
              >
                SIGN UP
              </button>
            </form>
            <br />
            <div className="ml-5">
              This isn't my first rodeo!{" "}
              <a href="#" className="text-[#235F97]">
                LOGIN
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;