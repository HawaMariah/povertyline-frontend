import React, { useState, useEffect, useRef } from "react";
import View from "./View";
import NewJob from "./NewJob";
import { NavLink, Outlet } from "react-router-dom";

import AdminCareerDetails from "./AdminCareerDetails";
import AdminLoadDetailOnInitialRender from "./AdminLoadDetailOnInitialRender";
import Styles from "./Admin-Styles/Styles.css";
import { tab } from "@material-tailwind/react";

function Admin({ jobs, PostFormObjectToServer, deleteFromServer }) {
  const [adminJobs, setAdminJobs] = useState([]);
  const [show, setShow] = useState(false);
  const [showRenderOnLoad, setShowRenderOnLoad] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const [careerDetails, setCareerDetail] = useState({});
  const sendSatateToCareerDetails = { careerDetails, setCareerDetail };
  const [isStatic, setIsStatic] = useState(false);
  console.log(isStatic);

  useEffect(() => {
    setAdminJobs(jobs);
  }, []);

  function tableHandle() {
    setShowTable(!showTable);
  }

  console.log(jobs);
  const btnText = show ? "Close Form" : "Post Job";
  return (
    <div className="grid grid-cols-2 justify-center admin">
      <div>
        {" "}
        <View
          jobs={jobs}
          onClickDetails={sendSatateToCareerDetails}
          setIsStatic={setIsStatic}
          setShowRenderOnLoad={setShowRenderOnLoad}
          showRenderOnLoad={showRenderOnLoad}
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
          {btnText}
        </button>
        <NavLink id="table-link" to="Applications" onClick={tableHandle}>
          Applications
        </NavLink>

        {showTable ? (
          <Outlet />
        ) : (
          <div>
            {show ? (
              <NewJob PostFormObjectToServer={PostFormObjectToServer} />
            ) : (
              <div id="career-detail-admin-section">
                {showRenderOnLoad ? (
                  <AdminCareerDetails
                    careerDetails={careerDetails}
                    isStatic={isStatic}
                  />
                ) : (
                  <AdminLoadDetailOnInitialRender />
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
  // const [jobs, setJobs] = useState([]);
  // const leftSectionRef = useRef(null);
  // const rightSectionRef = useRef(null);

  // useEffect(() => {
  //   fetch("http://localhost:3000/careers")
  //     .then((r) => r.json())
  //     .then((data) => setJobs(data));

  //   const leftSection = leftSectionRef.current;
  //   const rightSection = rightSectionRef.current;

  //   if (leftSection && rightSection) {
  //     leftSection.addEventListener("scroll", handleLeftScroll);
  //   }

  //   return () => {
  //     if (leftSection) {
  //       leftSection.removeEventListener("scroll", handleLeftScroll);
  //     }
  //   };
  // }, []);

  // const handleLeftScroll = () => {
  //   const rightSection = rightSectionRef.current;
  //   if (rightSection) {
  //     rightSection.style.top = `${leftSectionRef.current.scrollTop}px`;
  //   }
  // };

  // return (
  //   <div className="grid grid-cols-2 justify-center">
  //     <div ref={leftSectionRef} style={{ overflowY: "auto", height: "82vh" }}>
  //       <View jobs={jobs} />
  //     </div>
  //     <div>
  //       <NewJob />
  //     </div>
  //   </div>

  //   //right section scroll - remove the height property: ref={rightSectionRef} style={{ overflowY: "auto", height: "500px" }}
}

export default Admin;
