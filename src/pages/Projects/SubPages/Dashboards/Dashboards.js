import React from "react";
import "./Dashboards.css";
import DashboardVendas from "../../../../assets/images/dashboard 1.jpeg";
import DashboardClientes from "../../../../assets/images/dashboard 3.png";
import DashboardJornada from "../../../../assets/images/dashboard 5.png";
import DashboardSquidGame from "../../../../assets/images/squidgame.png";
import DashboardAlertas from "../../../../assets/images/alertas.png";
import DashboardJornada2 from "../../../../assets/images/jornada.png";

export const Dashboards = () => {
  const images = [
    { id: 1, path: DashboardVendas, alt: "Dashboard de Vendas" },
    {
      id: 2,
      path: DashboardClientes,
      alt: "Dashboard de Acompanhamento de Clientes",
    },
    { id: 3, path: DashboardJornada, alt: "Dashboard de Jornada de Motorista" },
    { id: 4, path: DashboardSquidGame, alt: "Dashboard de Round 6" },
    { id: 5, path: DashboardAlertas, alt: "Dashboard de Alertas" },
    { id: 6, path: DashboardJornada2, alt: "Dashboard de Jornada" },
  ];
  return (
    <div>
      <div className="container-dashboards">
        {images.map((image) => (
          <div key={image.id} className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={image.path} alt={image.alt} />
          </div>
        ))}
      </div>
      <div>

        
        {/* 
        <iframe
          title="aula-curso"
          width="825"
          height="500"
          src="https://app.powerbi.com/view?r=eyJrIjoiNDg4NWU3ZjgtYjdiOS00MThiLTlkMTktZjllNWU2NGZhYzQwIiwidCI6IjJhYTE4ODc1LTgwMjktNDkzZi1iMWEzLTE1M2FlNzllMjc4MCJ9"
          allowFullScreen="true"
        ></iframe>
        <iframe
          title="aula-curso"
          width="825"
          height="500"
          src="https://app.powerbi.com/view?r=eyJrIjoiY2M2MGU4ZWUtNzYwOC00YWFjLTliM2EtZjFkYjcwNjM0NWQ4IiwidCI6IjJhYTE4ODc1LTgwMjktNDkzZi1iMWEzLTE1M2FlNzllMjc4MCJ9"
          allowFullScreen="true"
        ></iframe>
        <iframe
          title="aula-curso"
          width="825"
          height="500"
          src="https://app.powerbi.com/view?r=eyJrIjoiNDU1MWE0YzYtNzJjYi00MjJmLWI1OTQtZDQ2ZWE3Y2RmMjY5IiwidCI6IjJhYTE4ODc1LTgwMjktNDkzZi1iMWEzLTE1M2FlNzllMjc4MCJ9"
          allowFullScreen="true"
        ></iframe>
        <iframe
          title="aula-curso"
          width="825"
          height="500"
          src="https://app.powerbi.com/view?r=eyJrIjoiNjA5ZDRhMGEtOTBlZC00MTIwLWEzYmEtZDA5NjE0MDdjODA1IiwidCI6IjJhYTE4ODc1LTgwMjktNDkzZi1iMWEzLTE1M2FlNzllMjc4MCJ9"
          allowFullScreen="true"
        ></iframe>
        <iframe
          title="aula-curso"
          width="825"
          height="500"
          src="https://app.powerbi.com/view?r=eyJrIjoiYzI1MTZjNDYtNzFjMS00ODdhLTgwMGEtYTIzNDVjMGU5NDUwIiwidCI6ImU4YTlhNjA0LWIyYzItNDgzNy1hMDhkLTI1ZGRmNTBlMGU3OCJ9"
          allowFullScreen="true"
        ></iframe>
        <iframe
          title="aula-curso"
          width="825"
          height="500"
          src="https://app.powerbi.com/view?r=eyJrIjoiN2VmODQwNjktZjQwMi00NmQ0LTg2MzctMjc2MWEyOThlYTU2IiwidCI6ImU4YTlhNjA0LWIyYzItNDgzNy1hMDhkLTI1ZGRmNTBlMGU3OCJ9&pageName=b4d1351eb133b2a59ddb"
          allowFullScreen="true"
        ></iframe> */}
      </div>
    </div>
  );
};
