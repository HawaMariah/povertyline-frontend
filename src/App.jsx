import React, { useEffect } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
//components
import NavBar from "./Components/NavBar";
import "./Components/Navbar.css";
// import Profile from "./Components/Profile";

// import Help from "./Components/help/Help";

// import RoutingComponent from "./components/RoutingComponent";
import Footer from "./Components/Footer";

import Home from 
'./Components/Home'
import { useDispatch } from "react-redux";
import { setLoggedInUser } from "./features/job/jobSlice";

function PostFormObjectToApplicantServer(applicatant) {
  console.log(applicatant);
}

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('token')) {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch(setLoggedInUser(user));
        }
    }
}, []);

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="dark"
      />
      <NavBar />
      <Home
            // PostFormObjectToApplicantServer={PostFormObjectToApplicantServer}
          />
      <Footer />
      {/* <Profile/> */}
    </div>
  );
}

export default App;