import React from "react";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
// import Applicant from "./Applicant";
import { useContext } from "react";
import { Link } from "react-router-dom";
// import { dataContext } from "../../data/DataContextProvider";

function ApplicantsTable() {
  // const { applicantsData } = useContext(dataContext);
  // const [applicantsData, setApplicantsData] = useState([]);
  // useEffect(() => {
  //   fetch(` http://localhost:4000/Applicants`)
  //     .then((res) => res.json())
  //     .then((data) => setApplicantsData(data));
  // }, []);
  // console.log(applicantsData);

  const deleteHandler = (id) => {
    console.log(id, "deleted")
  }

  const applicantsData = [
    {
      id: 1,
      name: "Alan James",
      email: "JohnDoe@gmail.com",
      CV: "C:fakepathgoogle-chrome-stable_current_amd64.deb",
    },
    {
      id: 2,
      name: "Jacob Zahoot",
      email: "JohnDoe@gmail.com",
      CV: "C:fakepathgoogle-chrome-stable_current_amd64.deb",
    },
    {
      id: 3,
      name: "Uzumaki Naruto",
      email: "JohnDoe@gmail.com",
      CV: "C:fakepathgoogle-chrome-stable_current_amd64.deb",
    },
    {
      id: 4,
      name: "Catchap muzio",
      email: "JohnDoe@gmail.com",
      CV: "C:fakepathgoogle-chrome-stable_current_amd64.deb",
    },
    {
      id: 5,
      name: "mutune katano",
      email: "JohnDoe@gmail.com",
      CV: "C:\\fakepath\\Gemfile.lock",
    },
  ];
  

  // function onDeleteTransaction(applicant) {
  //   console.log(applicant);
  // }

  const applicantsRow = applicantsData.map((applicant) => (
    <>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {applicant.id}
                </th>
                <td class="px-6 py-4">
                    {applicant.name}
                </td>
                <td class="px-6 py-4">
                    {applicant.email}
                </td>
                <td class="px-6 py-4">
                    {applicant.CV}
                </td>
                {/* <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td> */}

                <td className="edit-td px-6 py-4 text-right">
                  <Link className="bg-red-500 text-white rounded p-2 font-semibold" to="#">Delete</Link>
                  {/* <button className="icon" onClick={() => deleteHandler(id)}>
                    <i className="fa-solid fa-trash-can"></i>
                  </button> */}
                </td>
            </tr></>
    // <tr className="sent-tr" key={applicantsData.id}>
      // <Applicant
      //   onDeleteTransaction={onDeleteTransaction}
      //   id={applicant.id}
      //   name={applicant.name}
      //   email={applicant.email}
      //   CV={applicant.CV}
      // />
    // </tr>
  ));

  return (
    <>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>{applicantsRow}</tbody>
    </table>
</div>

    </>
  );
}

export default ApplicantsTable;
