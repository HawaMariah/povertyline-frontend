import React, {useRef} from "react";
import '../App.css';
import * as yup from "yup";
import { useFormik } from "formik";
import '../styles/signup.css'
import img from "../resource/login.jpeg";
import bcrypt from "bcryptjs/dist/bcrypt";

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const userSchema = yup.object().shape({
  email: yup.string().email().required("Please enter valid email"),
  password: yup
    .string()
    .required("Password is required"),
});

const onSubmit = async (values, actions) => {
    // const hashedpassword = bcrypt.hashSync(values.password, 10);
    // console.log(hashedpassword);
    // actions.setValues({...values, hashedpassword: hashedpassword});
    // perform the get here
    const getHashedPass = JSON.parse(window.localStorage.getItem('signup')).hashedpassword
    // const getEmail = JSON.parse(window.localStorage.getItem('signup')).email
    // console.log(getHashedPass)
    // console.log(getEmail)
    console.log(values);
    console.log(actions);
    console.log("submitted");
    const password = values.password
    bcrypt.compare(password, getHashedPass, function(err, isMatch){
        if(err){
            throw err;
        }else if(!isMatch){
            console.log("Password does not match!")
        }else{
            console.log("Password matches!")
        }
    })
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // actions.resetForm(); 
    
};

function LogIn() {
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
      email: "",
      password: "",
    //   hashedpassword: "",
    },
    validationSchema: userSchema,
    onSubmit,
  });
console.log(values)
//   console.log(errors)

  return (
    <>
      <div className="grid md:grid-cols-2   md:h-[100vh]  ">
        <div className=" bg-[#bad9d8] hidden md:block w-[50vw] pt-60 lg:pt-10 ">
          <img className="w-[50vw] h-auto" src={img} alt="Sign Up" />
        </div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12">
          <h1 className="text-center font-bold text-3xl lg:text-3xl mb-1">Log In   </h1>
          <p className="text-center font-Actor font-medium text-xs lg:text-2xl">
            Welcome back!
          </p>

          <div className=" md:mx-auto md:w-auto lg:w-full md:max-w-sm">
            <form
              className="m-0 flex flex-col space-y-10"
              onSubmit={handleSubmit}
              autoComplete="on"
            >
              <label className="">Email</label>
              <input
                className={errors.email && touched.email ? "input-error" : "py-2"}
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
              <a href="#" className="text-[#235F97]">
                SIGN UP
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;