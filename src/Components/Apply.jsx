import React from "react";
import ApplyForm from "./ApplyForm";
import {useSelector, useDispatch} from 'react-redux'
import Register from "./Register";
import Login from "./Login";


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
        <Login />
      )}
    </div>
  );
}

export default Apply;
