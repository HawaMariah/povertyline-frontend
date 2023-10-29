import React from 'react';
import JobCard from './JobCard'; 

function JobListings({ jobs }) {
    return (
      <div className="job-listings">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    );
  }
  
  export default JobListings;
