import React, { useState, useEffect } from "react";
import "./Dashboards.css";
import NavBar from "../../../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DashboardVendas from "../../../../assets/images/dashboards/dashboard 1 background.png";
import DashboardClientes from "../../../../assets/images/dashboards/dashboard 4 background.png";
import DashboardJornada from "../../../../assets/images/dashboards/dashboard 5 background.png";
import DashboardSquidGame from "../../../../assets/images/dashboards/squidgame background.png";
import DashboardAlertas from "../../../../assets/images/dashboards/alertas background.png";
import DashboardJornada2 from "../../../../assets/images/dashboards/jornada background.png";
import { Card, Col, Row } from "react-bootstrap";

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
      link: "https://app.powerbi.com/view?r=eyJrIjoiNDg4NWU3ZjgtYjdiOS00MThiLTlkMTktZjllNWU2NGZhYzQwIiwidCI6IjJhYTE4ODc1LTgwMjktNDkzZi1iMWEzLTE1M2FlNzllMjc4MCJ9",
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
      alt: "Dashboard de Round 6",
      link: "https://app.powerbi.com/view?r=eyJrIjoiNjA5ZDRhMGEtOTBlZC00MTIwLWEzYmEtZDA5NjE0MDdjODA1IiwidCI6IjJhYTE4ODc1LTgwMjktNDkzZi1iMWEzLTE1M2FlNzllMjc4MCJ9",
    },
    {
      id: 5,
      path: DashboardAlertas,
      alt: "Dashboard de Alertas",
      link: "https://app.powerbi.com/view?r=eyJrIjoiYzI1MTZjNDYtNzFjMS00ODdhLTgwMGEtYTIzNDVjMGU5NDUwIiwidCI6ImU4YTlhNjA0LWIyYzItNDgzNy1hMDhkLTI1ZGRmNTBlMGU3OCJ9",
    },
    {
      id: 6,
      path: DashboardJornada2,
      alt: "Dashboard de Jornada",
      link: "http://github.com",
    }
  ];

  const CardItem = React.memo(({ image }) => (
    <Col md={4} className="mb-4">
      <Card className="card-item">
        <Link to={image.link}>
          <motion.img
            className="card-img-top"
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
    <div className={`dashboard-container ${isDarkMode ? "dark-mode-dashboards" : ""}`}>
      <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <motion.div className="container-dashboards">
        <Row>
          {images.map(image => (
            <CardItem key={image.id} image={image} />
          ))}
        </Row>
      </motion.div>
    </div>
  );
  
};
