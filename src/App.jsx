import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
// import Postjob from "./components/Postjob";
// import Contactus from "./components/Contactus";
import SignUp from "./Components/Signup";
import Community from "./Components/Community";
import Home from "./Components/Home";
import "./App.css";
import Top from "./Components/Top";
import LogIn from "./Components/Login";


function App() {
  return (
    <>
      <div>
      <Top />
       
          <Routes>
          <Route exact path="/" element={<Landing />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/login" element={<LogIn />} />
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