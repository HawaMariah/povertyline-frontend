import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import "./App.css";
import Postjob from "./components/Postjob";
import Contactus from "./components/Contactus";
import SignUp from "./components/Signup";
import LogIn from "./components/Login";

import Community from "./components/Community";

import React, { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
//components
import NavBar from "./Components/NavBar";
import "./Components/Navbar.css";
// import Help from "./Components/help/Help";

// import RoutingComponent from "./components/RoutingComponent";
import Footer from "./Components/Footer";

import Home from "./Components/Home";

function PostFormObjectToApplicantServer(applicatant) {
  console.log(applicatant);
}
function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/community" element={<Community />} />
            <Route exact path="/login" element={<LogIn />} />
          </Routes>
        </Router>
        {/* <Postjob/> */}
        {/* <Contactus/> */}

        {/* <LogIn/> */}
      </div>
    </>
  );
}

export default App;
