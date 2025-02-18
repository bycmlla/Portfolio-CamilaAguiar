import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css";
import { motion } from "framer-motion";
import Dashboard from "../../assets/images/projects/carousel images/dashboard.png";
import Pay2Me from "../../assets/images/projects/carousel images/pay2me.png";
import Orion from "../../assets/images/projects/carousel images/orion.png";
import RoomRover from "../../assets/images/projects/carousel images/RoomRover.png";
import WeatherUp from "../../assets/images/projects/carousel images/weatherup.png";
import Agrovet from "../../assets/images/projects/carousel images/agrovet.png";

const images = [Dashboard, Pay2Me, Orion, RoomRover, WeatherUp, Agrovet];

const infiniteImages = [...images, ...images, ...images, ...images, ...images];

const Carousel = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <div className="carousel-body">
      <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {infiniteImages.map((img, index) => (
            <motion.div className="item" key={index}>
              <img src={img} alt={`carousel-img-${index}`} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Carousel;
