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
      <h1>teste</h1>
      <div className="projects-container">
      <Card className="card-roomrover" style={{ width: "19rem" }}>
          <Card.Img variant="top" src={Roomrover} />
          <Card.Body>
            <Card.Title>RoomRover</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
