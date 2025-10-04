import React, { useState, useEffect } from 'react';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home.jsx';
import Movie from './Components/Movie/Movie.jsx';
import TvShow from './Components/TvShow/TvShow.jsx';
import Pricing from './Components/Pricing/Pricing.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Contacts from './Components/Contacts/Contacts.jsx';
import SignUp from './Components/Form/SignUp/SignUp.jsx';
import Login from './Components/Form/Login/Login.jsx';
import ProtectRoute from './Components/ProtectRoute/ProtectRoute.jsx';
import Loader from './Components/Loader/Loader.jsx';

function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate a delay to show the loader for 6 seconds
  //   const timeoutId = setTimeout(() => {
  //     setIsLoading(false); // Hide loader after 6 seconds
  //   }, 6000);

  //   // Clean up the timeout on component unmount
  //   return () => clearTimeout(timeoutId);
  // }, []);

  // // If still loading, show the Loader component
  // if (isLoading) {
  //   return <Loader />;
  // }

  // Define the router after the loading state is finished
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "Login",
      element: <Login />,
    },
    {
      path: "/Home",
      element: <ProtectRoute element={<Home />} />,
    },
    {
      path: "/Movie",
      element: <ProtectRoute element={<Movie />} />,
    },
    {
      path: "/TvShow",
      element: <ProtectRoute element={<TvShow />} />,
    },
    {
      path: "/Pricing",
      element: <ProtectRoute element={<Pricing />} />,
    },
    {
      path: "/Blog",
      element: <ProtectRoute element={<Blog />} />,
    },
    {
      path: "/Contacts",
      element: <ProtectRoute element={<Contacts />} />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
