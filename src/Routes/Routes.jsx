import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import ErrorPage from "../Errorpage/ErrorPage";
import Home from "../Components/Pages/Home/Home";
import Apps from "../Components/Pages/Apps/Apps";
import AppInstalled from "../Components/Pages/Installed/AppInstalled";
import SingleApp from "../Components/Pages/SingleApp/SingleApp";
import AppError from "../Errorpage/AppError";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<Root></Root>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("/topview.json"),
      },
      {
        path: "/apps",
        Component: Apps,
        loader: () => fetch("/apps.json"),
      },
      {
        path: "/installed",
        Component: AppInstalled,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
      {
        path: "/singlepage/:id",
        element: <SingleApp />,
        loader: async ({ params }) => {
          const res = await fetch("/apps.json");
          const data = await res.json();
          const app = data.find((item) => item.id.toString() === params.id);

          if (!app) {
            throw new Response("Not Found", { status: 404 });
          }
          return app;
        },
        errorElement:<AppError></AppError>,
      },
    ],
  }
]);
