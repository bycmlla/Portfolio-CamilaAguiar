import React from "react";
import "./Plans.css";
import MiniButterflyPurple from "../../assets/images/miniButterflyPurple.png";
import MiniButterflyBlue from "../../assets/images/miniButterflyBkue.png";
import MiniButterflyPink from "../../assets/images/miniButterflyPink.png";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { useColor } from "../../contexts/ColorContext";
import { useTheme } from "../../contexts/ThemeContext";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaWhatsapp, FaGithubSquare } from "react-icons/fa";

const butterflyMap = {
  "#9747FF": MiniButterflyPurple,
  "#2291A4": MiniButterflyBlue,
  "#F10091": MiniButterflyPink,
};

const Plans = () => {

    const { selectedColor } = useColor();
    const { isDarkMode } = useTheme();

  const getBackgroundImage = () => {
    return butterflyMap[selectedColor] || MiniButterflyPurple;
  };

  return (
    <div className={`plans-container ${
        isDarkMode ? "dark-mode-about" : ""
      } color-${selectedColor.replace("#", "")}`}>
       <NavBar isDarkMode={isDarkMode} />
      
       </div>
  );
};

export default Plans;
