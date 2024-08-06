import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import DashBoard from "../../assets/images/imagedash.jpeg";
import DashBoard2 from "../../assets/images/dash-2.png";
import python from "../../assets/images/python.png";
import Angular from "../../assets/images/angular.png";
import ReactImage from "../../assets/images/react.png";
import NodeImage from "../../assets/images/nodejs-logo.png";
import "./Projects.css";

const Projects = () => {
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
  };

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
        <Card className="card-projects" style={{ width: "19rem" }}>
          <Card.Img variant="top" src={DashBoard} />
          <Card.Body>
            <Card.Title>Dashboards Power BI</Card.Title>
            <Card.Text>
              Aqui eu apresento os meus dashboards em Power BI. Todos projetos
              feitos e publicados por mim.
            </Card.Text>
            <Button className="button-see" variant="primary">
              See
            </Button>
          </Card.Body>
        </Card>
        <Card className="card-projects" style={{ width: "19rem" }}>
          <Card.Img variant="top" src={DashBoard2} />
          <Card.Body>
            <Card.Title>Tutoriais Power BI</Card.Title>
            <Card.Text>
              Aqui eu apresento tutoriais e passo a passos sobre a ferramenta
              Power BI.
            </Card.Text>
            <Button className="button-see" variant="primary">
              See
            </Button>
          </Card.Body>
        </Card>
        <Card className="card-projects" style={{ width: "19rem" }}>
          <Card.Img variant="top" src="https://w0.peakpx.com/wallpaper/266/297/HD-wallpaper-python-logo-python-code-computer-programming-logo.jpg" />
          <Card.Body>
            <Card.Title>Projetos Python</Card.Title>
            <Card.Text>
              Apresentação de projetos e tutoriais utilizando Python.
              Automações, integração com outras ferramentas, utilização para IA
              e etc.
            </Card.Text>
            <Button className="button-see" variant="primary">
              See
            </Button>
          </Card.Body>
        </Card>
        <Card className="card-projects" style={{ width: "19rem" }}>
          <Card.Img variant="top" src="https://storage.googleapis.com/medium-feed.appspot.com/images%2F9353691196%2F0d870cf02afb1-Angular-para-negocios.png" />
          <Card.Body>
            <Card.Title>Projetos Angular</Card.Title>
            <Card.Text>
              Projetos que implementei com Angular e tutoriais sobre o framework
              que tem como base a linguagem TypeScript.
            </Card.Text>
            <Button className="button-see" variant="primary">
              See
            </Button>
          </Card.Body>
        </Card>
        <Card className="card-projects" style={{ width: "19rem" }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCcBfYByw_dZJa4wY12L8-CpMOCiiaHEjUxg&s" />
          <Card.Body>
            <Card.Title>Projetos React JS</Card.Title>
            <Card.Text>
              Aqui apresento os meus projetos realizados utilizando o framework
              React JS, que alias é o que estou utilizando aqui neste site :)!
            </Card.Text>
            <Button className="button-see" variant="primary">
              See
            </Button>
          </Card.Body>
        </Card>
        <Card className="card-projects" style={{ width: "19rem" }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtChA5REy88fmUBnnvxFo8iROkTrEzYfsXeQ&s" />
          <Card.Body>
            <Card.Title>Backend com NodeJS</Card.Title>
            <Card.Text>
              Explore minhas soluções de backend desenvolvidas com Node.js.
              Encontre detalhes sobre os projetos que criei, destacando a
              arquitetura e as funcionalidades de cada um.
            </Card.Text>
            <Button className="button-see" variant="primary">
              See
            </Button>
          </Card.Body>
        </Card>
        <Card className="card-projects" style={{ width: "19rem" }}>
          <Card.Img variant="top" src="https://miro.medium.com/v2/resize:fit:1200/1*RK50G3R8xeRtANWAkJE6Mw.png" />
          <Card.Body>
            <Card.Title>Banco de Dados com MySQL e SQL</Card.Title>
            <Card.Text>
            Nesta seção, você encontrará tutoriais e guias práticos sobre o uso de bancos de dados, abrangendo tanto MySQL quanto SQL.
            </Card.Text>
            <Button className="button-see" variant="primary">
              See
            </Button>
          </Card.Body>
        </Card>
        <Card className="card-projects" style={{ width: "19rem" }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_CNWjYF4Oz87WfKqNTsvorNxQc4tdLSfvYQ&s" />
          <Card.Body>
            <Card.Title>Projetos Java</Card.Title>
            <Card.Text>
            Explore os projetos desenvolvidos por mim em Java, incluindo integrações com web services SOAP, criação e implementação de classes, e outras soluções robustas.
            </Card.Text>
            <Button className="button-see" variant="primary">
              See
            </Button>
          </Card.Body>
        </Card>
        <Card className="card-projects" style={{ width: "19rem" }}>
          <Card.Img variant="top" src="https://techmoran.com/wp-content/uploads/2023/06/all-about-react-native-apps-776x415-1.png" />
          <Card.Body>
            <Card.Title>Aplicações Mobile com React Native</Card.Title>
            <Card.Text>
              Aqui mostro criações em desenvolvimento mobile utilizando React Native.
            </Card.Text>
            <Button className="button-see" variant="primary">
              See
            </Button>
          </Card.Body>
        </Card>
        <Card className="card-projects" style={{ width: "19rem" }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmHU9T4xQZGP3IXcw4OibiuJfOCZw8xXuc1Q&s" />
          <Card.Body>
            <Card.Title>Projetos com OpenCV</Card.Title>
            <Card.Text>
              Aqui mostro projetos com a utilização da biblioteca OpenCV que envolvem classificação de imagens, reconhecimento facial e etc.
            </Card.Text>
            <Button className="button-see" variant="primary">
              See
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
