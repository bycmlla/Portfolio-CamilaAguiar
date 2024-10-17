import React, { useState, useEffect } from "react";
import "./Dashboards.css";
import NavBar from "../../../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DashboardVendas from "../../../../assets/images/dashboards/dashboard 1 background.png";
import DashboardClientes from "../../../../assets/images/dashboards/dashboard 4 background.png";
import DashboardJornada from "../../../../assets/images/dashboards/dashboard 5 background.png";
import DashboardSquidGame from "../../../../assets/images/dashboards/squidgame background.png";
import DashboardIphone from "../../../../assets/images/dashboards/dashboard 7 background.png";
import DashboardUso from "../../../../assets/images/dashboards/dashboard 8 background.png";
import { Card, Col, Row } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "../../../../components/Footer/Footer";

export const Dashboards = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    setIsDarkMode(localStorage.getItem("darkMode") === "true");
  }, []);
  // alternar darkmode
  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    localStorage.setItem("darkMode", newDarkModeState.toString());
  };

  const images = [
    {
      id: 1,
      path: DashboardVendas,
      alt: "Dashboard de Vendas",
      link: "/Dashboard1",
    },
    {
      id: 2,
      path: DashboardClientes,
      alt: "Dashboard de Acompanhamento de Clientes",
      link: "https://app.powerbi.com/view?r=eyJrIjoiY2M2MGU4ZWUtNzYwOC00YWFjLTliM2EtZjFkYjcwNjM0NWQ4IiwidCI6IjJhYTE4ODc1LTgwMjktNDkzZi1iMWEzLTE1M2FlNzllMjc4MCJ9",
    },
    {
      id: 3,
      path: DashboardJornada,
      alt: "Dashboard de Jornada de Motorista",
      link: "https://app.powerbi.com/view?r=eyJrIjoiNDU1MWE0YzYtNzJjYi00MjJmLWI1OTQtZDQ2ZWE3Y2RmMjY5IiwidCI6IjJhYTE4ODc1LTgwMjktNDkzZi1iMWEzLTE1M2FlNzllMjc4MCJ9",
    },
    {
      id: 4,
      path: DashboardSquidGame,
      alt: "Análise de Comentários Sobre Round 6",
      link: "https://app.powerbi.com/view?r=eyJrIjoiNjA5ZDRhMGEtOTBlZC00MTIwLWEzYmEtZDA5NjE0MDdjODA1IiwidCI6IjJhYTE4ODc1LTgwMjktNDkzZi1iMWEzLTE1M2FlNzllMjc4MCJ9",
    },
    {
      id: 5,
      path: DashboardIphone,
      alt: "Análise de Avaliações do iPhone",
      link: "https://app.powerbi.com/view?r=eyJrIjoiMmI4YTg0ZTQtMGJiZi00ZTFjLTgxMGItM2U5NjZjYmQ5NWM4IiwidCI6IjJhYTE4ODc1LTgwMjktNDkzZi1iMWEzLTE1M2FlNzllMjc4MCJ9",
    },
    {
      id: 6,
      path: DashboardUso,
      alt: "Uso de Dispositivos Móveis",
      link: "https://app.powerbi.com/view?r=eyJrIjoiMGEyNDY2ODItOGNlMS00N2I3LTg3MWUtMWY0MTgwNzYxMzdmIiwidCI6IjJhYTE4ODc1LTgwMjktNDkzZi1iMWEzLTE1M2FlNzllMjc4MCJ9",
    },
  ];

  const CardItem = React.memo(({ image }) => (
    <Col md={4} className="mb-4">
      <Card className="card-item">
        <Link to={`/dashboard/${image.id}`}>
          <motion.img
            className="card-img-top-dash"
            src={image.path}
            alt={image.alt}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </Link>
      </Card>
    </Col>
  ));

  return (
    <div
      className={`dashboard-container ${
        isDarkMode ? "dark-mode-dashboards" : ""
      }`}
    >
      <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div>
        <Link to={"/projects"} className="back-icon">
          <FaArrowLeft />
        </Link>
      </div>
      <motion.div className="container-dashboards">
        <Row>
          {images.map((image) => (
            <CardItem key={image.id} image={image} />
          ))}
        </Row>
      </motion.div>
      <Footer/>
    </div>
  );
};
