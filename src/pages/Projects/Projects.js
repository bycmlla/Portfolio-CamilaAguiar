import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";
import Dashboard1 from "../../assets/images/dashboards/dashboard 1.jpeg";
import Disparity from "../../assets/images/python/depthmaps.png";
import Selenium from "../../assets/images/python/selenium.png";
import PBI from "../../assets/images/python/pbi.png";
import PowerBi from "../../assets/images/python/power-BI.png";
import { useColor } from "../../contexts/ColorContext";
import { useTheme } from "../../contexts/ThemeContext";
import PowerBiIcon from "../../assets/icons/powerbi.svg";
import OpenCVIcon from "../../assets/icons/opencv.svg";
import NvidiaIcon from "../../assets/icons/nvidia.svg";
import PythonIcon from "../../assets/icons/python.svg";
import SeleniumIcon from "../../assets/icons/selenium.svg";
import AzureIcon from "../../assets/icons/azure.svg";

const Projects = () => {
  const { selectedColor } = useColor();
  const colorClass = `color-${selectedColor.replace("#", "")}`;
  const { isDarkMode } = useTheme();

  const projects = [
    {
      id: 1,
      title: "Dashboards Power BI",
      text: "Aqui eu apresento os meus dashboards em Power BI. Todos projetos feitos e publicados por mim.",
      images: [Dashboard1],
      link: "/Dashboards",
      technologies: [
        <img
          src={PowerBiIcon}
          alt="Power BI"
          style={{ width: 24, height: 24, marginBottom: 10 }}
        />,
      ],
    },
    {
      id: 5,
      title: "Interface de Visão Estereoscópica Binocular",
      text: "Reconhecimento e a localização de pessoas e objetos em um cenário para robótica móvel",
      images: [Disparity],
      link: "/rosa",
      technologies: [
        <img
          src={PythonIcon}
          alt="Python"
          style={{ width: 24, height: 24, marginBottom: 10, marginRight: 10 }}
        />,
        <img
          src={OpenCVIcon}
          alt="Open CV"
          style={{ width: 24, height: 24, marginBottom: 10, marginRight: 10 }}
        />,
        <img
          src={NvidiaIcon}
          alt="Nvidia"
          style={{ width: 24, height: 24, marginBottom: 10 }}
        />,
      ],
    },
    {
      id: 10,
      title: "Automação de Mensagens Whatsapp",
      images: [Selenium],
      text: "Como enviar mensagens de maneira automática utilizando o Python.",
      link: "/automation",
      technologies: [
        <img
          src={SeleniumIcon}
          alt="Selenium"
          style={{ width: 24, height: 24, marginBottom: 10, marginRight: 10 }}
        />,
        <img
          src={PythonIcon}
          alt="Python"
          style={{ width: 24, height: 24, marginBottom: 10 }}
        />,
      ],
    },
    {
      id: 11,
      title: "Conexão da API do Power BI",
      images: [PBI],
      text: "Conectando-se a API do Power BI com Python.",
      link: "/refresh",
      technologies: [
        <img
          src={PowerBiIcon}
          alt="Power BI"
          style={{ width: 24, height: 24, marginBottom: 10, marginRight: 10 }}
        />,
        <img
          src={PythonIcon}
          alt="Python"
          style={{ width: 24, height: 24, marginBottom: 10, marginRight: 10 }}
        />,
        <img
          src={AzureIcon}
          alt="Azure"
          style={{ width: 24, height: 24, marginBottom: 10 }}
        />,
      ],
    },
    {
      id: 12,
      title: "Atualização de Datasets Via API Power BI",
      images: [PowerBi],
      text: "Atualizando datasets automaticamente do Power BI via API com Python.",
      link: "/refresh2",
      technologies: [
        <img
          src={PowerBiIcon}
          alt="Power BI"
          style={{ width: 24, height: 24, marginBottom: 10, marginRight: 10 }}
        />,
        <img
          src={PythonIcon}
          alt="Python"
          style={{ width: 24, height: 24, marginBottom: 10, marginRight: 10 }}
        />,
        <img
          src={AzureIcon}
          alt="Azure"
          style={{ width: 24, height: 24, marginBottom: 10 }}
        />,
      ],
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
        <p>Aqui apresento os meus projetos. Tudo aqui foi feito por mim.</p>
      </div>

      <div className="projects-content">
        {projects.map((project) => (
          <div key={project.id} className="card-projects">
            <img src={project.images[0]} alt={project.title} />
            <div className="card-overlay">
              <h5>{project.title}</h5>
              <p>{project.text}</p>
              <div className="tech-icons">
                {project.technologies?.map((tech, index) => (
                  <span key={index} className="icon-tech">
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <Link to={project.link}>
                  <Button className="button-see" variant="primary">
                    Ver
                  </Button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
