import React, { useState, useRef } from "react";
import NavBar from "../../../../components/NavBar/NavBar";
import OpenCvImage from "../../../../assets/images/python/disparity.jpeg";
import "./ROSA.CSS";

const ROSA = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    localStorage.setItem("darkMode", newDarkModeState.toString());
  };
  const codeRef = useRef(null);

  const [showNotification, setShowNotification] = useState(false);

  const copyToClipboard = () => {
    const code = codeRef.current.innerText;
    navigator.clipboard.writeText(code).then(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    });
  };

  return (
    <div className={`rosapage-container ${isDarkMode ? "dark-mode-rosa" : ""}`}>
      <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <img
        className="image-opencv"
        src={OpenCvImage}
        alt="Uma mulher com pontos no rosto ao lado de duas logos"
        width="100%"
      />
    </div>
  );
};

export default ROSA;
