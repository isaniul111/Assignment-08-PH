import React from 'react';

const Content = () => {
    return (
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-12 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Trusted By Millions, Built For You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-gray-200 text-sm uppercase tracking-wide">
              Total Downloads
            </p>
            <h3 className="text-4xl font-bold my-2">29.6M</h3>
            <p className="text-sm text-gray-300">
              21% More Than Last Month
            </p>
          </div>
          <div>
            <p className="text-gray-200 text-sm uppercase tracking-wide">
              Total Reviews
            </p>
            <h3 className="text-4xl font-bold my-2">906K</h3>
            <p className="text-sm text-gray-300">
              46% More Than Last Month
            </p>
          </div>
          <div>
            <p className="text-gray-200 text-sm uppercase tracking-wide">
              Active Apps
            </p>
            <h3 className="text-4xl font-bold my-2">132+</h3>
            <p className="text-sm text-gray-300">
              31 More Will Launch
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Content;