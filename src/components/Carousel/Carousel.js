import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css";
import { motion } from "framer-motion";
import Dashboard from "../../assets/images/projects/carousel images/dashboard.png";
import Pay2Me from "../../assets/images/projects/carousel images/pay2me.png";
import Orion from "../../assets/images/projects/carousel images/orion.png";
import RoomRover from "../../assets/images/projects/carousel images/RoomRover.png";
import WeatherUp from "../../assets/images/projects/carousel images/weatherup.png";
import Agrovet from "../../assets/images/projects/carousel images/agrovet.png";

const images = [
  { src: Dashboard, text: "Dashboards Power BI" },
  { src: Pay2Me, text: "Pay2Me" },
  { src: Orion, text: "Orion Outlet" },
  { src: RoomRover, text: "RoomRover" },
  { src: WeatherUp, text: "Weather Up" },
  { src: Agrovet, text: "Cardoso Agrovet" },
];
const infiniteImages = [...images, ...images, ...images, ...images, ...images];

const Carousel = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  const [position, setPosition] = useState(0);
  const numImagesPerSlide = 3;
  const totalImages = infiniteImages.length;

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPosition = prev - width / (totalImages / numImagesPerSlide);
        return newPosition <= -width ? 0 : newPosition;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [width]);

  return (
    <div className="carousel-body">
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 0 }}
          animate={{ x: position }}
        >
          {infiniteImages.map((img, index) => (
            <motion.div className="item" key={index}>
              <img src={img.src} alt={`carousel-img-${index}`} />
              <div className="overlay"></div>
              <div className="text-overlay">{img.text}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Carousel;
