import "./Blog.css";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SendEmailsCover from "../../assets/images/send-emails/capa.png";
import { useTheme } from "../../contexts/ThemeContext";
import { useColor } from "../../contexts/ColorContext";
import { useLanguage } from "../../contexts/LanguageContext";
import Disparity from "../../assets/images/python/depthmaps.png";
import PBI from "../../assets/images/python/pbi.png";
import Selenium from "../../assets/images/python/selenium.png";
import PowerBi from "../../assets/images/python/power-BI.png";
import Footer from "../../components/Footer/Footer";
export const Blog = () => {
  const { selectedColor } = useColor();
  const colorClass = `color-${selectedColor.replace("#", "")}`;
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();

  const tutorials = [
    {
      id: 1,
      titleEn: "Sending emails from a form with Node.js",
      textEn: "Learn how to send emails from a form using Node.js.",
      title: "Enviando e-mails de um formulário com Node.js",
      text: "Aprenda a enviar e-mails a partir de um formulário usando Node.js.",
      images: [SendEmailsCover],
      link: "/send-emails",
    },
    {
      id: 2,
      titleEn: "Database with MySQL and SQL",
      textEn:
        "In this section, you will find practical tutorials and guides about using databases, covering both...",
      title: "Banco de Dados com MySQL e SQL",
      text: "Nesta seção, você encontrará tutoriais e guias práticos sobre o uso de bancos de dados, abrangendo tanto...",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-5LhP_Q8i_JBK8mMzn-ApcwLPH5UhTF76A&s",
      ],
      link: "/sqlpage",
    },
    {
      id: 3,
      titleEn: "Stereoscopic Vision for Socially Assistive Robots",
      textEn:
        "Recognizing and locating people and objects in an environment is essential for mobile robotics. These features help plan the trajectories of these devices.",
      title: "Visão Estereoscópica para Robôs Socialmente Assistivos",
      text: "O reconhecimento e a localização de pessoas e objetos em um cenário é essencial para a robótica móvel. Estas funcionalidades auxiliam no planejamento da execução de trajetórias desses dispositivos",
      images: [Disparity],
      link: "/rosa",
    },
    {
      id: 4,
      titleEn: "Connecting to the Power BI API",
      textEn: "Connecting to the Power BI API.",
      title: "Conexão à API do Power BI",
      text: "Conexão com a API do Power BI.",
      images: [PBI],
      link: "/refresh",
    },
    {
      id: 5,
      titleEn: "Dataset Refresh",
      textEn: "Refreshing datasets through the Power BI API.",
      title: "Atualização de Datasets",
      text: "Atualizar datasets via API do Power BI",
      images: [PowerBi],
      link: "/refresh2",
    },
    {
      id: 6,
      titleEn: "Automatic Message Sending via WhatsApp",
      textEn:
        "Sending images from a specific directory. It is also possible to send text messages by changing a few parameters.",
      title: "Envio automático de mensagens via Whatsapp",
      text: "Realiza o envio de imagens a partir de um determinado diretório. Também é possível realizar o envio de mensagens de texto mudando alguns parâmetros.",
      images: [Selenium],
      link: "/automation",
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
        {language === "en" && (
          <p>
            Here I share what I learn along the way: tips, code, tricks, and
            even those "how did I do that again?" moments. All to help (or
            remember) later.
          </p>
        )}
        {language === "pt" && (
        <p>
          Aqui eu compartilho o que aprendo no caminho: dicas, códigos, truques
          e até aqueles “como é que eu fiz isso mesmo?”. Tudo pra ajudar (ou
          lembrar) depois.😄
        </p>
        )}
      </div>
      <div className="blog-content">
        {tutorials.map((tutorial) => (
          <div key={tutorial.id} className="card-blog">
            <img
              src={tutorial.images[0]}
              alt={language === "en" ? tutorial.titleEn : tutorial.title}
              className="tutorial-image"
            />
            <div className="card-info-blog">
              <h5>{language === "en" ? tutorial.titleEn : tutorial.title}</h5>
              <p>{language === "en" ? tutorial.textEn : tutorial.text}</p>
              {tutorial.link && (
                language === "en" ? (
                  <Link to={tutorial.link} className="continue-link">
                    Read more →
                  </Link>
                ) : (
                <Link to={tutorial.link} className="continue-link">
                  Continue lendo →
                </Link>
                )
              )}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
