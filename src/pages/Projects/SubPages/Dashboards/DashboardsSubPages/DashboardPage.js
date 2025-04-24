import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import NavBar from "../../../../../components/NavBar/NavBar";
import "./DashboardPage.css";
import Footer from "../../../../../components/Footer/Footer";
import { useTheme } from "../../../../../contexts/ThemeContext";

const DashboardPage = () => {
  const { id } = useParams();
  const { isDarkMode, toggleDarkMode } = useTheme();



  const dashboards = {
    1: {
      title: "Dashboard: Acompanhamento de Vendas",
      iframeUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiNDg4NWU3ZjgtYjdiOS00MThiLTlkMTktZjllNWU2NGZhYzQwIiwidCI6IjJhYTE4ODc1LTgwMjktNDkzZi1iMWEzLTE1M2FlNzllMjc4MCJ9",
    },
    2: {
      title: "Dashboard: Acompanhamento de Vendedores",
      iframeUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiY2M2MGU4ZWUtNzYwOC00YWFjLTliM2EtZjFkYjcwNjM0NWQ4IiwidCI6IjJhYTE4ODc1LTgwMjktNDkzZi1iMWEzLTE1M2FlNzllMjc4MCJ9",
    },
    3: {
      title: "Dashboard: Acompanhamento de Vendedores",
      iframeUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiNDU1MWE0YzYtNzJjYi00MjJmLWI1OTQtZDQ2ZWE3Y2RmMjY5IiwidCI6IjJhYTE4ODc1LTgwMjktNDkzZi1iMWEzLTE1M2FlNzllMjc4MCJ9",
    },
    4: {
      title: "Dashboard: Análise de Tweets sobre Squid Game",
      iframeUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiNjA5ZDRhMGEtOTBlZC00MTIwLWEzYmEtZDA5NjE0MDdjODA1IiwidCI6IjJhYTE4ODc1LTgwMjktNDkzZi1iMWEzLTE1M2FlNzllMjc4MCJ9",
    },
    5: {
      title: "Dashboard: Análise de Avaliações do iPhone",
      iframeUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiMmI4YTg0ZTQtMGJiZi00ZTFjLTgxMGItM2U5NjZjYmQ5NWM4IiwidCI6IjJhYTE4ODc1LTgwMjktNDkzZi1iMWEzLTE1M2FlNzllMjc4MCJ9",
    },
    6: {
      title: "Dashboard: Uso de Dispositivos Móveis",
      iframeUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiMGEyNDY2ODItOGNlMS00N2I3LTg3MWUtMWY0MTgwNzYxMzdmIiwidCI6IjJhYTE4ODc1LTgwMjktNDkzZi1iMWEzLTE1M2FlNzllMjc4MCJ9",
    },
    7: {
      title: "Dashboard: Análise Global Sobre Covid-19 em 2021",
      iframeUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiNzdkNzdkZjctYzMwNS00OWUxLTlmNDItYWZiYTY1MGExY2Y3IiwidCI6IjJhYTE4ODc1LTgwMjktNDkzZi1iMWEzLTE1M2FlNzllMjc4MCJ9",
    },
    8: {
      title: "Dashboard: World Top Companies: Key Financial Analysis",
      iframeUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiN2MyYTUzYzYtYTM4Zi00OWE1LTk5NWItMmIwNjc5ZWU3MDVmIiwidCI6IjJhYTE4ODc1LTgwMjktNDkzZi1iMWEzLTE1M2FlNzllMjc4MCJ9",
    },
    9: {
      title: "Dashboard: Análise Sobre Catálogo da Netlix",
      iframeUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiYmQ4MDYwYjctNzcxOS00OTExLTgxMzMtYjAxZDUzNGRkZGY1IiwidCI6IjJhYTE4ODc1LTgwMjktNDkzZi1iMWEzLTE1M2FlNzllMjc4MCJ9&pageName=497ce4e306802030ca6a",
    },
    10: {
      title: "Dashboard: Análise das Ações da NVidia",
      iframeUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiN2QzNDFmMmEtY2VhZi00NzcxLWI0MGYtYjkzNzRiZDM3NmU1IiwidCI6IjJhYTE4ODc1LTgwMjktNDkzZi1iMWEzLTE1M2FlNzllMjc4MCJ9",
    },
    11: {
      title: "Dashboard: Monitoramento de Churn e Acompanhamento de Clientes",
      iframeUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiMzZiMGRmYTctNjE5OS00OTFmLWI4YTktNzNjMWE5Yjc2MjM4IiwidCI6IjJhYTE4ODc1LTgwMjktNDkzZi1iMWEzLTE1M2FlNzllMjc4MCJ9&pageName=10402655dadeb565b5b9",
    },
    12: {
      title:
        "Dashboard: Análise de Desenvolvimento - Empresa Fictícia ProVantage Solutions",
      iframeUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiZjMwMmNlNDAtZTAxOC00NjQxLWIxMGItNWFiODNlYTZkZGE0IiwidCI6IjJhYTE4ODc1LTgwMjktNDkzZi1iMWEzLTE1M2FlNzllMjc4MCJ9&pageName=0262dd75e14362398e2b",
    },
    13: {
      title: "Dashboard: Principais Indicadores do IBGE",
      iframeUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiOTZlNzRiY2UtZWJjNS00MTliLThmYWUtODg1NDRmNzZmNzE1IiwidCI6IjJhYTE4ODc1LTgwMjktNDkzZi1iMWEzLTE1M2FlNzllMjc4MCJ9",
    },
  };

  const selectedDashboard = dashboards[id];

  if (!selectedDashboard) {
    return <h2>Dashboard não encontrado</h2>;
  }

  return (
    <div
      className={`dashboard-container ${
        isDarkMode ? "dark-mode-dashboards" : ""
      }`}
    >
      <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div>
        <Link to={"/Dashboards"} className="back-icon">
          <FaArrowLeft />
        </Link>
      </div>
      <div className="dashboard-page-container">
        <h2 className="dashboard-title">{selectedDashboard.title}</h2>
        <iframe
          title={`Iframe do ${selectedDashboard.title}`}
          src={selectedDashboard.iframeUrl}
          className="dashboard-iframe"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;
