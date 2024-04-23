import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const ShowProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [edit, setEdit] = useState(false);
  const [editedFields, setEditedFields] = useState({
    skills: [],
  });

   const [rating2, setRating2] = useState(0); // cooment this line after backend integration


  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(id);
        if (localStorage.getItem("user") === id) {
          navigate("/myprofile/" + id);
          return;
        }

        const response = await fetch(`http://localhost:5000/myprofile/${id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        if (data.flag === 2) {
          console.log("dfiojofsd");
          navigate("/login");
        }
        setEditedFields(data.result);
      } catch (error) {
        console.error(error);
        alert("Could not fetch user data");
      }
    };

    fetchData();
  }, []);

  const handleRating = async (rating) => {
       setRating2(rating)
       
    // try {
    //   const response = await fetch("http://localhost:5000/rateit", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(rating),
    //   });

    //   // Handle response if needed
    // } catch (error) {
    //   console.error(error);
    //   alert("Could not submit rating");
    // }
  };

  const handleAssignProject = () => {
    navigate("/assignproject");
  };

  return (
    <>
      <Navbar />
      <div className="h-screen bg-gray-800 flex justify-center items-center">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-5/12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-green-900">Profile</h2>

            {/* Rating stars */}
            <div className="flex items-center">
              <span className="text-gray-700 text-sm font-bold mr-2">
                Rate:
              </span>
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`text-lg mr-1 cursor-pointer ${
                    index < rating2 ? "text-yellow-500" : "text-gray-400"
                  }`}
                  onClick={() => handleRating(index + 1)}
                >
                  ★
                </span>
              ))}
             
            </div>
          </div>

          {/* Username */}
          <div className="flex items-center mb-4">
            <label
              className="text-gray-700 text-sm font-bold mr-2"
              htmlFor="username"
            >
              Username:
            </label>
            <div className="border-none bg-transparent py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full">
              {editedFields.username}
            </div>
          </div>
          <hr className="mb-4" />

          {/* Name */}
          <div className="flex items-center mb-4">
            <label
              className="text-gray-700 text-sm font-bold mr-2"
              htmlFor="name"
            >
              Name:
            </label>
            <div className="border-none bg-transparent py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full">
              {editedFields.name}
            </div>
          </div>
          <hr className="mb-4" />

          {/* Email */}
          <div className="flex items-center mb-4">
            <label
              className="text-gray-700 text-sm font-bold mr-2"
              htmlFor="email"
            >
              Email:
            </label>
            <div className="border-none bg-transparent py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full">
              {editedFields.email}
            </div>
          </div>
          <hr className="mb-4" />

          {/* Skills */}
          <div className="flex items-center mb-4">
            <label
              className="text-gray-700 text-sm font-bold mr-2"
              htmlFor="skills"
            >
              Skills:
            </label>
            <div className="border-none bg-transparent py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full">
              {editedFields.skills}
            </div>
          </div>
          <hr className="mb-4" />

          {/* Rating */}
          <div className="flex items-center mb-4">
            <label
              className="text-gray-700 text-sm font-bold mr-2"
              htmlFor="rating"
            >
              Rating:
            </label>
            <div className="border-none bg-transparent py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full">
              {editedFields.rating}
            </div>
          </div>
          <hr className="mb-4" />

          <div className="flex items-center mb-4">
            <label
              className="text-gray-700 text-sm font-bold mr-2"
              htmlFor="projectID"
            >
              Project ID:
            </label>
            <div className="border-none bg-transparent py-1 px-3 text-gray-700 w-full">
              {editedFields.project_id}
            </div>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold px-2 ml-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleAssignProject}
            >
              Assign Project
            </button>
          </div>
          <hr className="mb-4" />
        </div>
      </div>
    </>
  );
};

export default ShowProfile;
