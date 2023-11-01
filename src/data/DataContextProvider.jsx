import React, { Children, createContext } from "react";
import { useContext, useState, useEffect } from "react";

const dataContext = createContext();
function DataContextProvider({ children }) {
  const [careerData, setCareerData] = useState([]);
  const [faqData, setFaqData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newlyPosted, setNewlyPosted] = useState(false);
  const [applicantsData, setApplicantsData] = useState();
  const [isDeleted, setIsDeleted] = useState([]);
  const [fetchAfterDelete, setFetchAfterDelete] = useState([]);
  // const [postToApplicantServer, setPostToApplicantServer] = useState({});

  useEffect(() => {
    fetch(`https://skill-hunter-server.onrender.com/careers`)
      .then((res) => res.json())
      .then((data) => setCareerData(data))
      .finally(setIsLoading(false));

    fetch(`https://skill-hunter-server.onrender.com/faq`)
      .then((res) => res.json())
      .then((data) => setFaqData(data))
      .finally(setIsLoading(false));

    fetch(`https://skill-hunter-server.onrender.com/Applicants`)
      .then((res) => res.json())
      .then((data) => setApplicantsData(data));
  }, [newlyPosted, isDeleted]);

  /* function to post the newObject to the  career server */
  function PostFormObjectToServer(newFormObject) {
    console.log(newFormObject);
    setNewlyPosted(!newlyPosted);
    fetch(` https://skill-hunter-server.onrender.com/careers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFormObject),
    });
    // .then((res) => res.json())
    // .then((data) => (data));
  }

  //function to post server to ApplicantServer
  function postToApplicantServer(formObjectApllicants) {
    console.log(formObjectApllicants);
    fetch(`https://skill-hunter-server.onrender.com/Applicants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObjectApllicants),
    })
      .then((res) => res.json())
      .then((data) => setNewlyPosted(!newlyPosted));
  }

  function deleteFromServer(deleteId) {
    console.log(deleteId);

    fetch(`https://skill-hunter-server.onrender.com/careers/${deleteId}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setFetchAfterDelete(data);
      })
      .finally(setIsDeleted(true));
  }

  function deleteFromApllicantsServer(deleteId) {
    console.log(deleteId);

    fetch(`https://skill-hunter-server.onrender.com/Applicants/${deleteId}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
  }

  const values = {
    careerData,
    setCareerData,
    setIsLoading,
    PostFormObjectToServer,
    deleteFromServer,
    faqData,
    setFaqData,
    applicantsData,
    postToApplicantServer,
    deleteFromApllicantsServer,
  };
  return <dataContext.Provider value={values}>{children}</dataContext.Provider>;
}

export default DataContextProvider;
export { dataContext };

//https://skill-hunter-server.onrender.com/careers
//http://localhost:3000/careers
