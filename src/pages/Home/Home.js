import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { TypeWriter } from "../../components/TypeWriter/TypeWriter";
import Button from "react-bootstrap/Button";
import { MdEmail } from "react-icons/md";
import {
  FaLinkedin,
  FaWhatsapp,
  FaGithubSquare,
  FaGithubAlt,
} from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { BiLogoGmail } from "react-icons/bi";
import ScrollReveal from "scrollreveal";
import ImageBlackPage from "../../assets/images/camilawhitepage.png";
import ImageWhitePage from "../../assets/images/camilablackpage.png";
import BlueLightTheme from "../../assets/images/BlueLightTheme.png";
import BlueDarkTheme from "../../assets/images/BlueBlackTheme.png";
import PinkLightTheme from "../../assets/images/PinkLightTheme.png";
import PinkDarkTheme from "../../assets/images/PinkBlackTheme.png";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Skills from "../../components/Skills/Skills";
import Carousel from "../../components/Carousel/Carousel";
import "./Home.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import butterfly from "../../assets/images/butterfly.png";

const imageMap = {
  "#9747FF": {
    light: ImageWhitePage,
    dark: ImageBlackPage,
  },
  "#2291A4": {
    light: BlueLightTheme,
    dark: BlueDarkTheme,
  },
  "#F10091": {
    light: PinkLightTheme,
    dark: PinkDarkTheme,
  },
};

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [expand, setExpand] = useState(false);
  const [selectedColor, setSelectedColor] = useState(
    localStorage.getItem("selectedColor") || "9747FF"
  );
  const getImageSource = () => {
    const colorImages = imageMap[selectedColor];
    if (colorImages) {
      return isDarkMode ? colorImages.dark : colorImages.light;
    }
    return isDarkMode ? ImageBlackPage : ImageWhitePage;
  };
  const location = useLocation();

  useEffect(() => {
    setIsActive(true);
    setExpand(true);

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
    <div
      className={`home-container ${
        isDarkMode ? "dark-mode-home" : ""
      } ${selectedColor}`}
    >
      <NavBar
        className="reveal"
        toggleDarkMode={toggleDarkModeHome}
        isDarkMode={isDarkMode}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
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
                  <button type="button">
                    <FaGithubSquare />
                  </button>
                </a>
              </li>
              <li>
                <a
                  href="www.linkedin.com/in/camilaaguiarr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button">
                    <FaLinkedin />
                  </button>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5533998759437"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button">
                    <FaWhatsapp />
                  </button>
                </a>
              </li>
              <li>
                <a
                  href="mailto:by.cmlla0107@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button">
                    <MdEmail />
                  </button>
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
            src={getImageSource()}
            alt=""
            onClick={handleClick}
            className="reveal"
          />
        </div>
      </section>

      <section aria-label="Sobre mim" className="about-me-home reveal">
        <h2>Sobre mim</h2>
        <span className={`line-bout ${expand ? "expand" : ""}`}></span>
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
      <img src={butterfly} alt="Butterfly" className="background-image" />

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

      <section className="contact-container-home">
        <SectionTitle
          data={{
            title: "Contatos",
            text: "Fale comigo usando os contatos abaixo ou mande um e-mail.",
          }}
        />
        <div className="inner-contact">
          <ul>
            <li>
              <a
                href="https://github.com/bycmlla"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => console.log("Link do GitHub clicado!")}
              >
                <button type="button">
                  <FaGithubAlt />
                </button>
              </a>
              <h5>Github</h5>
              <p>@bycmlla</p>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/camilaaguiarr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button">
                  <FiLinkedin />
                </button>
              </a>
              <h5>LinkedIn</h5>
              <p>@camilacarvalho</p>
            </li>
            <li>
              <a
                href="https://wa.me/5533998759437"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button">
                  <PiWhatsappLogoFill />
                </button>
              </a>
              <h5>Whatsapp</h5>
              <p>(33) 9 9875-9437</p>
            </li>
            <li>
              <a
                href="mailto:by.cmlla0107@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button">
                  <BiLogoGmail />
                </button>
              </a>
              <h5>E-mail</h5>
              <p>camilacarvalhoagui@gmail.com</p>
            </li>
          </ul>
        </div>

        <div className="talk-to-me">
          <h2>Ou me envie um e-mail por aqui mesmo!</h2>
          <Link to="/contact">
            <Button type="button">Enviar e-mail</Button>
          </Link>
          <Link to="/contact">
            <Button type="button">Ir para Contato</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
