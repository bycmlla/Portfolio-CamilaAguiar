import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import Dashboard from "../../assets/images/dashboards/dashboard 1.jpeg";
import DioneMenezes from "../../assets/images/projects/dionemenezes1.png";
import PsyRPG from "../../assets/images/projects/psy1tela1.png";
import EmsConsultoria from "../../assets/images/projects/ems1.png";
import JtdTransportes from "../../assets/images/projects/jtdtransportes - Copia.png";
import ReactNativeIcon from "../../assets/icons/react-native.png";
import NodeJsIcon from "../../assets/icons/nodejs.png";
import GoogleIcon from "../../assets/icons/google.png";
import MySQLIcon from "../../assets/icons/mysql.png";
import PowerBiIcon from "../../assets/icons/powerbi.svg";
import HTMLIcon from "../../assets/icons/html.png";
import { Link } from "react-router-dom";
import { GiButterfly } from "react-icons/gi";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Carousel.css";

const images = [
  {
    src: DioneMenezes,
    title: "Dione Menezes - Website",
    text: "Site profissional desenvolvido para a especialista de vendas Dione Menezes, com foco em credibilidade, apresentação profissional e contato com clientes.",
    icons: [ReactNativeIcon, NodeJsIcon],
    link: "/projects",
  },
  {
    src: PsyRPG,
    title: "PsyRPG",
    text: "Aplicativo de Gamificação de Rotinas com Integração ao Google Calendar.",
    icons: [ReactNativeIcon, NodeJsIcon, GoogleIcon, MySQLIcon],
    link: "/projects",
  },
  {
    src: EmsConsultoria,
    title: "EMS Consultoria - Website",
    text: "Site profissional desenvolvido para uma nova transportadora em criação pelo consultor EMS, especializada em serviços de transporte.",
    icons: [ReactNativeIcon, NodeJsIcon],
    link: "/projects",
  },
  {
    src: JtdTransportes,
    title: "JTD Transportes - WebSite",
    text: "Website corporativo desenvolvido para a JTD Transportes, com foco em apresentação institucional, serviços e contato com clientes.",
    icons: [ReactNativeIcon, NodeJsIcon],
    link: "/projects",
  },
  {
    src: Dashboard,
    title: "Dashboards Power BI",
    text: "Aqui apresento os meus dashboards em Power BI.",
    icons: [PowerBiIcon, HTMLIcon],
    link: "/dashboards",
  },
];

const infiniteImages = [...images, ...images, ...images];

const Carousel = () => {
  const carousel = useRef();
  const itemRef = useRef();
  const x = useMotionValue(0);
  const [imageWidth, setImageWidth] = useState(450);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const [mobileItemWidth, setMobileItemWidth] = useState(0);

  const loopLimit = imageWidth * images.length;

  useEffect(() => {
    const updateWidth = () => {
      if (itemRef.current) {
        const width = itemRef.current.getBoundingClientRect().width;
        setImageWidth(width);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile && itemRef.current) {
      setMobileItemWidth(itemRef.current.getBoundingClientRect().width);
    }
  }, [isMobile]);

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

    if (!isMobile) {
      startAutoScroll();
      return () => stopAutoScroll();
    }
  }, [x, imageWidth, loopLimit, isMobile]);

  useEffect(() => {
    if (isMobile && carousel.current && mobileItemWidth > 0) {
      const carouselEl = carousel.current;

      const handleScroll = () => {
        const scrollPosition = carouselEl.scrollLeft;
        const newIndex =
          Math.round(scrollPosition / mobileItemWidth) % images.length;
        if (newIndex !== currentIndex) {
          setCurrentIndex(newIndex);
        }
      };

      carouselEl.addEventListener("scroll", handleScroll);
      return () => carouselEl.removeEventListener("scroll", handleScroll);
    }
  }, [isMobile, mobileItemWidth, currentIndex]);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
    if (!isMobile) {
      animate(x, -index * imageWidth, { duration: 0.5, ease: "easeOut" });
    } else if (carousel.current && mobileItemWidth > 0) {
      carousel.current.scrollTo({
        left: index * mobileItemWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`reveal ${isMobile ? "carousel-mobile" : ""}`}>
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
          style={!isMobile ? { x } : {}}
          drag={!isMobile ? "x" : false}
          dragConstraints={
            !isMobile ? { left: -loopLimit, right: 0 } : undefined
          }
        >
          <motion.div className="inner" style={{ display: "flex" }}>
            {infiniteImages.map((img, index) => (
              <motion.div
                className="item"
                key={index}
                ref={index === 0 ? itemRef : null}
              >
                <Link to={img.link} className="carousel-card-link">
                  <img src={img.src} alt={`carousel-img-${index}`} />
                  <div className="overlay-carousel">
                    <h3>{img.title}</h3>
                    <p>{img.text}</p>
                    <div className="carousel-tech-icons">
                      {img.icons.map((icon, iconIndex) => (
                        <img
                          key={iconIndex}
                          src={icon}
                          alt=""
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                </Link>
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
