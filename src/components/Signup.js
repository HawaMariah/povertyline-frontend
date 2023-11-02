import React from "react";
import '../App.css';
import * as yup from "yup";
import { useFormik } from "formik";
import '../styles/signup.css'

// password rules
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/; 

// user schema and what is needed
const userSchema = yup.object().shape({
    name: yup.string().min(5).required("Name is required"),
    email: yup.string().email().required("Please enter valid email"), 
    password: yup
        .string()
        .min(5)
        .matches((passwordRules, { message: "Please create a stronger password" }))
        .required("Password is required"),
})

// what to do upon submission  
const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    console.log("submitted");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };


function SignUp(){
    // initiating formik var
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
    // console.log(errors)

    return (
        <>
        <div className="flex flex-wrap min-h-full pt-16">
        <div className="">
            <img className="object-cover" src="https://malihomesolutions.co.ke/wp-content/uploads/2021/03/Kikuyu-Grass.jpg" alt="Sign Up"/>
        </div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 ">
            <h1 className="text-center leading-5 text-xs">Sign Up</h1>
            <p className="pl-44 font-serif font-normal">The start of something new</p>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form 
                    className="m-0 flex flex-col space-y-10" 
                    onSubmit={handleSubmit} 
                    autoComplete="off"
                    >
                    <label className="">Name</label>
                        <input 
                        className={errors.name && touched.name? "input-error" : ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        id="name"
                        type="text" 
                        placeholder="John Doe"
                        />
                        {errors.name && touched.name && <p className="error">{errors.name}</p>}
                    <label className="">Email</label>
                        <input 
                        className={errors.email && touched.email? "input-error" : ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        id="email"
                        type="text" 
                        placeholder="johndoe@gmail.com"
                        />
                        {errors.email && touched.email && <p className="error">{errors.email}</p>}
                    <label className="">Password</label>
                        <input 
                        className={errors.password && touched.password? "input-error" : ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        id="password"
                        type="password" 
                        placeholder="password"/>
                        {errors.password && touched.password && <p className="error">{errors.password}</p>}
                    <button disabled={isSubmitting} className="bg-[#235F97] flex w-full justify-center rounded-md px-3 p-2.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit">SIGN UP</button>
                </form>
            </div>  
        </div>
        </div>
        </>
    )
};

export default SignUp