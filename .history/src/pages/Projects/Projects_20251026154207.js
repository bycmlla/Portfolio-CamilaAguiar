import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
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
import PsyVideo from "../../assets/videos/psyrpgvideo.mov";
import PsyRpg1 from "../../assets/images/projects/psy1.png"
import PsyRpg2 from "../../assets/images/projects/psy2.png"
import PsyRpg3 from "../../assets/images/projects/psy3.png"

const Projects = () => {
  const { selectedColor } = useColor();
  const colorClass = `color-${selectedColor.replace("#", "")}`;
  const { isDarkMode } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 480);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const projects = [
    {
      id: 1,
      title: "PsyRPG",
      text: "Aplicativo de Gamificação de Rotinas com Integração ao Google Calendar.",
      images: [Dashboard1],
      otherimages: [
        { type: "video", src: PsyVideo },
        { type: "image", src: PsyRpg1 },
        { type: "image", src: PsyRpg2 },
        { type: "image", src: PsyRpg3 },
      ],
      repoLink: "https://github.com/seuusuario/repositorio-powerbi",
      icons: [PowerBiIcon],
      iconsBlack: [BlackPBI],
      l1: "DAX",
      l2: "HTML",
      l3: "CSS",
      description:
        "O Power BI é uma ferramenta de análise de dados e visualização da Microsoft que oferece uma interface intuitiva para transformar dados em informações acionáveis.",
      buttonText: "Ver dashboards",
    },
    {
      id: 2,
      title: "Dashboards Power BI",
      text: "Aqui apresento os meus dashboards em Power BI.",
      images: [Dashboard1],
      otherimages: [{ type: "image", src: Dashboard1 }],
      link: "#/dashboards",
      repoLink: "https://github.com/seuusuario/repositorio-powerbi",
      icons: [PowerBiIcon],
      iconsBlack: [BlackPBI],
      l1: "DAX",
      l2: "HTML",
      l3: "CSS",
      description:
        "O Power BI é uma ferramenta de análise de dados e visualização da Microsoft que oferece uma interface intuitiva para transformar dados em informações acionáveis.",
      buttonText: "Ver dashboards",
    },
    {
      id: 3,
      title: "Automação Whatsapp",
      text: "Envio automático de mensagens com Python.",
      images: [Selenium],
      otherimages: [{ type: "image", src: Selenium }],
      link: "#/automation",
      repoLink: "https://github.com/seuusuario/repositorio-powerbi",
      icons: [SeleniumIcon, PythonIcon],
      iconsBlack: [BlackSelenium, BlackPython],
      l1: "Python",
      description:
        "Realiza o envio de imagens a partir de um determinado diretório. Também é possível realizar o envio de mensagens de texto mudando alguns parâmetros.",
      buttonText: "Ver detalhamento",
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
        {projects.map(({ id, title, text, images, icons, iconsBlack }) => (
          <div
            key={id}
            className="card-projects"
            onClick={() =>
              setSelectedProject(projects.find((p) => p.id === id))
            }
          >
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
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
        className="overlay-backdrop"
        onClick={() => setSelectedProject(null)}
        >
        <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
        <button
        className="close-btn"
        onClick={() => setSelectedProject(null)}
        >
        ×
        </button>
        
        <div className="overlay-body">
        <div className="overlay-left">
        {selectedProject.otherimages?.length > 0 &&
          selectedProject.otherimages[0].type === "video" ? (
            <video
            src={selectedProject.otherimages[0].src}
            controls
            muted
            loop
            className="overlay-video"
            />
          ) : (
            selectedProject.otherimages?.length > 0 && (
              <img
              src={selectedProject.otherimages[0].src}
              alt={selectedProject.title}
              className="overlay-image"
              />
            )
          )}
          
          <div className="overlay-gallery">
          {selectedProject.otherimages?.slice(1).map((item, index) => (
            <img
            key={index}
            src={item.src}
            alt={`gallery-${index}`}
            className="gallery-img"
            />
          ))}
          </div>
          
          </div>
          
          {/* DIREITA - título e descrição */}
          <div className="overlay-right">
          <div className="overlay-header">
          <h3>{selectedProject.title}</h3>
          <div className="language-buttons">
          {selectedProject.l1 && <span>{selectedProject.l1}</span>}
          {selectedProject.l2 && <span>{selectedProject.l2}</span>}
          {selectedProject.l3 && <span>{selectedProject.l3}</span>}
          </div>
          <div className="overlay-buttons">
            {selectedProject.repoLink && (
              <button
                className="repo-btn"
                onClick={() =>
                  window.open(selectedProject.repoLink, "_blank")
                }
              >
                Repositório
              </button>
            )}
          </div>
          </div>
          
          <p className="overlay-description">
          {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Projects;
