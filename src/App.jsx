import React from "react";
import Home from "./Components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fruits from "./Components/Fruits/Fruits";
import DairyEgg from "./Components/Dairy&Egg/DairyEgg";
import SeaFood from "./Components/SeaFood.jsx/SeaFood";
import AllProducts from "./Components/AllProducts/AllProducts";
import Layout from "./Components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:'/',
        element:<Home />

      },
      {
        path: "/fruits",
        element: <Fruits />,
      },
      {
        path: "/dairy",
        element: <DairyEgg />,
      },
      {
        path: "/seafood",
        element: <SeaFood />,
      },
      {
        path: "/allproducts",
        element: <AllProducts />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
