import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import Dashboard from "../../assets/images/projects/carousel images/dashboard.png";
import Pay2Me from "../../assets/images/projects/carousel images/pay2me.png";
import Orion from "../../assets/images/projects/carousel images/orion.png";
import RoomRover from "../../assets/images/projects/carousel images/RoomRover.png";
import WeatherUp from "../../assets/images/projects/carousel images/weatherup.png";
import Agrovet from "../../assets/images/projects/carousel images/agrovet.png";
import { Link } from "react-router-dom";
import { GiButterfly } from "react-icons/gi";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Carousel.css";

const images = [
  { src: Dashboard, text: "Dashboards Power BI" },
  { src: Pay2Me, text: "Pay2Me" },
  { src: Orion, text: "Orion Outlet" },
  { src: RoomRover, text: "RoomRover" },
  { src: WeatherUp, text: "Weather Up" },
  { src: Agrovet, text: "Cardoso Agrovet" },
];
const infiniteImages = [...images, ...images, ...images];

const Carousel = () => {
  const carousel = useRef();
  const x = useMotionValue(0);
  const imageWidth = 450;
  const loopLimit = imageWidth * images.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let intervalId;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        animate(x, x.get() - imageWidth, {
          duration: 1,
          ease: "linear",
          onComplete: () => {
            if (x.get() <= -loopLimit) {
              x.set(0);
            }
          },
        });
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    };

    const stopAutoScroll = () => clearInterval(intervalId);

    startAutoScroll();

    return () => stopAutoScroll();
  }, [x, imageWidth, loopLimit]);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
    animate(x, -index * imageWidth, { duration: 0.5, ease: "easeOut" });
  };

  return (
    <div className="reveal">
      <SectionTitle
        data={{
          title: "Projetos",
          text: (
            <span>
              Para um conteúdo mais detalhado, clique aqui:{" "}
              <Link to="/projects">
                <GiButterfly className="butterfly-icon" />
              </Link>
            </span>
          ),
        }}
      />

      <div className="carousel-body">
        <motion.div
          ref={carousel}
          className="carousel"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -loopLimit, right: 0 }}
        >
          <motion.div className="inner" style={{ display: "flex" }}>
            {infiniteImages.map((img, index) => (
              <motion.div className="item" key={index}>
                <img src={img.src} alt={`carousel-img-${index}`} />
                <div className="overlay"></div>
                <div className="text-overlay">{img.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="indicators">
          {images.map((_, index) => (
            <div
              key={index}
              className={`indicator ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleIndicatorClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
