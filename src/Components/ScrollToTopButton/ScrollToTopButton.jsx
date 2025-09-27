import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";


const ScrollToTopButton = () => {
  // State to handle button visibility
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility based on scroll position
  const checkScrollTop = () => {
    if (!isVisible && window.pageYOffset > 200) {
      setIsVisible(true);
    } else if (isVisible && window.pageYOffset <= 200) {
      setIsVisible(false);
    }
  };

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Adding scroll event listener on component mount
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop); // Clean up on unmount
  }, [isVisible]);

  return (
        <button
        
        onClick={scrollToTop}
        
        className={`fixed right-12 bottom-36 p-4 bg-primary text-black rounded-full shadow-lg 
            transition-all duration-1000 ease-in-out z-10 smooth
            ${isVisible ? "opacity-1000 transform translate-y-24 " : "opacity-0 bottom-full transform translate-y-0"}
            hover:bg-black hover:text-primary focus:outline-none`}
        >
        <FaChevronUp className="text-xs font-bold"/>
        </button>
  );
  
};

export default ScrollToTopButton;
