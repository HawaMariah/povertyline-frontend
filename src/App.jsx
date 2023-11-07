// import React, { useState } from "react";
// import "./App.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Route, Routes } from "react-router-dom";
// //components
// import NavBar from "./Components/NavBar";
// import "./Components/Navbar.css";
// import RoutingComponent from "./Components/RoutingComponent";
// // import Help from "./Components/help/Help";

// // import RoutingComponent from "./components/RoutingComponent";
// import Footer from "./Components/Footer";

// import Home from 
// './Components/Home'

// function PostFormObjectToApplicantServer(applicatant) {
//   console.log(applicatant);
// }

// function App() {

//   return (
//     <div className="App">
//       <RoutingComponent/>
//       {/* <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//       <NavBar />
//       <Home
//             // PostFormObjectToApplicantServer={PostFormObjectToApplicantServer}
//           />
//       <Footer /> */}
//     </div>
//   );
// }

// export default App;


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import "./index.css";
// import Postjob from "./components/Postjob";
// import Contactus from "./components/Contactus";
import SignUp from "./Components/Signup";
import Community from "./Components/Community";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <div>
       
       
          <Routes>
          <Route exact path="/" element={<Landing />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/community" element={<Community />} />
            <Route exact path="/findjobs" element={<Home />} />
          
          </Routes>
         
        
        {/* <Postjob/> */}
        {/* <Contactus/> */}
       

       
      </div>
    </>
  );
}

export default App;