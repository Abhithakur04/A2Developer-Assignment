import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSectionPage from "./components/HeroSection";
import BookTrialForm from "./components/BookTrialForm";


const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HeroSectionPage /> },
      { path: "/book-trial", element: <BookTrialForm /> },
    ],
  },
]);


export default function App() {
  return <RouterProvider router={router} />;
}
