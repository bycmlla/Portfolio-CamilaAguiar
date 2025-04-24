import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";
import Dashboard1 from "../../assets/images/dashboards/dashboard 1.jpeg";
import Selenium from "../../assets/images/python/selenium.png";
import { useColor } from "../../contexts/ColorContext";
import { useTheme } from "../../contexts/ThemeContext";
import PowerBiIcon from "../../assets/icons/powerbi.svg";
import PythonIcon from "../../assets/icons/python.svg";
import SeleniumIcon from "../../assets/icons/selenium.svg";
import Footer from "../../components/Footer/Footer";
import BlackPBI from "../../assets/icons/blacpbi.svg";
import BlackPython from "../../assets/icons/icons8-python.svg";
import BlackSelenium from "../../assets/icons/icons8-selenium.svg";

const Projects = () => {
  const { selectedColor } = useColor();
  const colorClass = `color-${selectedColor.replace("#", "")}`;
  const { isDarkMode } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 480);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Dashboards Power BI",
      text: "Aqui apresento os meus dashboards em Power BI.",
      images: [Dashboard1],
      link: "/Dashboards",
      icons: [PowerBiIcon],
      iconsBlack: [BlackPBI],
    },
    {
      id: 2,
      title: "Automação Whatsapp",
      text: "Envio automático de mensagens com Python.",
      images: [Selenium],
      link: "/automation",
      icons: [SeleniumIcon, PythonIcon],
      iconsBlack: [BlackSelenium, BlackPython],
    },
  ];

  return (
    <div
      className={`projects-container ${
        isDarkMode ? "dark-mode-projects" : ""
      } ${colorClass}`}
    >
      <NavBar />
      <div className="text-projects">
        <h2>Projetos</h2>
        <p>Mais projetos em breve!</p>
      </div>

      <div className="projects-content">
        {projects.map(
          ({ id, title, text, images, link, icons, iconsBlack }) => (
            <div key={id} className="card-projects">
              <img src={images[0]} alt={title} />
              {!isMobile ? (
                <div className="card-overlay">
                  <h5>{title}</h5>
                  <p>{text}</p>
                  <div className="tech-icons">
                    {icons.map((icon, i) => (
                      <img
                        key={i}
                        src={icon}
                        alt="icon"
                        style={{ width: 24, height: 24, margin: "0 5px" }}
                        className="icons-projects"
                      />
                    ))}
                  </div>
                  <Link to={link} onClick={(e) => e.stopPropagation()}>
                    <Button className="button-see">Ver</Button>
                  </Link>
                </div>
              ) : (
                <div className="card-caption">
                  <h5>{title}</h5>
                  <div className="tech-icons">
                    {(isMobile ? iconsBlack : icons).map((icon, i) => (
                      <img
                        key={i}
                        src={icon}
                        alt="icon"
                        style={{
                          width: isMobile ? 20 : 24,
                          height: isMobile ? 20 : 24,
                          margin: isMobile ? "5px 6px" : "0 5px",
                        }}
                        className="icons-projects"
                      />
                    ))}
                  </div>

                  <Link to={link}>
                    <Button className="button-see">Ver</Button>
                  </Link>
                </div>
              )}
            </div>
          )
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
