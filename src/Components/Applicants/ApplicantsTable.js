import React from "react";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Applicant from "./Applicant";
import { useContext } from "react";
import { dataContext } from "../../data/DataContextProvider";

function ApplicantsTable() {
  const { applicantsData } = useContext(dataContext);
  // const [applicantsData, setApplicantsData] = useState([]);
  // useEffect(() => {
  //   fetch(` http://localhost:4000/Applicants`)
  //     .then((res) => res.json())
  //     .then((data) => setApplicantsData(data));
  // }, []);
  console.log(applicantsData);

  function onDeleteTransaction(applicant) {
    console.log(applicant);
  }

  const applicantsRow = applicantsData.map((applicant) => (
    <tr className="sent-tr" key={applicantsData.id}>
      <Applicant
        onDeleteTransaction={onDeleteTransaction}
        id={applicant.id}
        name={applicant.name}
        email={applicant.email}
        CV={applicant.CV}
      />
    </tr>
  ));

  return (
    <div>
      <table className="table  table-theme">
        <thead className="table-head">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">CV</th>
            <th>
              {" "}
              <i className="fa-solid fa-trash-can"></i>
            </th>
          </tr>
        </thead>

        <tbody>{applicantsRow}</tbody>
      </table>
    </div>
  );
}

export default ApplicantsTable;
