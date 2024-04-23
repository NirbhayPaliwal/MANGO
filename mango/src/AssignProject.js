import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const AssignProject = () => {
  const [data, setData] = useState({});

  const handleClick = () => {
        
  };

  const handleInput = (e) => {
    setData({ ...data, [e.target.id]: e.target.value }); // Send the data to the backend ....
  };

  return (
    <div>
      <Navbar />

      <div className="mx-auto container  mt-8">
        {" "}
        {/*mx-auto */}
        <h2 className="text-2xl font-bold mb-4">Assign Project</h2>
        <div className="flex flex-col">
          {/* Project Name */}
          <div className="mb-4">
            <label
              htmlFor="projectName"
              className="block text-sm font-bold mb-2"
            >
              Project Name:
            </label>

            <input
              type="text"
              id="projectName"
              className="border border-gray-300 rounded py-2 px-3 w-full"
              placeholder="Enter project name"
              onChange={(e) => handleInput(e)}
            />
          </div>
          {/* Deadline */}

          <div className="mb-4">
            <label htmlFor="deadline" className="block text-sm font-bold mb-2">
              Deadline:
            </label>
            <input
              type="date"
              id="deadline"
              className="border border-gray-300 rounded py-2 px-3 w-full"
              onChange={(e) => handleInput(e)}
            />
          </div>

          {/* Project Demands */}
          <div className="mb-4">
            <label
              htmlFor="projectDemands"
              className="block text-sm font-bold mb-2"
            >
              Project Demands:
            </label>
            <textarea
              id="projectDemands"
              className="border border-gray-300 rounded py-2 px-3 w-full"
              rows="4"
              placeholder="Enter project demands"
              onChange={(e) => handleInput(e)}
            ></textarea>
          </div>
        </div>
        {/* Submit Button */}
        
          <div className="mt-10 flex justify-end">
            <button
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded   focus:outline-none focus:shadow-outline"
              //  onClick={handleClick}
            >
              Assign Project
            </button>
          </div>
        


      </div>
    </div>
  );
};

export default AssignProject;
