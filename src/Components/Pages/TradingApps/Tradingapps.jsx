import React, { use } from "react";
import Topapps from "./Topapps";

const Tradingapps = ({ datas }) => {
  return (
    <div className="p-8">
      <h3 className="text-center text-5xl font-bold mb-4">Trading Apps</h3>
      <p className="text-center text-gray-500 mb-5">Explore All Trending Apps on the Market developed by us</p>
      <div className="grid grid-cols-1 lg:grid-cols-4 w-11/12 gap-4 mx-auto">
        {datas.map((data) => (
          <Topapps key={data.id} data={data} />
        ))}
      </div>
      <div className="flex justify-center mt-7">
        <button className="btn btn-primary">Show All</button>
      </div>
    </div>
  );
};

export default Tradingapps;
