import React from 'react';
import { createBrowserRouter } from 'react-router'
import Root from '../Components/Root/Root';
import ErrorPage from '../Errorpage/ErrorPage';
import Home from '../Components/Pages/Home/Home';

export const router=createBrowserRouter([
  {
    path:'/',
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            path:'/',
            Component:Home,
            
        }
    ],    
}
]);