import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DashBoard from "../../assets/images/dashboard 1.jpeg";
import DashBoard2 from "../../assets/images/dashboard 2.jpeg";
import DashBoard3 from "../../assets/images/dashboard 3.png";
import DashBoard4 from "../../assets/images/dashboard 4.png";
import "./Projects.css";

const Projects = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (cardIndex) => {
    setHoveredCard(cardIndex);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  useEffect(() => {
    setIsDarkMode(localStorage.getItem("darkMode") === "true");
  }, []);

  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    localStorage.setItem("darkMode", newDarkModeState.toString());

    window.location.reload();
  };

  const projects = [
    {
      id: 1,
      title: "Dashboards Power BI",
      text: "Aqui eu apresento os meus dashboards em Power BI. Todos projetos feitos e publicados por mim.",
      images: [DashBoard, DashBoard2],
      link: "/Dashboards",
    },
    {
      id: 2,
      title: "Tutoriais Power BI",
      text: "Aqui eu apresento tutoriais e passo a passos sobre a ferramenta Power BI.",
      images: [DashBoard3, DashBoard4],
    },
    {
      id: 3,
      title: "Projetos Python",
      text: "Apresentação de projetos e tutoriais utilizando Python. Automações, integração com outras ferramentas, utilização para IA e etc.",
      images: [
        "https://w0.peakpx.com/wallpaper/266/297/HD-wallpaper-python-logo-python-code-computer-programming-logo.jpg",
        "https://img3.wallspic.com/crops/0/9/2/3/6/163290/163290-python_logo-python-icon-programming_language-logo-3840x2160.png",
      ],
    },
    {
      id: 4,
      title: "Projetos Angular",
      text: "Projetos que implementei com Angular e tutoriais sobre o framework que tem como base a linguagem TypeScript.",
      images: [
        "https://storage.googleapis.com/medium-feed.appspot.com/images%2F9353691196%2F0d870cf02afb1-Angular-para-negocios.png",
        "https://www.ryadel.com/wp-content/uploads/2017/10/angular-logo.jpg",
      ],
    },
    {
      id: 5,
      title: "Projetos React JS",
      text: "Aqui apresento os meus projetos realizados utilizando o framework React JS, que alias é o que estou utilizando aqui neste site :)!",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCcBfYByw_dZJa4wY12L8-CpMOCiiaHEjUxg&s",
        "https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png",
      ],
    },
    {
      id: 6,
      title: "Backend com NodeJS",
      text: "Explore minhas soluções de backend desenvolvidas com Node.js. Encontre detalhes sobre os projetos que criei, destacando a arquitetura e as funcionalidades de cada um.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtChA5REy88fmUBnnvxFo8iROkTrEzYfsXeQ&s",
        "https://polidog.jp/images/covers/nodejs-logo.png",
      ],
    },
    {
      id: 7,
      title: "Banco de Dados com MySQL e SQL",
      text: "Nesta seção, você encontrará tutoriais e guias práticos sobre o uso de bancos de dados, abrangendo tanto MySQL quanto SQL.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-5LhP_Q8i_JBK8mMzn-ApcwLPH5UhTF76A&s",
        "https://w3.cdn.cl9.cloud/wp-content/uploads/2020/03/quais-as-diferencas-entre-as-versoes-do-sql-server-p10dnfny4wpoh5oxcvtewb4ezm48eemcycsg2jvhl4.jpg",
      ],
      link: "/sqlpage"
    },
    {
      id: 8,
      title: "Projetos Java",
      text: "Explore os projetos desenvolvidos por mim em Java, incluindo integrações com web services SOAP, criação e implementação de classes, e outras soluções robustas.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_CNWjYF4Oz87WfKqNTsvorNxQc4tdLSfvYQ&s",
        "https://logolook.net/wp-content/uploads/2022/11/Java-Logo-1996.png",
      ],
    },
    {
      id: 9,
      title: "Aplicações Mobile com React Native",
      text: "Aqui mostro criações em desenvolvimento mobile utilizando React Native.",
      images: [
        "https://techmoran.com/wp-content/uploads/2023/06/all-about-react-native-apps-776x415-1.png",
        "https://miro.medium.com/v2/1*AjesIvV-kkwk6LLvNf1t4A.png",
      ],
    },
    {
      id: 10,
      title: "Projetos com OpenCV",
      text: "Aqui mostro projetos com a utilização da biblioteca OpenCV que envolvem classificação de imagens, reconhecimento facial e etc.",
      images: [
        "https://media.licdn.com/dms/image/D4D12AQH0D7Zswrrvbg/article-cover_image-shrink_720_1280/0/1690953627107?e=2147483647&v=beta&t=gH6caJ2163WSmxeiGgox8dqQu-D_soffaLWgmmcWscs",
        "https://iotdesignshop.com/wp-content/uploads/2022/12/487px-OpenCV_Logo_with_text-2.png",
      ],
    },
  ];

  return (
    <div
      className={`projects-container ${isDarkMode ? "dark-mode-projects" : ""}`}
    >
      <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div className="text-projects">
        <h2>My Projects</h2>
        <p>Here are my projects. All of them were done by me.</p>
      </div>
      <div className="projects-content">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="card-projects"
            style={{ width: "19rem" }}
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div style={{ position: "relative" }}>
              <Card.Img
                variant="top"
                src={project.images[0]}
                style={{ opacity: hoveredCard === project.id ? 0 : 1 }}
              />
              <Card.Img
                variant="top"
                src={project.images[1]}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  opacity: hoveredCard === project.id ? 1 : 0,
                  transition: "opacity 0.7s ease",
                }}
              />
            </div>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.text}</Card.Text>
              <Link to={project.link}>
                <Button className="button-see" variant="primary">
                  See
                </Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default Projects;
