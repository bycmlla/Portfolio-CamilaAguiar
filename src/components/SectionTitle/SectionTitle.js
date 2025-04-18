import React, { useState } from "react";
import "./SectionTitle.css";

const SectionTitle = ({ data }) => {
  const [isDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  return (
    <div
      className={`section-title-container ${
        isDarkMode ? "dark-mode-section-title" : ""
      }`}
    >
      <h2 className="reveal">{data.title}</h2>
      <div className="section-title-content">
        <span className="resume-section-title">{data.text}</span>
        <span className="line-section"></span>
      </div>
    </div>
  );
};

export default SectionTitle;
