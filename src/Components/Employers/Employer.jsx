import React, { useState, useEffect, useRef } from "react";
import View from "./View";
import NewJob from "./NewJob";
import { NavLink, Outlet } from "react-router-dom";
import EmployerJobDetails from "./EmployerJobDetails";

// import AdminCareerDetails from "./AdminCareerDetails";
// import AdminLoadDetailOnInitialRender from "./AdminLoadDetailOnInitialRender";
// import Styles from "./Admin-Styles/Styles.css";
// import { tab } from "@material-tailwind/react";

function Employer({ jobs, PostFormObjectToServer, deleteFromServer }) {
  // const [adminJobs, setAdminJobs] = useState([]);
  // const [show, setShow] = useState(false);
  // const [showRenderOnLoad, setShowRenderOnLoad] = useState(false);
  // const [showTable, setShowTable] = useState(false);

  // const [careerDetails, setCareerDetail] = useState({});
  // const sendSatateToCareerDetails = { careerDetails, setCareerDetail };
  // const [isStatic, setIsStatic] = useState(false);
  // console.log(isStatic);

  useEffect(() => {
    // setAdminJobs(jobs);
  }, []);

  function tableHandle() {
    setShowTable(!showTable);
  }

  console.log(jobs);
  // const btnText = show ? "Close Form" : "Post Job";
  return (
    <div className="grid grid-cols-2 justify-center admin">
      <div>
        {" "}
        <View
          jobs={jobs}
          // onClickDetails={sendSatateToCareerDetails}
          // setIsStatic={setIsStatic}
          // setShowRenderOnLoad={setShowRenderOnLoad}
          // showRenderOnLoad={showRenderOnLoad}
          deleteFromServer={deleteFromServer}
        />
      </div>
      <div>
        <button
          id="fortmButton"
          onClick={() => {
            setShow(!show);
          }}
        >
          {/* {btnText} */}
        </button>
        <NavLink id="table-link" to="Applications" onClick={tableHandle}>
          Applications
        </NavLink>

        {/* {showTable ? ( */}
          <Outlet />
        {/* ) : ( */}
          <div>
            {/* {show ? ( */}
              {/* <NewJob PostFormObjectToServer={PostFormObjectToServer} /> */}
            {/* ) : ( */}
              <div id="career-detail-admin-section">
                {/* {showRenderOnLoad ? ( */}
                  <EmployerJobDetails
                    // careerDetails={careerDetails}
                    // isStatic={isStatic}
                  />
                {/* // ) : ( */}
                  {/* <AdminLoadDetailOnInitialRender /> */}
                {/* // )} */}
              </div>
            {/* // )} */}
          </div>
        {/* )} */}
      </div>
    </div>
  );
 }

export default Employer;