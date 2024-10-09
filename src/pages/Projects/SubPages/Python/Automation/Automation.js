import React, { useState, useEffect } from "react";
import "./Automation.css";
import Python from "../../../../../assets/images/python/python.png"
import NavBar from "../../../../../components/NavBar/NavBar";

const Automation = () => {
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
    <div
      className={`automation-container ${isDarkMode ? "dark-mode-sql" : ""}`}
    >
      <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <img src={Python} alt="Logo da linguagem Python" width="100%"/>
      <div>
        oi
      </div>
    </div>
  );
};

export default Automation;
