import { useEffect} from "react";
import "./filter.css";
import {useSelector, useDispatch} from 'react-redux'


function Filter({ onFilter, onLocationFilter }) {
  const  jobData = useSelector(state => state.jobs.jobData)
  const  isLoading = useSelector(state => state.jobs.isLoading)

  // const [ jobData, setCareerData ] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);


  useEffect(()=> {
   
  })

  function handleFilter(e) {
    const filterLocation = e.target.value;
    onLocationFilter(filterLocation);
    onFilter(filterData(filterLocation));
  }

  function filterData(filterLocation) {
    if (!filterLocation) {
      // If no location is selected, return all cards
      return jobData;
    } else {
      // Filter careers based on the selected location
      return jobData.filter(
        (career) => career.location.toLowerCase() === filterLocation.toLowerCase()
      );
    }
  }

  //making the location for filtering dynamic
  const locations = jobData.map((job) => {
    return job.location
  })

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
