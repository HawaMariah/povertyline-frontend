
import React, { useEffect } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setJobData } from "../../features/job/jobSlice";


const jobSchema = yup.object().shape({
  title: yup.string().min(5).required("title is required"),
  description: yup.string().min(5).required("description is required"),
  salary: yup.string().min(5).required("salary is required"),
  location: yup.string().min(5).required("location is required"),
  type: yup.string().min(5).required("type is required"),
});


// import { dataContext } from "../../data/DataContextProvider";
export default function NewJob({ PostFormObjectToServer }) {
  // const themeFromApp = useContext(dataContext);
  // const [FormObject, setFormObject] = useState({
  //   title: "",
  //   salary: "",
  //   location: "",
  //   company: "",
  //   description: "",
  //   type: "",
  //   experience: "",
  //   posted: "",
  //   skills: "",
  //   details: "",
  // });

  const dispatch = useDispatch()
  const loggedInUser = useSelector(state => state.jobs.loggedInUser)
  const baseUrl = useSelector(state => state.jobs.baseUrl)

  function FornObjectCreator(e) {
    const { name, value } = e.target;

    setFormObject((prevState) => {
      return { ...prevState, [name]: value };
    });
  }


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
      title: "",
      description: "",
      salary: "",
      location: "",
      type: "",
    },
    validationSchema: jobSchema,
    onSubmit,
  });

  async function onSubmit(e) {
    e.preventDefault();

    const newJobDetials = {
      title: values.title,
      description: values.description,
      salary: values.salary,
      location: values.location,
      type: values.type,
      employer_id: loggedInUser.id
    }

    const response = await axios.post(`${baseUrl}/employers/post_job`, newJobDetials)

    if (response && response.status === 201) {
      const res = await axios.get(`${baseUrl}/jobs`)
      if (res && res.status === 200) {
        const updatedJobs = res.data
        dispatch(setJobData(updatedJobs))
      }
    }

    console.log(response)
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 mt-4">

      <div className="md:mx-auto md:w-auto lg:w-full md:max-w-lg">
        <form onSubmit={handleSubmit} className="m-0 flex flex-col space-y-2 px-6">
              <input name="employer_id" id="employer_id" type="hidden" value={loggedInUser.id}></input>
              <div>
                <label className="mb-2">Type</label>
                <select
                  id="type"
                  name="type"
                  onChange={handleChange}
                  value={values.type}
                >
                  <option value="Select an option">Select an option</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                </select>
              </div>


            <div>
              <label className="mb-2">title</label>
              <input
                className={errors.title && touched.title ? "input-error" : ""}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                id="title"
                type="text"
                placeholder=""
              />
              {errors.title && touched.title && (
                <p className="error">{errors.title}</p>
              )}
            </div>

            <div>
              <label className="mb-2">location</label>
              <input
                className={errors.location && touched.location ? "input-error" : ""}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.location}
                id="location"
                type="text"
                placeholder=""
              />
              {errors.location && touched.location && (
                <p className="error">{errors.location}</p>
              )}
            </div>


            <div>
              <label className="mb-2">salary</label>
              <input
                className={errors.salary && touched.salary ? "input-error" : ""}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.salary}
                id="salary"
                salary="text"
                placeholder=""
              />
              {errors.salary && touched.salary && (
                <p className="error">{errors.salary}</p>
              )}
            </div>


            <div>
              <label className="mb-2">description</label>
              <input
                className={errors.description && touched.description ? "input-error" : ""}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                id="description"
                description="text"
                placeholder=""
              />
              {errors.description && touched.description && (
                <p className="error">{errors.description}</p>
              )}
            </div>

            <button
              disabled={isSubmitting}
              className="bg-[#235F97] flex w-full justify-center rounded-md px-3 p-2.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="submit"
            >
              Post Job
            </button>
        </form>
      </div>
    </div>
  );
}










// import React from "react";
// import { useState, useEffect, useContext } from "react";

// const jobSchema = yup.object().shape({
//   title: yup.string().min(5).required("title is required"),
//   description: yup.string().min(5).required("description is required"),
//   salary: yup.string().min(5).required("salary is required"),
//   location: yup.string().min(5).required("location is required"),
//   type: yup.string().min(5).required("type is required"),
// });


