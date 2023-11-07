import React from "react";
import { useContext, useState } from "react";
// //Routes
import { Route, Routes } from "react-router-dom";
//components
import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";
import Admin from "./Admin/Admin";
import Help from "./help/Help";
import Faq from "./help/Faq";
import ContactUs from "./help/ContactUs";
import ApplicantsTable from "./Applicants/ApplicantsTable";

import { createContext } from "react";
export const ApplicantContext = createContext();

function RoutingComponent() {
  const { careerData, PostFormObjectToServer, deleteFromServer } =
    useContext(dataContext);
  const [passFormObjectToApplicantsTable, setPassFormObjectToApplicantsTable] =
    useState("");
  console.log(careerData);

  function PostFormObjectToApplicantServer(applicatant) {
    console.log(applicatant);
  }
  return (
    <Routes>
      <Route
        index
        element={
          <Home
            PostFormObjectToApplicantServer={PostFormObjectToApplicantServer}
          />
        }
      />

      <Route path="/about" element={<About />} />
      {/* <Route
        path="admin"
        element={
          <Admin
            jobs={careerData}
            PostFormObjectToServer={PostFormObjectToServer}
            deleteFromServer={deleteFromServer}
          />
        }
      >
        <Route path="Applications" element={<ApplicantsTable />} />
      </Route>
      <Route path="help" element={<Help />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<ContactUs />} />
      </Route> */}
    </Routes>
  );
}

export default RoutingComponent;
