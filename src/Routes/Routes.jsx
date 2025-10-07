import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Components/Root/Root';
import ErrorPage from '../Errorpage/ErrorPage';
import Home from '../Components/Pages/Home/Home';
import Apps from '../Components/Pages/Apps/Apps';
import AppInstalled from '../Components/Pages/Installed/AppInstalled';
import SingleApp from '../Components/Pages/SingleApp/SingleApp';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: '/',
        Component: Home,
        loader: () => fetch('./topview.json')
      },
      {
        path: '/apps',
        Component: Apps,
        loader: () => fetch('./apps.json')
      },
      {
        path: '/installed',
        Component: AppInstalled
      },
      {
        path: '*',
        Component: ErrorPage
      },
      {
        path: '/singlepage/:ids',
        Component: SingleApp,
        loader: async ({ params }) => {
          const res = await fetch('./apps.json');
          const data = await res.json();
          const app = data.find(item => item.id.toString() === params.ids);
          return app;
        }
      }
    ] // close children array
  } // close root route object
]); // close createBrowserRouter
