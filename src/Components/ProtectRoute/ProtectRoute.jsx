import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectRoute = ({ element }) => {
  // Check if the user is logged in by checking `localStorage`
  const loggedIn = JSON.parse(localStorage.getItem('loggedin'));

  if (!loggedIn) {
    // If not logged in, redirect to the login page
    return <Navigate to="/Login" />;
  }

  // If logged in, return the protected element (the component for the route)
  return element;
};

export default ProtectRoute;
