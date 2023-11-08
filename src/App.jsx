import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedInUser } from "./features/job/jobSlice";


import Landing from "./Components/Landing";
// import Postjob from "./components/Postjob";
//import ContactUs from "./Components/Contactus";
import SignUp from "./Components/Signup";
import Community from "./Components/Community";
import Home from "./Components/Home";
import "./App.css";
import Top from "./Components/Top";
import LogIn from "./Components/Login";
import Profile from "./Components/Profile";


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
    <>
      <div>
      <Top />
       
           <Routes>
          <Route exact path="/" element={<Landing />} />
            <Route exact path="/userprofile" element={<Profile/>} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/login" element={<LogIn />} />
            <Route exact path="/community" element={<Community />} />
            <Route exact path="/findjobs" element={<Home />} />
          
          </Routes> 
          
        
        {/* <Postjob/> */}
       
       

       
      </div>
    </>
  );
}

export default App;