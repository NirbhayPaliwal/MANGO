import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userPro from "./user.png";
import proimage from "./pro.svg";
import bell from "./bell.png"; // Import the bell icon
import rightIcon from "./right.png"; // Import the accept icon
import wrongIcon from "./wrong.png"; // Import the reject icon

const Navbar = () => {
  const navigate = useNavigate();
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isNotificationsDropdownOpen, setIsNotificationsDropdownOpen] =
    useState(false);
  // const [notifications, setNotifications] = useState([]);
  const curr = localStorage.getItem("user");
  const whichUser = localStorage.getItem("flag");

  const isLoggedIn = true;

  let ProfileLink;
  console.log(whichUser);
  if (whichUser !== "1") ProfileLink = "../profile/" + curr;
  else ProfileLink = "../ProfileClient/" + curr;

  // useEffect(() => {
  //   fetchNotifications();
  // }, []);

  // const fetchNotifications = () => {
  //   if (whichUser === "1") {
  //     // Client specific notifications
  //     fetch("/api/client/notifications") // Replace with your client notifications endpoint
  //       .then(response => response.json())
  //       .then(data => {
  //         setNotifications(data.notifications);
  //       })
  //       .catch(error => {
  //         console.error("Error fetching client notifications:", error);
  //       });
  //   } else {
  //     // Non-client notifications
  //     fetch("/api/freelancer/notifications") // Replace with your freelancer notifications endpoint
  //       .then(response => response.json())
  //       .then(data => {
  //         setNotifications(data.notifications);
  //       })
  //       .catch(error => {
  //         console.error("Error fetching freelancer notifications:", error);
  //       });
  //   }
  // };

  const [notifications, setNotifications] = useState([
    { _id: "1", projectName: "Project d", currentCode: "Pending" },
    { _id: "2", projectName: "Project a", currentCode: "Accepted" },
    { _id: "3", projectName: "Project G", currentCode: "Pending" },
  ]);

  const handleServiceDropdownToggle = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const handleNotificationsDropdownToggle = () => {
    setIsNotificationsDropdownOpen(!isNotificationsDropdownOpen);
  };

  const handleServiceClick = (service) => {
    navigate("../developers/" + service);
    console.log("Selected service:", service);
  };

  const handleClickLogin = () => {
    navigate("../login");
  };

  const handleClickLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("flag");
    navigate("../home");
  };

  const handleViewProject = (id) => {
    navigate("../viewproject/" + id);
  };

  const handleAccept = (id) => {
    console.log(`Accepted project with id: ${id}`);

    // sendNotificationToClient(id, "accept");
    // transfer this project from pending to accepted category ......
  };

  const handleReject = (id) => {
    console.log(`Rejected project with id: ${id}`);
    // Send reject notification to client

    //sendNotificationToClient(id, "reject");
  };

  // const sendNotificationToClient = (projectId, action) => {
  //   // Replace this with your actual notification sending logic to the client
  //   fetch(`/api/sendNotification/${projectId}/${action}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       projectId,
  //       action,
  //     }),
  //   })
  //     .then(response => {
  //       if (response.ok) {
  //         console.log(`Notification sent to client for project ${projectId} (${action})`);
  //         // Optionally update UI to reflect notification sent
  //       } else {
  //         console.error(`Failed to send notification to client for project ${projectId}`);
  //         // Handle error scenario
  //       }
  //     })
  //     .catch(error => {
  //       console.error("Error sending notification:", error);
  //       // Handle error scenario
  //     });
  // };

  return (
    <div className="sticky h-20 top-0 z-50 bg-teal-100 flex justify-between items-center shadow-md px-10">
      <div className="flex items-center space-x-6">
        <a href="/home">
          <img src={proimage} className="w-20 h-20 cursor-pointer" alt="Logo" />
        </a>
      </div>

      <div className="flex items-center space-x-6">
        <a
          className="text-lg text-gray-800 hover:text-blue-600 transition duration-300"
          href="/home"
        >
          Home
        </a>

        <div
          className="relative"
          onMouseEnter={handleServiceDropdownToggle}
          onMouseLeave={handleServiceDropdownToggle}
        >
          <div className="text-lg cursor-pointer hover:text-blue-600 transition duration-300">
            Services
          </div>
          {isServicesDropdownOpen && (
            <div className="absolute mt-2 shadow-lg rounded-md bg-white w-40">
              <ul className="py-1 z-10">
                <li
                  className="py-2 px-4 cursor-pointer hover:bg-blue-200 transition duration-300"
                  onClick={() => handleServiceClick("WebDeveloper")}
                >
                  Web Developer
                </li>
                <li
                  className="py-2 px-4 cursor-pointer hover:bg-gray-200 transition duration-300"
                  onClick={() => handleServiceClick("AppDeveloper")}
                >
                  App Developer
                </li>
                <li
                  className="py-2 px-4 cursor-pointer hover:bg-gray-200 transition duration-300"
                  onClick={() => handleServiceClick("LogoMaking")}
                >
                  Logo Making
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-6">
        {isLoggedIn && (
          <div
            className="relative"
            onMouseEnter={handleNotificationsDropdownToggle}
            onMouseLeave={handleNotificationsDropdownToggle}
          >
            <img
              src={bell}
              className="h-8 w-8 cursor-pointer"
              alt="Notifications"
            />
            {notifications.length > 0 && (
              <span className="absolute top-0 right-0 inline-block w-4 h-4 text-xs font-bold leading-tight text-center text-white bg-red-500 rounded-full">
                {notifications.length}
              </span>
            )}
            {isNotificationsDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg">
                <ul className="py-1">
                  {notifications.map((notification) => (
                    <li
                      key={notification._id}
                      className="py-2 pr-4 flex justify-between items-center cursor-pointer hover:bg-gray-200"
                    >
                      <span onClick={() => handleViewProject(notification._id)}>
                        {notification.projectName}
                      </span>
                      <span className="flex space-x-2">
                        {whichUser !== "1" ? (
                          <React.Fragment>
                            <img
                              src={rightIcon}
                              className="h-6 w-6 cursor-pointer transform hover:scale-110 transition duration-200"
                              alt="Accept"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAccept(notification._id);
                              }}
                            />
                            <img
                              src={wrongIcon}
                              className="h-6 w-6 cursor-pointer transform hover:scale-110 transition duration-200"
                              alt="Reject"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleReject(notification._id);
                              }}
                            />
                          </React.Fragment>
                        ) : (
                          <span>Current State: {notification.currentCode}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {isLoggedIn ? (
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center">
              <img
                src={userPro}
                alt="Profile"
                className="rounded-full h-12 w-12 cursor-pointer"
              />
              <a
                className="text-blue-900 underline text-sm mt-1"
                href={ProfileLink}
              >
                {curr}
              </a>
            </div>
            <button
              className="px-4 py-2 text-white bg-gray-800 hover:bg-gray-700 rounded transition duration-300"
              onClick={handleClickLogout}
            >
              Log Out
            </button>
          </div>
        ) : (
          <button
            className="h-12 px-4 py-2 text-white bg-gray-800 hover:bg-gray-700 rounded transition duration-300"
            onClick={handleClickLogin}
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
