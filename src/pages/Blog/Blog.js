import "./Blog.css";
import NavBar from "../../components/NavBar/NavBar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard3 from "../../assets/images/dashboards/dashboard 3.png";
import { useTheme } from "../../contexts/ThemeContext";
import { useColor } from "../../contexts/ColorContext";

export const Blog = () => {
  const { selectedColor } = useColor();
  const colorClass = `color-${selectedColor.replace("#", "")}`;
  const { isDarkMode } = useTheme();

  const tutorials = [
    {
      id: 2,
      title: "Transmitindo Conhecimentos - Power BI",
      text: "Aprenda alguns assuntos sobre a ferramenta Power BI.",
      images: [Dashboard3],
      link: "/angular",
    },
    {
      id: 7,
      title: "Banco de Dados com MySQL e SQL",
      text: "Nesta seção, você encontrará tutoriais e guias práticos sobre o uso de bancos de dados, abrangendo tanto MySQL quanto SQL.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-5LhP_Q8i_JBK8mMzn-ApcwLPH5UhTF76A&s",
      ],
      link: "/sqlpage",
    },
  ];

  return (
    <div
      className={`projects-container ${
        isDarkMode ? "dark-mode-projects" : ""
      } ${colorClass}`}
    >
      <NavBar />
      <div className="text-projects">
        <h2>Aprenda Comigo</h2>
        <p>Compartilhando conhecimento através de tutoriais e guias.</p>
      </div>
      <div className="projects-content">
        {tutorials.map((tutorial) => (
          <div key={tutorial.id} className="card-projects">
            <img
              src={tutorial.images[0]}
              alt={tutorial.title}
              className="tutorial-image"
            />
            <div className="card-overlay">
              <h5>{tutorial.title}</h5>
              <p>{tutorial.text}</p>
              {tutorial.link && (
                <Link to={tutorial.link}>
                  <Button className="button-see" variant="primary">
                    Ver
                  </Button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
