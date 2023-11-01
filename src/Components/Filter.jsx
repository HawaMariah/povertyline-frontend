import { useContext, useEffect, useState } from "react";
import { dataContext } from "../data/DataContextProvider";
import "./filter.css";

function Filter({ onFilter, onLocationFilter }) {
  const [ careerData, setCareerData ] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(()=> {
    fetch(`https://skill-hunter-server.onrender.com/careers`)
    .then((res) => res.json())
    .then((data) => setCareerData(data))
    .finally(setIsLoading(false));
  })

  function handleFilter(e) {
    const filterLocation = e.target.value;
    onLocationFilter(filterLocation);
    onFilter(filterData(filterLocation));
  }

  function filterData(filterLocation) {
    if (!filterLocation) {
      // If no location is selected, return all cards
      return careerData;
    } else {
      // Filter careers based on the selected location
      return careerData.filter(
        (career) => career.location.toLowerCase() === filterLocation.toLowerCase()
      );
    }
  }

  //making the location for filtering dynamic
  const locations = [
    "Nairobi",
    "Mombasa",
    "Kisumu",
    "Nakuru",
    "Eldoret",
    "Machakos",
    "Kisii",
    "Nyeri",
    "Embu",
    "Kakamega",
  ];

  return (
    <div className="filter">
      {/*onChange event to get selected location
          value="" ensures that there is no selected option by default
      */}
      <select
        onChange={handleFilter}
        className="text-gray-800 border border-gray-300 rounded-lg bg-gray-50"
      >
        <option value="">Location</option>
        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>    
  );
}

export default Filter;
