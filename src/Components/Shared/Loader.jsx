import React from "react";

const Loader = ({ message = "Loading..." }) => {
  return (
    <div className="absolute inset-0 z-40 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-green-600 mb-3"></div>
        <div className="text-gray-700 font-medium">{message}</div>
      </div>
    </div>
  );
};

export default Loader;
