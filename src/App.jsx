import React from 'react';
import JobListings from './components/JobListings'; // Import the JobListings component

const jobData = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Tech Company Inc.',
    location: 'New York, NY',
    description: 'We are looking for a skilled frontend developer to join our team...',
  },
  {
    id: 2,
    title: 'UX Designer',
    company: 'Design Studio Co.',
    location: 'San Francisco, CA',
    description: 'We are seeking a creative and experienced UX designer to work on exciting projects...',
  },
  // Add more job listings as needed
];

function App() {
  return (
    <div className="App">
      <h1>Job Listings</h1>
      <JobListings jobs={jobData} /> {/* Pass the job data as a prop */}
    </div>
  );
}

export default App;
