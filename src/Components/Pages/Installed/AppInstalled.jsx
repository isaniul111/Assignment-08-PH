import React, { useEffect, useState } from "react";
import { getInstalledApps, removeApp, sortInstalledApps } from "../../../utils/localStorageHelper";
import { Star, Download, ChevronDown } from "lucide-react";
import { toast } from "react-toastify";
import Loader from "../../Shared/Loader";

const AppInstalled = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortType, setSortType] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const apps = getInstalledApps();
      setInstalledApps(apps);
      setShowLoader(false);
    }, 400);

    return () => clearTimeout(timeout);
  }, []);

  const handleUninstall = (id) => {
    toast("App Uninstalled Sucessfully");
    removeApp(id);
    setInstalledApps((prev) => prev.filter((app) => app.id !== id));
  };

  const handleSort = (type) => {
    setSortType(type);
    setDropdownOpen(false);
    const sorted = sortInstalledApps(installedApps, type);
    setInstalledApps(sorted);
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md relative">
      {showLoader && (<Loader message="Please wait..."></Loader>)}

      <div className="text-center mb-6 pb-4">
        <h1 className="text-3xl font-bold text-gray-800">Your Installed Apps</h1>
        <p className="text-gray-500 text-sm mt-1">Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="flex items-center justify-between mb-4 text-sm text-gray-600 relative">
        <p className="font-semibold text-xl text-gray-800">
          <span className="font-semibold text-xl text-gray-800">{installedApps.length}</span> Apps Found
        </p>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="border border-gray-400 flex items-center px-3 py-1.5 rounded text-gray-600 text-sm hover:bg-gray-100"
          >
            Sort By {sortType ? `(${sortType})` : ""} <ChevronDown className="w-4 h-4 ml-1" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white rounded shadow-md w-40 z-10">
              <button
                onClick={() => handleSort("name")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Sort by Name
              </button>
              <button
                onClick={() => handleSort("size")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Sort by Size
              </button>
              <button
                onClick={() => handleSort("rating")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Sort by Rating
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4 rounded-lg p-4 bg-gray-50">
        {installedApps.length === 0 && !showLoader ? (
          <p className="text-gray-500 text-center py-8 text-2xl">No apps installed yet.</p>
        ) : (
          installedApps.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between bg-white rounded-md p-3 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center space-x-4">
                <img src={app.image} alt={app.title} className="w-14 h-14 object-cover rounded-md bg-gray-200" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-base">{app.title}</h3>
                  <div className="flex items-center text-xs text-gray-500 space-x-3 mt-1">
                    <span className="flex items-center space-x-1">
                      <Download className="w-3.5 h-3.5 text-green-500" />
                      <span>{app.reviews}M</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Star className="w-3.5 h-3.5 text-orange-400" />
                      <span>{app.ratingAvg}</span>
                    </span>
                    <span>{app.size} MB</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleUninstall(app.id)}
                className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-4 py-1.5 rounded-md transition"
              >
                Uninstall
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AppInstalled;
