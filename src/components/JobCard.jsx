import React from 'react';

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h2 className="job-title">{job.title}</h2>
      <p className="company-name">{job.company}</p>
      <p className="job-location">{job.location}</p>
      <p className="job-description">{job.description}</p>
    </div>
  );
};
export default JobCard;
