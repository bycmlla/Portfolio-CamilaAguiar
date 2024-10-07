import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaWhatsapp, FaGithubSquare } from "react-icons/fa";
import Curriculum from "../../assets/images/curriculumpng.jpg";
import Curriculum2 from "../../assets/images/curriculumpng2.jpg";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./AboutMe.css";
import ScrollReveal from "scrollreveal";
import Skills from "../../components/Skills/Skills";

const AboutMe = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    setIsDarkMode(localStorage.getItem("darkMode") === "true");
  }, []);

  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    localStorage.setItem("darkMode", newDarkModeState.toString());

    window.location.reload();
  };

  ScrollReveal().reveal(".reveal-right", {
    origin: "right",
    distance: "20px",
    duration: 2000,
    delay: 200,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    reset: true,
  });

  return (
    <div
      className={`about-me-container ${isDarkMode ? "dark-mode-about" : ""}`}
    >
      <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div className="about-me-section">
        <div className="icons-container-custom">
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
        <div className="about-me-content">
          <h1>About me.</h1>
          <p>
            De Minas Gerais pro mundo, ingressei em Análise e Desenvolvimento de
            Sistemas aos 18 anos no Instituto Federal Baiano, onde comecei toda
            a minha tragetória na aréa da Técnologia da Informação. <br />
            Sou Analista de Dados, desenvolvedora full-stack e finalizando no
            curso de Análise e Desenvolvimento de Sistemas. <br />
            Especializo-me em tecnologias tanto de front-end quanto de back-end,
            com ampla experiência em diversos frameworks. Atualmente estou
            atuando na área de análise de dados e desenvolvimento, com uso de
            ferramentas e linguagens essenciais, como Power BI para criação de
            dashboards e insights significativos, ReactJs e AngularJs no
            desenvolvimento de interfaces de sistemas web amigáveis, NodeJS e
            Java + Spring Boot na construção de aplicações robustas e
            escaláveis, SQL Server e MySQL na gestão e manipulação de dados,
            gerenciamento de bancos de dados em nuvem, permitindo a criação de
            consultas complexas e relatórios precisos.
            <br />
            Já atuei no desenvolvimento de aplicativos móveis utilizando React
            Native. Por 1 ano, estive imersa no mundo da IA, utilizando de
            recursos como Hello AI World da NVidia e a linguagem Python para
            classificação e reconhecimento de objetos para Técnologia Assistiva.{" "}
            <br />
            Valorizo a colaboração em equipe e a comunicação clara, aspectos que
            considero fundamentais para o sucesso de qualquer projeto. <br />
            Amante de livros, música e gatos. Desenhista nos tempos livres. <br />
            Confira minhas stacks abaixo, assim como meu cúrriculo. <br/><br/>
            Cami.
          </p>
        </div>
      </div>
      <div className="skills-about">
        <Skills />
      </div>
      <div className="curriculum-container">
        <img src={Curriculum} alt="" />
        <img src={Curriculum2} alt="" />
        <div className="button-home">
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
