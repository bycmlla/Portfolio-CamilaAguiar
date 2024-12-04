import React, { useState, useEffect } from "react";
import "./Angular.css";

import { Link } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

import NavBar from "../../../../components/NavBar/NavBar";
import Footer from "../../../../components/Footer/Footer";

const Angular = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  useEffect(() => {
    setIsDarkMode(localStorage.getItem("darkMode") === "true");
  }, []);

  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    localStorage.setItem("darkMode", newDarkModeState.toString());
  };

  return (
    <div className={`automation-container ${isDarkMode ? "dark-mode-angular" : ""}`}>
      <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div>
        <Link to={"/projects"} className="back-icon" style={{color: 'white'}}>
          <FaArrowLeft />
        </Link>
      </div>
    </div>
  );
};

export default Angular;
