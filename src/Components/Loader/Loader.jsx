import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay before hiding the loader
    const timeoutId = setTimeout(() => {
      setIsLoading(false); // Hide loader after 6 seconds
    }, 3000); // Set the delay time as per your preference (e.g., 6 seconds)

    // Clean up the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <img 
          src="https://movflxx.netlify.app/img/preloader.svg" 
          alt="Loading..." 
        />
      </div>
    );
  }

  return null; // Return null if the loader has finished
};

export default Loader;
