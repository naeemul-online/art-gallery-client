import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./Layout/MainLayout/MainLayout";
import Home from "./Pages/Home/Home";
import AllArtAndCraftItems from "./Pages/AllArtAndCraftItems/AllArtAndCraftItems";
import AddCraftItem from "./Pages/AddCraftItem/AddCraftItem";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";
import FirebaseProvider from "./FirebaseProvider/FirebaseProvider";
import  { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-arts-and-craft-items",
        element: <AllArtAndCraftItems></AllArtAndCraftItems>,
      },
      {
        path: "/add-craft-item",
        element: <AddCraftItem></AddCraftItem>,
      },
      {
        path: "/my-art-craft-list",
        element: <AddCraftItem></AddCraftItem>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </FirebaseProvider>
  </React.StrictMode>
);
