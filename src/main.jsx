import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Registration from "./component/Registration/Registration";
import Profile from "./component/Profile/Profile";
import Authprovider from "./component/Authprovider/Authprovider";
import Main from "./component/Main/Main";
import Private from "./component/Private/Private";
import Video from "./component/Video/Video";
import Notification from "./component/Notification/Notification";
import Error from "./component/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/', 
        element:<Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      }, 
      {
        path:'/videos', 
        element:<Video></Video>
      },
      {
        path: "/profile",
        element: <Private><Profile></Profile></Private>,
      }, 
      { 
        path:'/notification', 
        element:<Private><Notification></Notification></Private>
      }, 
      {
        path:'*',
        element:<Error></Error>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>
);
