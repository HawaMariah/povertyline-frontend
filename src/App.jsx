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

import Home from 
'./Components/Home'

function PostFormObjectToApplicantServer(applicatant) {
  console.log(applicatant);
}

function App() {

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
    </div>
  );
}

export default App;