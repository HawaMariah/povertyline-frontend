import React from "react";
import ApplyForm from "./ApplyForm";
import {useSelector, useDispatch} from 'react-redux'
import Register from "./Register";
import Login from "./Login";
import { NavLink } from "react-router-dom";


function Apply() {
  // const dispatch =useDispatch()
  const loggedInUser = useSelector(state => state.jobs.loggedInUser)

  // const renderForms = () => {
  //   if (loggedInUser !== null) {
  //     return <ApplyForm />
  //   } else {
  //     return <Login />
  //   }
  // }

  // return (
  //   // <ApplyForm />
  //   // <Register />
  //   <Login />
  return (
    <div>
      {loggedInUser ? (
        <ApplyForm />
      ) : (
        <div className="p-10 text-xl mt-6">You are not logged in. Click here to {" "}
          <NavLink to="/login" className="underline text-blue-500">login</NavLink> 
          {" "}or {" "}<NavLink to="/signup" className="underline text-blue-500">Sign Up</NavLink></div>
      )}
    </div>
  );
}

export default Apply;
