import React from "react";
import { useEffect, useRef } from "react";
import {useSelector, useDispatch} from 'react-redux'

import Card from "./Card";
import JobDetails from "./JobDetails";
import Filter from "./Filter";
import "./home.css";
import NoResultsCard from "./NoResultsCard";
import Newsletter from "./Newsletter";
import { setJobData, setIsLoading, setFilteredData, setJobId ,setSearchTerm,setSelectedLocation} from "../features/job/jobSlice";

function Home({ PostFormObjectToApplicantServer }) {
  const dispatch =useDispatch()


  const jobData = useSelector(state => state.jobs.jobData)
  const isLoading = useSelector(state => state.jobs.isLoading)
  const filteredData = useSelector(state => state.jobs.filteredData)
  const jobId = useSelector(state => state.jobs.jobId)
  const  searchTerm = useSelector(state => state.jobs.searchTerm)
  const  selectedLocation = useSelector(state => state.jobs.setSelectedLocation)


  // const [ jobData, setJobData ] = useState([]);
  // const [isLoading, setIsLoading] = useState(false)
  // const [jobId, setJobId] = useState();
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  // State to store the selected location from the filter dropdown
  // const [selectedLocation, setSelectedLocation] = useState("");

  // State to store the filtered data based on both search term and location
  // const [filteredData, setFilteredData] = useState([]);

  // State to hold the search term
  // const [searchTerm, setSearchTerm] = useState("");

  // Function to update the search term
  function handleSearch(event) {
    dispatch(setSearchTerm(event.target.value));
  }

  // Function to update the selected location based on filter dropdown selection
  function handleLocationFilter(filterLocation) {
    dispatch(setSelectedLocation(filterLocation));
  }

  // Update the filteredData when jobData, searchTerm, or selectedLocation changes

  useEffect(() => {
    if (jobData.length === 0) {
    fetch(`https://poverty-line-backend3.onrender.com/jobs`)
    .then((res) => res.json())
    .then((data) => dispatch(setJobData(data)))
    .finally(dispatch(setIsLoading(false)));
    }


    const leftSection = leftSectionRef.current;
    const rightSection = rightSectionRef.current;

    // Filter the jobData based on the search term
    const searchedData = jobData.filter((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //set filteredData to searchedData: no location is selected in this case
    let filteredData = searchedData;

    // If a location is selected, further filter based on location
    if (selectedLocation) {
      filteredData = searchedData.filter(
        (job) =>
          job.location.toLowerCase() === selectedLocation.toLocaleLowerCase()
      );
    }

    // Update the filteredData state with the result; search term, location selected, or both
    dispatch(setFilteredData(filteredData));

    if (leftSection && rightSection) {
      leftSection.addEventListener("scroll", handleLeftScroll);
    }

    return () => {
      if (leftSection) {
        leftSection.removeEventListener("scroll", handleLeftScroll);
      }
    };
  }, [jobData, dispatch, searchTerm, selectedLocation]);

  function getJobIdFromCard(id) {
    // console.log(id);
    dispatch(setJobId(id));
  }

  // Function to handle the filter change and update filteredData
  function handleFilterChange(filteredjobs) {
    dispatch(setFilteredData(filteredjobs));
  }

  // Create JSX for displaying job cards based on the filteredData
  const displayJobdata = filteredData.map((job) => {
    return (
      <span id="car-span" key={job.id}>
        {" "}
        <Card onButtonClick={getJobIdFromCard} job={job} />
      </span>
    );
  });

  const handleLeftScroll = () => {
    const rightSection = rightSectionRef.current;
    if (rightSection) {
      rightSection.style.top = `${leftSectionRef.current.scrollTop}px`;
    }
  };

  return (
    <>
      <div>
        <div className="grid grid-cols-2 justify-center" id="home-main-div">
          <div>
            <section className="py-px lg:pb-18 mb-1 bg-gray-100 overflow-hidden">
              {/* adjustable viewheight */}
              <div id="home-card-div" ref={leftSectionRef}>
                {/* Search bar and filter dropdown */}
                <div className="search-bar relative flex max-w-3xl mb-5 mt-5 shadow-lg mx-auto">
                  <input
                    type="text"
                    id="default-search"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search"
                    className="w-full px-4 text-gray-800 border border-gray-900 rounded-lg"
                  />
                  <Filter
                    onFilter={handleFilterChange}
                    onLocationFilter={handleLocationFilter}
                  />
                </div>

                {/* Render the filtered jobs */}
                {displayJobdata.length === 0 ? (
                  <NoResultsCard />
                ) : (
                  displayJobdata
                )}
              </div>
            </section>
          </div>

          <div
            ref={rightSectionRef}
            style={{ overflowY: "auto" }}
            className="max-w-1xl px-4 py-4 mx-auto "
          >
            <JobDetails
              jobData={jobData}
              jobId={jobId}
              // PostFormObjectToApplicantServer={PostFormObjectToApplicantServer}
            />
          </div>
        </div>
      </div>
      {/* <Newsletter /> */}
    </>
  );
}

export default Home;
