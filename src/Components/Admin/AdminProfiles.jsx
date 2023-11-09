import React from 'react'

const AdminProfiles = () => {
    

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex justify-between items-center justify-center">
          {/* <div className="w-1/3">
            <img
              src="company_logo.png"
              alt="Company Logo"
              className="w-20 h-20 rounded-full object-cover"
            />
          </div> */}
          <div className="pl-4">
            <h1 className="text-2xl font-bold">Company Name</h1>
            <p className="text-gray-600">Industry: Technology</p>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">About Us</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Location</h2>
          <p className="text-gray-700">
            <strong>Continent:</strong> Africa
          </p>
          <p className="text-gray-700">
            <strong>Country:</strong> Kenya
          </p>
          <p className="text-gray-700">
            <strong>City:</strong> Nairobi
          </p>
          <p className="text-gray-700">
            <strong>Address:</strong> 123 Main Street
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminProfiles;
