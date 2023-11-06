import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import "./App.css";
import Postjob from "./components/Postjob";
import Contactus from "./components/Contactus";
import SignUp from "./components/Signup";


import Community from "./components/Community";
function App() {
  return (
    <>
      <div>
        {/* <Router>
       
          <Routes>
          <Route exact path="/" element={<Landing />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/community" element={<Community />} />
          </Routes>
         
        </Router> */}
        {/* <Postjob/> */}
        <Contactus/>
       

       
      </div>
    </>
  );
}

export default App;
