import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";
import Dashboard1 from "../../assets/images/dashboards/dashboard 1.jpeg";
import Dashboard3 from "../../assets/images/dashboards/dashboard 3.png";
import Disparity from "../../assets/images/python/depthmaps.png";
import Selenium from "../../assets/images/python/selenium.png";
import PBI from "../../assets/images/python/pbi.png";
import PowerBi from "../../assets/images/python/power-BI.png";
import { useColor } from "../../contexts/ColorContext";
import { useTheme } from "../../contexts/ThemeContext";

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { selectedColor, setSelectedColor } = useColor();
  const colorClass = `color-${selectedColor.replace("#", "")}`;
  const { isDarkMode } = useTheme();

  const projects = [
    {
      id: 1,
      title: "Dashboards Power BI",
      text: "Aqui eu apresento os meus dashboards em Power BI. Todos projetos feitos e publicados por mim.",
      images: [Dashboard1],
      link: "/Dashboards",
    },
    {
      id: 3,
      title: "Projetos Python",
      text: "Apresentação de projetos e tutoriais utilizando Python. Automações, integração com outras ferramentas, utilização para IA e etc.",
      images: [
        "https://w0.peakpx.com/wallpaper/266/297/HD-wallpaper-python-logo-python-code-computer-programming-logo.jpg",
      ],
      link: "/angular",
    },
    {
      id: 4,
      title: "Projetos Angular",
      text: "Projetos que implementei com Angular e tutoriais sobre o framework que tem como base a linguagem TypeScript.",
      images: [
        "https://storage.googleapis.com/medium-feed.appspot.com/images%2F9353691196%2F0d870cf02afb1-Angular-para-negocios.png",
      ],
      link: "/angular",
    },
    {
      id: 8,
      title: "Projetos Java",
      text: "Explore os projetos desenvolvidos por mim em Java, incluindo integrações com web services SOAP, criação e implementação de classes, e outras soluções robustas.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_CNWjYF4Oz87WfKqNTsvorNxQc4tdLSfvYQ&s",
      ],
      link: "/angular",
    },
    {
      id: 9,
      title: "Aplicações Mobile com React Native",
      text: "Aqui mostro criações em desenvolvimento mobile utilizando React Native.",
      images: [
        "https://techmoran.com/wp-content/uploads/2023/06/all-about-react-native-apps-776x415-1.png",
      ],
      link: "/angular",
    },
    {
      id: 6,
      title: "Backend com NodeJS",
      text: "Explore minhas soluções de backend desenvolvidas com Node.js. Encontre detalhes sobre os projetos que criei, destacando a arquitetura e as funcionalidades de cada um.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtChA5REy88fmUBnnvxFo8iROkTrEzYfsXeQ&s",
      ],
      link: "/angular",
    },
    {
      id: 5,
      title: "Visão Computacional",
      text: "Reconhecimento e a localização de pessoas e objetos em um cenário para robótica móvel",
      images: [Disparity],
      link: "/rosa",
    },
    {
      id: 10,
      title: "Automação de Mensagens Whatsapp",
      images: [Selenium],
      text: "Como enviar mensagens de maneira automática utilizando o Python.",
      link: "/automation",
    },
    {
      id: 11,
      title: "Conexão da API do Power BI",
      images: [PBI],
      text: "Conectando-se a API do Power BI com Python.",
      link: "/refresh",
    },
    {
      id: 12,
      title: "Atualização de Datasets Via API Power BI",
      images: [PowerBi],
      text: "Atualizando datasets automaticamente do Power BI via API com Python.",
      link: "/refresh2",
    },
  ];

  const tutorials = [
    {
      id: 2,
      title: "Transmitindo Conhecimentos - Power BI",
      text: "Aprenda alguns assuntos sobre a ferramenta Power BI.",
      images: [Dashboard3],
      link: "/angular",
    },
    {
      id: 7,
      title: "Banco de Dados com MySQL e SQL",
      text: "Nesta seção, você encontrará tutoriais e guias práticos sobre o uso de bancos de dados, abrangendo tanto MySQL quanto SQL.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-5LhP_Q8i_JBK8mMzn-ApcwLPH5UhTF76A&s",
      ],
      link: "/sqlpage",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      // lógica de redimensionamento
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

      <div className="text-projects">
        <h2>Aprenda Comigo</h2>
        <p>Compartilhando conhecimento através de tutoriais e guias.</p>
      </div>
      <div className="projects-content">
        {tutorials.map((tutorial) => (
          <div key={tutorial.id} className="card-projects">
            <img
              src={tutorial.images[0]}
              alt={tutorial.title}
              className={`tutorial-image ${
                hoveredCard === tutorial.id ? "hovered" : ""
              }`}
            />
            <div
              className={`card-overlay ${
                hoveredCard === tutorial.id ? "hovered" : ""
              }`}
            >
              <h5>{tutorial.title}</h5>
              <p>{tutorial.text}</p>
              {tutorial.link && (
                <Link to={tutorial.link}>
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
