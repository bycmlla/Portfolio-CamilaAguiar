import React, { useEffect, useState } from "react";
import {useLocation } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import "./Skills.css";
import { RiReactjsFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io5";
import {
  FaAngular,
  FaHtml5,
  FaSass,
  FaFigma,
  FaBootstrap,
  FaNode,
  FaJava,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { SiOpencv, SiPostgresql, SiPowerbi, SiMysql } from "react-icons/si";

const Skills = () => {
  
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const location = useLocation();

useEffect(() => {
  const currentDarkMode = localStorage.getItem("darkMode") === "true";
  setIsDarkMode(currentDarkMode);
}, [isDarkMode])


useEffect(() => {
  const sr = ScrollReveal({
    distance: "80px",
    duration: 600,
    easing: "ease-out",
    reset: true,
    viewFactor: 0.3,
  });


  sr.reveal(".reveal", { 
    origin: "left", 
    opacity: 0,  // Garante que fique visível depois do efeito
    scale: 1,    // Remove qualquer redução no tamanho
    delay: 100 
  });

  return () => sr.destroy();
}, [location.pathname]);

  return (
    <div
      className={`div-container-skills ${isDarkMode ? "dark-mode-skills" : ""}`}
    >
      <div>
        <div className="skills-principal-container">
          <div className="reveal">
            <h2 className="reveal">Habilidades</h2>
            <p className="skills-heading">
            Front End, Back End e Análise de Dados <span className="line"></span>
            </p>
            <div className="front-line-one reveal">
              <ul className="ul-front-one">
                <li>
                  <span>React JS</span>
                  <RiReactjsFill className="icon-size" />
                </li>
                <li>
                  <span style={{fontSize: 15}}>JavaScript</span>
                  <IoLogoJavascript className="icon-size" style={{width: 36}} />
                </li>
                <li>
                  <span>Angular</span>
                  <FaAngular className="icon-size" />
                </li>
                <li>
                  <span>TypeScript</span>
                  <TbBrandTypescript className="icon-size" />
                </li>
                <li>
                  <span>Bootstrap</span>
                  <FaBootstrap className="icon-size" />
                </li>
                <li>
                  <span>HTML5</span>
                  <FaHtml5 className="icon-size" />
                </li>
                <li>
                  <span>CSS3</span>
                  <IoLogoCss3 className="icon-size" />
                </li>
                <li>
                  <span>SASS</span>
                  <FaSass className="icon-size" />
                </li>
                <li>
                  <span>Figma</span>
                  <FaFigma className="icon-size" />
                </li>
              <li>
                <span>Node JS</span>
                <FaNode className="icon-size" />
              </li>
              <li>
                <span>Java</span>
                <FaJava className="icon-size" />
              </li>
              <li>
                <span>Python</span>
                <FaPython className="icon-size" />
              </li>
              <li>
                <span>OpenCV</span>
                <SiOpencv className="icon-size" />
              </li>
              <li>
                <span>PostGreSQL</span>
                <SiPostgresql className="icon-size-data" />
              </li>
              <li>
                <span>Data Analytics</span>
                <FaDatabase className="icon-size-data"/>
              </li>
              <li>
                <span>Power BI</span>
                <SiPowerbi className="icon-size-data" />
              </li>
              <li>
                <span>MySQL</span>
                <SiMysql className="icon-size" />
              </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
