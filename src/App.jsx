import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import "./App.css";
import Postjob from "./components/Postjob";
import Contactus from "./components/Contactus";
import SignUp from "./components/Signup";
import LogIn from "./components/Login";

import Community from "./components/Community";
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
