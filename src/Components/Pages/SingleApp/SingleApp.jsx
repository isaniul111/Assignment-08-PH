import { useLoaderData } from 'react-router-dom';

const SingleApp = () => {
  const app = useLoaderData();
    console.log(app);
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">{app.title}</h1>
      <img src={app.image} alt={app.title} className="w-80 h-80 object-cover mt-4" />
      <p>Downloads: {app.downloads}M</p>
      <p>Rating: {app.ratingAvg}</p>
    </div>
  );
};

export default SingleApp;
