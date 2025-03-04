import React from "react";
import CustomSVG from "./CustomSvg";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      
      <div className="absolute inset-0">
        <img
          src="https://cdn.prod.website-files.com/64d9d44b74f7cd98eec10d8d/6506caf488240a44434d4969_64df83b87ac6a0dbb9e7ad09_city-builds-2.png"
          alt="City Background"
          className="w-full h-full object-cover scale-130"
        />
      </div>

      
 
    
      <div className="absolute inset-0">
        <img
          src="https://cdn.prod.website-files.com/64d9d44b74f7cd98eec10d8d/650dacb76c0643729ec11f33_middle-set.png"
          alt="City Layer 2"
          className="w-full h-full object-cover scale-130 z-50"
        /> 
      </div>

   

      {/* Hotel Pins */}
      <div className="absolute ">
        <img
          src="https://cdn.prod.website-files.com/64d9d44b74f7cd98eec10d8d/64df83b565378b6f1e9b3437_city-builds-6.png"
          alt="Hotel Pin 1"
          className="z-50 scale-130"
        />
      
      </div>
    
      <div className="absolute  top-20 left-80">
        <img
          src="https://cdn.prod.website-files.com/64d9d44b74f7cd98eec10d8d/64df895565378b6f1ea12471_city-builds-7.png"
          alt="Hotel Pin 2"
          className="w-10  h-10  z-40"
        />
      </div>
      <div className="absolute  top-80 left-80 bg-white w-24 pl-2 h-10 rounded-r-4xl  shadow-xl rounded-tl-3xl  flex  items-center ">
      <CustomSVG />
      <h1 className="ml-1 font-bold">€932</h1>
      </div>
      <div className="absolute  top-96 right-80 bg-white w-24 pl-2 h-10 rounded-r-4xl  shadow-xl rounded-tl-3xl  flex  items-center ">
      <CustomSVG />
      <h1 className="ml-1 font-bold">€932</h1>
      </div>
      <div className="absolute  top-[90%] right-52 bg-white w-28 pl-2 h-12 rounded-r-4xl  shadow-xl rounded-tl-3xl  flex  items-center ">
      <CustomSVG />
      <h1 className="ml-1 font-bold text-xl">€932</h1>
      </div>
      <div className="z-0 top-3 absolute ">
      <h1 className="text-gray-600 text-3xl font-bold  mt-20 text-center">Discover your next</h1>
      <h1 className="text-black text-7xl font-bold z-0  mr-12">PERFECT STAY</h1>
      </div>
    </div>
  );
};

export default Hero;
