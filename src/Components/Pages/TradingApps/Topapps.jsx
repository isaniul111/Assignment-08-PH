import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";

const Topapps = ({ data }) => {
  const { image, title, downloads, ratingAvg } = data;

  return (
    <div className="bg-white rounded-xl shadow-sm p-3 transform transition duration-300 hover:shadow-lg hover:scale-105">
      <div className="w-full aspect-[1/1] bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
        />
      </div>

      <h3 className="mt-2 text-sm font-medium text-gray-800 line-clamp-2">{title}</h3>
      <div className="flex items-center justify-between mt-2 text-xs">
        <div className="flex items-center gap-1 text-green-600 font-medium rounded-lg p-1 bg-[#F1F5E8] transition-transform duration-300 hover:scale-110">
          <FaDownload /> {downloads}M
        </div>
        <div className="flex items-center gap-1 text-orange-500 font-medium rounded-lg p-1 bg-[#FFF0E1] transition-transform duration-300 hover:scale-110">
          <FaStar /> {ratingAvg}
        </div>
      </div>
    </div>
  );
};

export default Topapps;
