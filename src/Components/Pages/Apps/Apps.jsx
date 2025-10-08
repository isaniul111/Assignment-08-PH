import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import App from "./App";
import Loader from "../../Shared/Loader";
import AppError from "../../../Errorpage/AppError";

const Apps = () => {
  const apps = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredApps, setFilteredApps] = useState(apps);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setFilteredApps(apps);
  }, [apps]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setShowLoader(true);

    setTimeout(() => {
      const filtered = apps.filter((app) => app.title.toLowerCase().includes(query.toLowerCase()));
      setFilteredApps(filtered);
      setShowLoader(false);
    }, 500); // 1 second delay for loader
  };

  return (
    <div className="bg-[#f5eded]">
      <div className="w-11/12 mx-auto relative ">
        <h3 className="text-center text-4xl font-bold pt-7">Our All Applications</h3>
        <p className="text-center text-gray-400 mt-3">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>

        <div className="flex items-center justify-between mt-4">
          <h2 className="text-lg font-semibold">({filteredApps.length}) Apps Found</h2>
          <label className="input w-52 flex items-center relative">
            <svg className="h-[1em] opacity-50 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search Apps"
              className="w-full px-2 py-1 rounded"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 w-11/12 gap-4 mx-auto mt-4 relative">
          {showLoader && <Loader message="Please wait..."></Loader>}

          {filteredApps.length > 0 ? (
            filteredApps.map((app) => <App key={app.id} app={app} />)
          ) : (
            <div className="col-span-full text-center text-gray-500 text-4xl font-bold mt-8">No apps found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apps;