// // import { dataContext } from "../../data/DataContextProvider";
// export default function NewJob({ PostFormObjectToServer }) {
//   // const themeFromApp = useContext(dataContext);
//   // const [FormObject, setFormObject] = useState({
//   //   title: "",
//   //   salary: "",
//   //   location: "",
//   //   company: "",
//   //   description: "",
//   //   type: "",
//   //   experience: "",
//   //   posted: "",
//   //   skills: "",
//   //   details: "",
//   // });

//   function FornObjectCreator(e) {
//     const { name, value } = e.target;

//     setFormObject((prevState) => {
//       return { ...prevState, [name]: value };
//     });
//   }


//   const {
//     values,
//     errors,
//     touched,
//     isSubmitting,
//     handleBlur,
//     handleChange,
//     handleSubmit,
//   } = useFormik({
//     initialValues: {
//       title: "",
//       description: "",
//       salary: "",
//       location: "",
//       type: "",
//     },
//     validationSchema: jobSchema,
//     onSubmit,
//   });

//   function onSubmit(e) {
//     e.preventDefault();
//     // console.log(FormObject);
//     // PostFormObjectToServer(FormObject);
//     // setFormObject({
//     //   title: "",
//     //   description: "",
//     //   location: "",
//     //   company: "",
//     //   type: "",
//     //   posted: "",
//     //   skills: "",
//     //   details: "",
//     //   salary: "",
//     //   experience: "",
//     // });
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <fieldset>
//         <div className="input-data">
//           <input
//             type="text"
//             placeholder="title"
//             className="inputs"
//             name="title"
//             value={FormObject.title}
//             onChange={FornObjectCreator}
//             required
//           />
//         </div>

//         <div className="input-data">
//           <input
//             type="text"
//             placeholder="description"
//             className="inputs"
//             name="description"
//             value={FormObject.description}
//             onChange={FornObjectCreator}
//             required
//           />
//         </div>

//         <div className="input-data">
//           <input
//             type="text"
//             placeholder="location"
//             className="inputs"
//             name="location"
//             value={FormObject.location}
//             onChange={FornObjectCreator}
//             required
//           />
//         </div>
//         <div className="input-data">
//           <input
//             type="text"
//             placeholder="company"
//             className="inputs"
//             name="company"
//             value={FormObject.company}
//             onChange={FornObjectCreator}
//             required
//           />
//         </div>
//         <div className="input-data">
//           <input
//             type="text"
//             placeholder="salary"
//             className="inputs"
//             name="salary"
//             value={FormObject.salary}
//             onChange={FornObjectCreator}
//             required
//           />
//         </div>
//         <div className="input-data">
//           <input
//             type="text"
//             placeholder="type"
//             className="inputs"
//             name="type"
//             value={FormObject.type}
//             onChange={FornObjectCreator}
//             required
//           />
//         </div>
//         <div className="input-data">
//           <input
//             type="text"
//             placeholder="experience"
//             className="inputs"
//             name="experience"
//             value={FormObject.experience}
//             onChange={FornObjectCreator}
//             required
//           />
//         </div>
//         <div className="input-data">
//           <input
//             type="date"
//             placeholder="posted"
//             className="inputs"
//             name="posted"
//             value={FormObject.posted}
//             onChange={FornObjectCreator}
//             required
//           />
//         </div>
//         <div className="input-data">
//           <input
//             type="text"
//             placeholder="skills"
//             className="inputs"
//             name="skills"
//             value={FormObject.skills}
//             onChange={FornObjectCreator}
//             required
//           />
//         </div>
//         <div className="input-data">
//           <input
//             type="text"
//             placeholder="details"
//             className="inputs"
//             name="details"
//             value={FormObject.details}
//             onChange={FornObjectCreator}
//             required
//           />
//         </div>
//         <div className="btn-submit">
//           <button className="submit">SUBMIT</button>
//         </div>
//       </fieldset>
//     </form>
//   );
// }