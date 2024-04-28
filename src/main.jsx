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
import { Toaster } from "react-hot-toast";
import MyArtAndCraftList from "./Pages/MyArtAndCrafList/MyArtAndCraftList";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import NotFound from "./PrivateRoute/NotFound";
import UpdateCraftItem from "./Pages/UpdateCraftItem/UpdateCraftItem";
import AllCraftsViewDetails from "./Pages/AllCraftViewDetails/AllCraftsViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
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
        element: (
          <PrivateRoute>
            <AddCraftItem></AddCraftItem>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-art-craft-list",
        element: (
          <PrivateRoute>
            <MyArtAndCraftList></MyArtAndCraftList>
          </PrivateRoute>
        )
      },
      {
        path: "/my-art-craft-list/:id",
        element: <UpdateCraftItem></UpdateCraftItem>
      },
      {
        path: "/allCraftViewDetails/:id",
        element: (
          <PrivateRoute>
            <AllCraftsViewDetails></AllCraftsViewDetails>
          </PrivateRoute>
        )
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
