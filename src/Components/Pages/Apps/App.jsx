import React from "react";
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const App = ({ app }) => {
  const { id, image, title, downloads, ratingAvg } = app;
  const navigate = useNavigate();
  const hundleClick = (id) => {
    navigate(`/singlepage/${id}`);
  };
  return (
    <div
      onClick={() => hundleClick(id)}
      className="bg-white rounded-xl shadow-sm p-3 
             hover:shadow-lg hover:scale-105 transition-transform transition-shadow duration-300 ease-in-out cursor-pointer"
    >
      <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="mt-2 text-sm font-medium text-gray-800 line-clamp-2">{title}</h3>
      <div className="flex items-center justify-between mt-2 text-xs">
        <div className="flex items-center gap-1 text-green-600 font-medium rounded-lg p-1 bg-[#F1F5E8]">
          <FaDownload /> {downloads}M
        </div>
        <div className="flex items-center gap-1 text-orange-500 font-medium rounded-lg p-1 bg-[#FFF0E1]">
          <FaStar /> {ratingAvg}
        </div>
      </div>
    </div>
  );
};

export default App;
