import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { TypeWriter } from "../../components/TypeWriter/TypeWriter";
import Button from "react-bootstrap/Button";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaWhatsapp, FaGithubSquare } from "react-icons/fa";
import ScrollReveal from "scrollreveal";
import ImageBlackPage from "../../assets/images/camilawhitepage.png";
import ImageWhitePage from "../../assets/images/camilablackpage.png";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Skills from "../../components/Skills/Skills";
import Carousel from "../../components/Carousel/Carousel";

import "./Home.css";

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const location = useLocation();

  useEffect(() => {
    setIsActive(true);

    const sr = ScrollReveal({
      distance: "80px",
      duration: 600,
      easing: "ease-out",
      reset: true,
      viewFactor: 0.3,
    });

    sr.reveal(".reveal", {
      origin: "left",
      opacity: 0,
      scale: 1,
      delay: 100,
    });

    return () => sr.destroy();
  }, [location.pathname]);

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

      <section
        aria-label="Informações Iniciais"
        className="text-and-image-container reveal"
      >
        <div className="content-container">
          <div className="icons-container">
            <ul>
              <li>
                <a
                  href="https://github.com/bycmlla"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                <a
                  href="https://wa.me/5533998759437"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li>
                <a
                  href="mailto:by.cmlla0107@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdEmail />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-container">
          <TypeWriter
            textColor={isDarkMode ? "white" : "black"}
            text="Olá, eu sou Camila Carvalho"
          />
          <p>
            Desenvolvedora Full-Stack e<br />
            Analista de Dados. <br /> <br />
            Aplicando meus conhecimentos e<br />
            sempre aprendendo mais. <br />
          </p>
        </div>
        <div
          aria-label="Imagem profissional"
          className={`image-container ${isActive ? "active" : ""}`}
        >
          <img
            src={isDarkMode ? ImageBlackPage : ImageWhitePage}
            alt=""
            onClick={handleClick}
            className="reveal"
          />
        </div>
      </section>
      <section aria-label="Sobre mim" className="about-me-home reveal">
        <h2>Sobre mim</h2>
        <p>
          Sou Analista de Dados e desenvolvedora full-stack, apaixonada por
          tecnologia e inovação. Tenho experiência em front-end, back-end e
          análise de dados, utilizando ferramentas como ReactJS, AngularJS,
          NodeJS, Java + Spring Boot, SQL Server, MySQL e Power BI. Já atuei no
          desenvolvimento mobile com React Native e em projetos de inteligência
          artificial. Apaixonada por livros, música e gatos, também gosto de
          desenhar no tempo livre.
        </p>
      </section>

      <section aria-label="Habilidades profissionais" className="text-projects">
        <div>
          <Skills />
        </div>
      </section>
      <section
        aria-label="Carrossel de apresentação de projetos"
        className="text-projects"
      >
        <Carousel />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
