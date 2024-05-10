import React from "react";
import "./ImageSlider.css";
import { useEffect, useState } from "react";
import codeimage from "../../assets/images/codeimage.jpeg";
import codeimage3 from "../../assets/images/codeimage3.JPEG";
import codeimage4 from "../../assets/images/codeimage4.jpeg";
import codeimage5 from "../../assets/images/codeimage5.jpeg";

export const ImageSlider = () => {
  const [images] = useState([
    codeimage,
    codeimage3,
    codeimage4,
    codeimage5,
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, images.length]);

  return (
    <div className="image">
    
      <img src={images[currentIndex]} alt="" />
    </div>
  );
};

export default ImageSlider;
