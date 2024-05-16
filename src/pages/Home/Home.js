import React from "react";
import { useState, useEffect } from "react";
import { TypeWriter } from "../../components/TypeWriter/TypeWriter";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaWhatsapp, FaGithubSquare } from "react-icons/fa";
import ImageWhitePage from "../../assets/images/camilawhitepage.png";
import ImageBlackPage from "../../assets/images/camilablackpage.png";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Skills from "../../components/Skills/Skills";
import { useLocation } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import "./Home.css";

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const location = useLocation();

  useEffect(() => {
    setIsActive(true);

    ScrollReveal().reveal(".reveal", {
      origin: "left",
      distance: "20px",
      duration: 1300,
      delay: 200,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      reset: true,
    });
  }, [location.pathname]);

  ScrollReveal().reveal(".reveal-right", {
    origin: "right",
    distance: "20px",
    duration: 2000,
    delay: 200,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    reset: true,
  });

  const toggleDarkModeHome = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    localStorage.setItem("darkMode", newDarkModeState.toString());
  };
  const handleClick = () => {
    window.open("https://github.com/bycmlla", "_blank");
  };

  return (
    <div className={`home-container ${isDarkMode ? "dark-mode-home" : ""}`}>
      <NavBar
        className="reveal"
        toggleDarkMode={toggleDarkModeHome}
        isDarkMode={isDarkMode}
      />

      <section className="text-and-image-container">
        <div className="text-container reveal">
          <TypeWriter
            textColor={isDarkMode ? "white" : "black"}
            text="Hello, i'm Camila"
          />
          <p>
            Full-stack Developer and <br />
            Computer Vision. <br /> <br />
            Full-stack developer, applying knowledge in <br /> React JS, Node
            JS, TypeScript, and Computer <br /> Vision in Python. Contributing
            to assistive <br /> technology.
          </p>
        </div>
      </section>

      <section className="content-container">
        <ImageSlider />
        <div className="icons-container">
          <ul>
            <li>
              <a href="https://github.com/bycmlla">
                <FaGithubSquare />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/camila-de-aguiar-ti1808/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://wa.me/5533998759437">
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a href="mailto:by.cmlla0107@gmail.com">
                <MdEmail />
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className={`image-container ${isActive ? "active" : ""}`}>
        <img
          src={isDarkMode ? ImageBlackPage : ImageWhitePage}
          alt=""
          className="reveal-right"
          onClick={handleClick}
        />
        <div>
          <Skills />
        </div>
      </section>

      <section className="text-projects">
        <h2>My Projects</h2>
        <h4>Power BI Dashboards</h4>
        <iframe
          title="aula-curso"
          width="570"
          height="373.5"
          src="https://app.powerbi.com/view?r=eyJrIjoiNDg4NWU3ZjgtYjdiOS00MThiLTlkMTktZjllNWU2NGZhYzQwIiwidCI6IjJhYTE4ODc1LTgwMjktNDkzZi1iMWEzLTE1M2FlNzllMjc4MCJ9"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
