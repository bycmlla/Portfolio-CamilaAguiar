import "./Blog.css";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard3 from "../../assets/images/dashboards/dashboard 3.png";
import { useTheme } from "../../contexts/ThemeContext";
import { useColor } from "../../contexts/ColorContext";
import Disparity from "../../assets/images/python/depthmaps.png";
import PBI from "../../assets/images/python/pbi.png";
import Selenium from "../../assets/images/python/selenium.png";
import PowerBi from "../../assets/images/python/power-BI.png";
import Footer from "../../components/Footer/Footer";
export const Blog = () => {
  const { selectedColor } = useColor();
  const colorClass = `color-${selectedColor.replace("#", "")}`;
  const { isDarkMode } = useTheme();

  const tutorials = [
    {
      id: 1,
      title: "Transmitindo Conhecimentos - Power BI",
      text: "Aprenda alguns assuntos sobre a ferramenta Power BI.",
      images: [Dashboard3],
      link: "/breve",
    },
    {
      id: 2,
      title: "Banco de Dados com MySQL e SQL",
      text: "Nesta seção, você encontrará tutoriais e guias práticos sobre o uso de bancos de dados, abrangendo tanto...",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-5LhP_Q8i_JBK8mMzn-ApcwLPH5UhTF76A&s",
      ],
      link: "/sqlpage",
    },
    {
      id: 3,
      title: "Visão Estereoscópica para Robôs Socialmente Assistivos",
      text: "O reconhecimento e a localização de pessoas e objetos em um cenário é essencial para a robótica móvel. Estas funcionalidades auxiliam no planejamento da execução de trajetórias desses dispositivos",
      images: [Disparity],
      link: "/rosa",
    },
    {
      id: 4,
      title: "Conexão à API do Power BI",
      text: "Conexão com a API do Power BI.",
      images: [PBI],
      link: "/refresh",
    },
    {
      id: 5,
      title: "Atualização de Datasets",
      text: "Atualizar datasets via API do Power BI",
      images: [PowerBi],
      link: "/refresh2",
    },
    {
      id: 6,
      title: "Envio automático de mensagens via Whatsapp",
      text: "Realiza o envio de imagens a partir de um determinado diretório. Também é possível realizar o envio de mensagens de texto mudando alguns parâmetros.",
      images: [Selenium],
      link: "#/automation",
    },
  ];

  return (
    <div
      className={`blog-container ${
        isDarkMode ? "dark-mode-blog" : ""
      } ${colorClass}`}
    >
      <NavBar />
      <div className="text-blog">
        <h2>Knowledge Hub</h2>
        <p>
          Aqui eu compartilho o que aprendo no caminho: dicas, códigos, truques
          e até aqueles “como é que eu fiz isso mesmo?”. Tudo pra ajudar (ou
          lembrar) depois.😄
        </p>
      </div>
      <div className="blog-content">
        {tutorials.map((tutorial) => (
          <div key={tutorial.id} className="card-blog">
            <img
              src={tutorial.images[0]}
              alt={tutorial.title}
              className="tutorial-image"
            />
            <div className="card-info-blog">
              <h5>{tutorial.title}</h5>
              <p>{tutorial.text}</p>
              {tutorial.link && (
                <Link to={tutorial.link} className="continue-link">
                  Continue lendo →
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
