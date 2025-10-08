import React from "react";
import banner from "../../../assets/hero.png";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="max-w-full mx-auto bg-[#f5eded] space-y-4 pt-8">
      <h3 className="text-5xl font-bold text-center">We Build</h3>
      <h3 className="text-5xl font-bold text-center">
        <span className="text-blue-600">Productive </span>
        Apps
      </h3>
      <p className="text-[1rem] text-gray-500 text-center">
        At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
        <br></br> Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>
      <div className="mx-auto gap-2">
        <div className="flex justify-center gap-3 mt-4">
          <button className="btn bg-white flex items-center gap-2 px-4 py-2 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <FaGooglePlay />
            <a href="https://play.google.com/store/games?hl=en" target="_blank" rel="noopener noreferrer">
              Google Play
            </a>
          </button>

          <button className="btn bg-white flex items-center gap-2 px-4 py-2 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <FaAppStore />
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              App Store
            </a>
          </button>
        </div>
      </div>
      <img className="justify-center mx-auto max-w-5/6" src={banner} alt="" />
    </div>
  );
};

export default Hero;
