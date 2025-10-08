import { useLoaderData } from "react-router-dom";
import { Star, Download, ThumbsUp } from "lucide-react";
import { useState, useEffect } from "react";
import { getInstalledApps, isAppInstalled, installApp } from "../../../utils/localStorageHelper";

const SingleApp = () => {
  const app = useLoaderData();
  const [isInstalled, setIsInstalled] = useState(false);
  useEffect(() => {
    if (isAppInstalled(app.id)) {
      setIsInstalled(true);
    }
  }, [app.id]);

  const handleInstall = () => {
    installApp(app);
    setIsInstalled(true);
  };

  const totalRatings = app.ratings.reduce((sum, r) => sum + r.count, 0);
  const chartMaxScale = 12000;

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center border-b border-gray-300 pb-6">
        <div className="flex items-center gap-4">
          <img src={app.image} alt={app.title} className="w-56 h-56 rounded-xl p-2" />
        </div>

        <div className="flex flex-col gap-2 mt-4 md:mt-0 ml-4">
          <div className="mb-4 border-b-2 border-gray-300 pb-3">
            <h1 className="text-2xl font-bold">{app.title}</h1>
            <p className="text-gray-500">
              Developed by <span className="text-blue-600 font-medium">{app.companyName}</span>
            </p>
          </div>

          <div className="flex items-center gap-6 text-gray-600">
            <p>
              <Download />
              <span className="text-xl font-semibold text-black">
                {(app.downloads / 1000000).toFixed(1)}M
              </span>
              <br /> Downloads
            </p>
            <p>
              <Star size={22} className="text-yellow-500 fill-yellow-500" />
              <span className="text-xl font-semibold text-black">{app.ratingAvg}</span>
              <br /> Avg Rating
            </p>
            <p>
              <ThumbsUp />
              <span className="text-xl font-semibold text-black">
                {(app.reviews / 1000).toFixed(0)}K
              </span>
              <br /> Reviews
            </p>
          </div>

          {/* Install Button */}
          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`${
              isInstalled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#7dad85] hover:bg-green-600"
            } text-white px-3 py-2 rounded-md font-semibold`}
          >
            {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Description</h2>
        <p className="text-gray-700 leading-relaxed">{app.description}</p>
      </div>
    </div>
  );
};

export default SingleApp;
