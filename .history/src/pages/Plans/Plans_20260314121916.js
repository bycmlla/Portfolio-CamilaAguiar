import React from "react";
import "./Plans.css";
import MiniButterflyPurple from "../../assets/images/miniButterflyPurple.png";
import MiniButterflyBlue from "../../assets/images/miniButterflyBkue.png";
import MiniButterflyPink from "../../assets/images/miniButterflyPink.png";

const butterflyMap = {
  "#9747FF": MiniButterflyPurple,
  "#2291A4": MiniButterflyBlue,
  "#F10091": MiniButterflyPink,
};

const Plans = () => {
  const getBackgroundImage = () => {
    return butterflyMap[selectedColor] || MiniButterflyPurple;
  };
  
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default Plans;
