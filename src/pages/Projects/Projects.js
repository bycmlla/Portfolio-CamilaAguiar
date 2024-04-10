import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Roomrover from "../../assets/images/roomrover.png";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <NavBar />
      <div className="text-projects">
        <h2>My Projects</h2>
        <p>Here are my projects. All of them were done by me.</p>
      </div>
      <div className="projects-container">
        <Card className="card-roomrover" style={{ width: "19rem" }}>
          <Card.Img variant="top" src={Roomrover} />
          <Card.Body>
            <Card.Title>RoomRover</Card.Title>
            <Card.Text>
              RoomRover is a hotel room reservation website that I built using
              Angular and NodeJS, along with its design in Figma.
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
