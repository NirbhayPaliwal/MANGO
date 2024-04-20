
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
// import { useNavigate } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const Developers = () => {
    
    const [items, setItems] = useState([]);
      const { id } = useParams();
       const navigate = useNavigate();
    useEffect(() => {
      // Simulating data fetching (replace with your actual data fetching logic)
      const fetchData = async () => {
        try {
          // Fetch data from API or any other source
          // Example:
          console.log(id);
          const response = await fetch("http://localhost:5000/developers/"+id, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            // body: JSON.stringify(items), //send syntax
          });
          const data = await response.json();
          if(data.result.length==0)
          {
              alert(data.message);
              navigate('/home');
          }
          else
          {
            // console.log(data.result);
          } // Update state with fetched data
          setItems(data.result);
          console.log(items);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData(); // Call the fetch function
    }, [id]); 


//



        return (
          <div>
            <Navbar />
            <div className="container bg-dark-subtle mt-5 py-5 border border-warning">
              <div className="text-center text-warning-emphasis">
                <h1>Web Developers</h1>
              </div>
              <div className="p-5 row">
                {items.map((item) => (
                  <div key={item._id}   className="card border-warning mt-5 p-4 col-5 mx-auto">
                    <div className="card-body">
                       <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">
                        Rating :{" "}
                        <span className="fw-bold">{item.rating}</span>
                      </p>
                      <p className="card-text">
                        username {" "}
                        <span className="fw-bold">
                          {item.username}
                        </span>
                      </p>
                      {/* <p className="card-text">
                        <small className="text-body-secondary">
                          Added on {item.time.substr(0, 10)} by{" "}
                          <a
                            className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            href={`http://localhost:3000/profile/${item.userReporting.email}`}
                          >
                            {item.userReporting.name}
                          </a>
                        </small>
                      </p> */}
                    </div>
                    {/* <img
                      src={item.photoURL}
                      className="card-img-bottom"
                      alt="..."
                    /> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
}

export default Developers;