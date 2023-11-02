// import React from "react";

// import * as yup from "yup";
// import { useFormik } from "formik";
// // import '../styles/signup.css'

// // password rules
// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

// // user schema and what is needed
// const userSchema = yup.object().shape({
//     name: yup.string().min(5).required("Name is required"),
//     email: yup.string().email().required("Please enter valid email"),
//     password: yup
//         .string()
//         .min(5)
//         .matches((passwordRules, { message: "Please create a stronger password" }))
//         .required("Password is required"),
// })

// // what to do upon submission
// const onSubmit = async (values, actions) => {
//     console.log(values);
//     console.log(actions);
//     console.log("submitted");
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     actions.resetForm();
//   };

// function SignUp(){
//     // initiating formik var
//     const {
//         values,
//         errors,
//         touched,
//         isSubmitting,
//         handleBlur,
//         handleChange,
//         handleSubmit,
//       } = useFormik({
//         initialValues: {
//           name: "",
//           email: "",
//           password: "",

//         },
//         validationSchema: userSchema,
//         onSubmit,
//       });
//     // console.log(errors)

//     return (
//         <>
//         <div className="flex flex-wrap min-h-full pt-16">
//         <div className="">
//             <img className="object-cover" src="https://malihomesolutions.co.ke/wp-content/uploads/2021/03/Kikuyu-Grass.jpg" alt="Sign Up"/>
//         </div>
//         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 ">
//             <h1 className="text-center leading-5 text-xs">Sign Up</h1>
//             <p className="pl-44 font-serif font-normal">The start of something new</p>

//             <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//                 <form
//                     className="m-0 flex flex-col space-y-10"
//                     onSubmit={handleSubmit}
//                     autoComplete="off"
//                     >
//                     <label className="">Name</label>
//                         <input
//                         className={errors.name && touched.name? "input-error" : ""}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values.name}
//                         id="name"
//                         type="text"
//                         placeholder="John Doe"
//                         />
//                         {errors.name && touched.name && <p className="error">{errors.name}</p>}
//                     <label className="">Email</label>
//                         <input
//                         className={errors.email && touched.email? "input-error" : ""}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values.email}
//                         id="email"
//                         type="text"
//                         placeholder="johndoe@gmail.com"
//                         />
//                         {errors.email && touched.email && <p className="error">{errors.email}</p>}
//                     <label className="">Password</label>
//                         <input
//                         className={errors.password && touched.password? "input-error" : ""}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values.password}
//                         id="password"
//                         type="password"
//                         placeholder="password"/>
//                         {errors.password && touched.password && <p className="error">{errors.password}</p>}
//                     <button disabled={isSubmitting} className="bg-[#235F97] flex w-full justify-center rounded-md px-3 p-2.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit">SIGN UP</button>
//                 </form>
//             </div>
//         </div>
//         </div>
//         </>
//     )
// };

// export default SignUp
//bg-[#bad9d8]


import "./signup.css";
import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import img from "../assets/img1.png";

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

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  console.log("submitted");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
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
    },
    validationSchema: userSchema,
    onSubmit,
  });

  return (
    <>
    
      <div className="flex flex-wrap   h-[100vh] ">
        <div className="w-[50vw] bg-[#bad9d8]">
          <img className="w-[50vw] h-[40vw]" src={img} alt="Sign Up" />
          <div className="ml-40 text-[24px]  ">
          <p>Become part of  our <span className="text-[#235F97]">community</span>. <br /> Get access to our services
and life becomes easier with us</p></div>
        </div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12">
          <h1
            style={{
              textAlign: "center",
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Sign Up
          </h1>
          <p style={{ textAlign: "center", fontSize: "2rem" }}>
            The start of something new
          </p>

          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="m-0 flex flex-col space-y-10"
              onSubmit={handleSubmit}
              autoComplete="off"
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
            this isn't my first rodeo <a href="#" className="text-[#235F97]">SIGN IN</a>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default SignUp;