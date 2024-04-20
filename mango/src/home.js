import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from './Navbar'


function Home() {
   
  return (
     <>
      <Navbar />
    
      <div className="relative">
        <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
          <div className="">
            <img className="h-full w-full object-cover" src="./img3.jpg" />
          </div>
          <div className="">
            <img className="h-full w-full object-cover" src="./img2.jpg" />
          </div>
          <div className="">
            <img className="h-full w-full object-cover" src="./img1.jpg" />
          </div>
        </Carousel>
        <div className="absolute top-1/4 left-20 pl-20 pt-10 rounded-md w-4/12 transform -translate-y-1/2">
          <div className="text-5xl pb-4">
            Find the right freelance service, right away
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-200 px-5 py-2 rounded-md outline-none"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
