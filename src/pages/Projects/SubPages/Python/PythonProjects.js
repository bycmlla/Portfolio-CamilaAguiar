import React, { useState, useEffect } from "react";
import NavBar from "../../../../components/NavBar/NavBar";
import "./PythonProjects.css";
import Disparity from "../../../../assets/images/python/depthmaps.png";
import Selenium from "../../../../assets/images/python/selenium.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const PythonProjects = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const projectsPython = [
    {
      id: 1,
      title: "Visão Computacional",
      image: [Disparity],
      description:
        "Reconhecimento e a localização de pessoas e objetos em um cenário para robótica móvel.",
      link: "/rosa",
    },
    {
      id: 2,
      title: "Automação de Mensagens Whatsapp",
      image: [Selenium],
      description:
        "Como enviar mensagens de maneira automática utilizando o Python.",
      link: "/automation",
    },
    {
      id: 3,
      title: "Automação de Mensagens Whatsapp",
      image: [Selenium],
      description:
        "Como enviar mensagens de maneira automática utilizando o Python.",
      link: "",
    },
  ];
  useEffect(() => {
    setIsDarkMode(localStorage.getItem("darkMode") === "true");
  }, []);
  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    localStorage.setItem("darkMode", newDarkModeState.toString());

    window.location.reload();
  };

  return (
    <div
      className={`projects-container-python ${
        isDarkMode ? "dark-mode-projects" : ""
      }`}
    >
      <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div className="projects-content-python">
        {projectsPython.map((project) => (
          <Card
            key={project.id}
            className="card-projects-python"
            style={{ width: "18rem" }}
          >
            <div style={{ position: "relative" }}>
              <Card.Img
                variant="top"
                src={project.image}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <Link to={project.link}>
                <Button variant="primary">Ver</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PythonProjects;
