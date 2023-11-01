import React from "react";
import { useState, useEffect, useContext } from "react";

// import { dataContext } from "../../data/DataContextProvider";
export default function NewJob({ PostFormObjectToServer }) {
  // const themeFromApp = useContext(dataContext);
  const [FormObject, setFormObject] = useState({
    title: "",
    salary: "",
    location: "",
    company: "",
    description: "",
    type: "",
    experience: "",
    posted: "",
    skills: "",
    details: "",
  });

  function FornObjectCreator(e) {
    const { name, value } = e.target;

    setFormObject((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function formSubmit(e) {
    e.preventDefault();
    // console.log(FormObject);
    PostFormObjectToServer(FormObject);
    setFormObject({
      title: "",
      description: "",
      location: "",
      company: "",
      type: "",
      posted: "",
      skills: "",
      details: "",
      salary: "",
      experience: "",
    });
  }
  return (
    <form onSubmit={formSubmit}>
      <fieldset>
        <div className="input-data">
          <input
            type="text"
            placeholder="title"
            className="inputs"
            name="title"
            value={FormObject.title}
            onChange={FornObjectCreator}
            required
          />
        </div>
        <div className="input-data">
          <input
            type="text"
            placeholder="description"
            className="inputs"
            name="description"
            value={FormObject.description}
            onChange={FornObjectCreator}
            required
          />
        </div>
        <div className="input-data">
          <input
            type="text"
            placeholder="location"
            className="inputs"
            name="location"
            value={FormObject.location}
            onChange={FornObjectCreator}
            required
          />
        </div>
        <div className="input-data">
          <input
            type="text"
            placeholder="company"
            className="inputs"
            name="company"
            value={FormObject.company}
            onChange={FornObjectCreator}
            required
          />
        </div>
        <div className="input-data">
          <input
            type="text"
            placeholder="salary"
            className="inputs"
            name="salary"
            value={FormObject.salary}
            onChange={FornObjectCreator}
            required
          />
        </div>
        <div className="input-data">
          <input
            type="text"
            placeholder="type"
            className="inputs"
            name="type"
            value={FormObject.type}
            onChange={FornObjectCreator}
            required
          />
        </div>
        <div className="input-data">
          <input
            type="text"
            placeholder="experience"
            className="inputs"
            name="experience"
            value={FormObject.experience}
            onChange={FornObjectCreator}
            required
          />
        </div>
        <div className="input-data">
          <input
            type="date"
            placeholder="posted"
            className="inputs"
            name="posted"
            value={FormObject.posted}
            onChange={FornObjectCreator}
            required
          />
        </div>
        <div className="input-data">
          <input
            type="text"
            placeholder="skills"
            className="inputs"
            name="skills"
            value={FormObject.skills}
            onChange={FornObjectCreator}
            required
          />
        </div>
        <div className="input-data">
          <input
            type="text"
            placeholder="details"
            className="inputs"
            name="details"
            value={FormObject.details}
            onChange={FornObjectCreator}
            required
          />
        </div>
        <div className="btn-submit">
          <button className="submit">SUBMIT</button>
        </div>
      </fieldset>
    </form>
  );
}
