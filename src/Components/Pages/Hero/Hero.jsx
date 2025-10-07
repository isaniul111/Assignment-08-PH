import React from "react";
import banner from "../../../assets/hero.png";
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";
const Hero = () => {
  return (
    <div className="max-w-full mx-auto bg-[#f5eded] space-y-4 pt-8">
      <h3 className="text-5xl font-bold text-center">We Build</h3>
      <h3 className="text-5xl font-bold text-center">
        <span className="text-blue-600">Productive </span>
        Apps
      </h3>
      <p className="text-xs text-gray-600 text-center">
        At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
        <br></br> Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>
      <div className="mx-auto gap-2">
        <div className="flex justify-center gap-3 mt-4">
          <button className="btn">
            <FaGooglePlay />
            <a href="https://play.google.com/store/games?hl=en">Google Play</a>
          </button>
          <button className="btn">
            <IoLogoAppleAppstore />
            <a href="https://www.apple.com/app-store/">App Store</a>
          </button>
        </div>
      </div>
      <img className="justify-center mx-auto max-w-5/6" src={banner} alt="" />
    </div>
  );
};

export default Hero;
