import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, Col, Row } from "react-bootstrap";
import "./Dashboards.css";

import { FaArrowLeft } from "react-icons/fa";
import PowerBIImage from "../../../../assets/images/dashboards/PoweBIFlamme.png"

import NavBar from "../../../../components/NavBar/NavBar";
import Footer from "../../../../components/Footer/Footer";

import DashboardVendas from "../../../../assets/images/dashboards/dashboard 1 background.png";
import DashboardClientes from "../../../../assets/images/dashboards/dashboard 4 background.png";
import DashboardJornada from "../../../../assets/images/dashboards/dashboard 5 background.png";
import DashboardSquidGame from "../../../../assets/images/dashboards/dashboard 12 background.png";
import DashboardIphone from "../../../../assets/images/dashboards/dashboard 7 background.png";
import DashboardUso from "../../../../assets/images/dashboards/dashboard 8 background.png";
import DashboardCovid from "../../../../assets/images/dashboards/dashboard 9 background.png";
import DashboardEmpresas from "../../../../assets/images/dashboards/dashboard 10 background.png";
import DashboardNetflix from "../../../../assets/images/dashboards/dashboard 11 background.png";
import DashboardMonitoramento from "../../../../assets/images/dashboards/dashboard 6 background.png";
import DashboardProAge from "../../../../assets/images/dashboards/dashboard 13 background.png";
import DashboardIBGE from "../../../../assets/images/dashboards/dashboard 14 background.png";
import DashboardNvidia from "../../../../assets/images/dashboards/dashboard 15 background.png";

import { useTheme } from "../../../../contexts/ThemeContext";

export const Dashboards = () => {
  const { isDarkMode } = useTheme();

  const images = [
    {
      id: 5,
      path: DashboardIphone,
      alt: "Análise de Avaliações do iPhone",
    },
    { id: 10, path: DashboardNvidia, alt: "Análise de Ações da NVidia" },
    {
      id: 9,
      path: DashboardNetflix,
      alt: "Análise Sobre Catálogo da Netlix",
    },
    {
      id: 2,
      path: DashboardClientes,
      alt: "Dashboard de Acompanhamento de Clientes",
    },
    {
      id: 3,
      path: DashboardJornada,
      alt: "Dashboard de Jornada de Motorista",
    },
    {
      id: 8,
      path: DashboardEmpresas,
      alt: "World Top Companies: Key Financial Analysis",
    },
    {
      id: 12,
      path: DashboardProAge,
      alt: "Análise de Desenvolvimento Empresa Fictícia ProVantage Solutions",
    },
    {
      id: 1,
      path: DashboardVendas,
      alt: "Dashboard de Vendas",
    },
    {
      id: 13,
      path: DashboardIBGE,
      alt: "Principais Indicadores do IBGE",
    },
    {
      id: 7,
      path: DashboardCovid,
      alt: "Análise Global Sobre Covid-19 em 2021",
    },
    {
      id: 11,
      path: DashboardMonitoramento,
      alt: "Monitoramento de Churn e Acompanhamento de Clientes",
    },
    {
      id: 6,
      path: DashboardUso,
      alt: "Uso de Dispositivos Móveis",
    },
    {
      id: 4,
      path: DashboardSquidGame,
      alt: "Análise de Comentários Sobre Round 6",
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
      <NavBar isDarkMode={isDarkMode} />
      <img
        className="image-opencv"
        src={PowerBIImage}
        alt="exemplo de disparidade de imagem"
        width="100%"
      />
      <p className="text-ini">
        O <span>Power BI</span> é uma ferramenta de análise de dados e
        visualização da Microsoft que oferece uma interface intuitiva para
        transformar dados em informações acionáveis.
        <br />
        <br />
        <span> Clique nos gráficos e veja alguns dos meus dasboards! </span>
      </p>
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
      <p className="text-ini">
        Os dados utilizados acima são ficticios ou retirados de sites públicos,
        apenas para fins de visualização.
        <br />
        <br />
      </p>
      <Footer />
    </div>
  );
};
