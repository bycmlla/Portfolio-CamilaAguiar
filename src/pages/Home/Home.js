import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { TypeWriter } from "../../components/TypeWriter/TypeWriter";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdEmail } from "react-icons/md";
import {
  FaLinkedin,
  FaWhatsapp,
  FaGithubSquare,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiPowerbi } from "react-icons/si";
import ScrollReveal from "scrollreveal";

import ImageWhitePage from "../../assets/images/camilawhitepage.png";
import ImageBlackPage from "../../assets/images/camilablackpage.png";
import DashBoard from "../../assets/images/imagedash.jpeg";
import DashBoard2 from "../../assets/images/dash-2.png";
import DashBoard3 from "../../assets/images/dash2.jpeg";
import DashBoard4 from "../../assets/images/dashhh.png";
import PythonCode from "../../assets/images/python.png";
import JavaCode from "../../assets/images/javaa.png";
import ReactCode from "../../assets/images/reactjs.png";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Skills from "../../components/Skills/Skills";

import "./Home.css";

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const location = useLocation();
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Dashboards Power BI",
      text: "Aqui eu apresento os meus dashboards em Power BI. Todos projetos feitos e publicados por mim.",
      images: [DashBoard, DashBoard3],
      link: "/About",
    },
    {
      id: 2,
      title: "Tutoriais Power BI",
      text: "Aqui eu apresento tutoriais e passo a passos sobre a ferramenta Power BI.",
      images: [DashBoard2, DashBoard4],
    },
  ];

  const projectPython = [
    {
      id: 3,
      title: "Projetos Python",
      text: "Apresentação de projetos e tutoriais utilizando Python. Automações, integração com outras ferramentas, utilização para IA e etc.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZqZkpMyiN2uSuT7GAf6JSkJ44YsZqoQHdw&s",
        "https://img3.wallspic.com/crops/0/9/2/3/6/163290/163290-python_logo-python-icon-programming_language-logo-3840x2160.png",
      ],
      link: "/link-do-projeto-python",
    },
    {
      id: 10,
      title: "Projetos com OpenCV",
      text: "Aqui mostro projetos com a utilização da biblioteca OpenCV que envolvem classificação de imagens, reconhecimento facial e etc.",
      images: [
        "https://media.licdn.com/dms/image/D4D12AQH0D7Zswrrvbg/article-cover_image-shrink_720_1280/0/1690953627107?e=2147483647&v=beta&t=gH6caJ2163WSmxeiGgox8dqQu-D_soffaLWgmmcWscs",
        "https://iotdesignshop.com/wp-content/uploads/2022/12/487px-OpenCV_Logo_with_text-2.png",
      ],
      link: "/link-do-projeto-python",
    },
  ];
  const projectJava = [
    {
      id: 8,
      title: "Projetos Java",
      text: "Explore os projetos desenvolvidos por mim em Java, incluindo integrações com web services SOAP, criação e implementação de classes, e outras soluções robustas.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_CNWjYF4Oz87WfKqNTsvorNxQc4tdLSfvYQ&s",
        "https://logolook.net/wp-content/uploads/2022/11/Java-Logo-1996.png",
      ],
      link: "/link-do-projeto-java-1",
    },
    {
      id: 7,
      title: "Banco de Dados com MySQL e SQL",
      text: "Nesta seção, você encontrará tutoriais e guias práticos sobre o uso de bancos de dados, abrangendo tanto MySQL quanto SQL.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-5LhP_Q8i_JBK8mMzn-ApcwLPH5UhTF76A&s",
        "https://w3.cdn.cl9.cloud/wp-content/uploads/2020/03/quais-as-diferencas-entre-as-versoes-do-sql-server-p10dnfny4wpoh5oxcvtewb4ezm48eemcycsg2jvhl4.jpg",
      ],
      link: "/link-do-projeto-java-2",
    },
  ];

  const projectsReact = [
    {
      id: 5,
      title: "Projetos React JS",
      text: "Aqui apresento os meus projetos realizados utilizando o framework React JS, que alias é o que estou utilizando aqui neste site :)!",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCcBfYByw_dZJa4wY12L8-CpMOCiiaHEjUxg&s",
        "https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png",
      ],
      link: "/",
    },
    {
      id: 6,
      title: "Backend com NodeJS",
      text: "Explore minhas soluções de backend desenvolvidas com Node.js. Encontre detalhes sobre os projetos que criei, destacando a arquitetura e as funcionalidades de cada um.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtChA5REy88fmUBnnvxFo8iROkTrEzYfsXeQ&s",
        "https://polidog.jp/images/covers/nodejs-logo.png",
      ],
      link: "/",
    },
  ];

  useEffect(() => {
    setIsActive(true);

    const sr = ScrollReveal({
      distance: "20px",
      duration: 1300,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      reset: true,
    });

    sr.reveal(".reveal", { origin: "left", delay: 200 });
    sr.reveal(".reveal-right", { origin: "right", delay: 200 });

    return () => sr.destroy();
  }, [location.pathname]);

  const toggleDarkModeHome = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    localStorage.setItem("darkMode", newDarkModeState.toString());
  };

  const handleClick = () => {
    window.open("https://github.com/bycmlla", "_blank");
  };

  const handleMouseEnter = (cardIndex) => {
    setHoveredCard(cardIndex);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };
  return (
    <div className={`home-container ${isDarkMode ? "dark-mode-home" : ""}`}>
      <NavBar
        className="reveal"
        toggleDarkMode={toggleDarkModeHome}
        isDarkMode={isDarkMode}
      />

      <section className="text-and-image-container">
        <div className="text-container reveal">
          <TypeWriter
            textColor={isDarkMode ? "white" : "black"}
            text="Hello, i'm Camila"
          />
          <p>
            Full-stack Developer and <br />
            Computer Vision. <br /> <br />
            Full-stack developer, applying knowledge in <br /> React JS, Node
            JS, TypeScript, and Computer <br /> Vision in Python. Contributing
            to assistive <br /> technology.
          </p>
        </div>
      </section>

      <section className="content-container">
        <ImageSlider />
        <div className="icons-container">
          <ul>
            <li>
              <a href="https://github.com/bycmlla">
                <FaGithubSquare />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/camila-de-aguiar-ti1808/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://wa.me/5533998759437">
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a href="mailto:by.cmlla0107@gmail.com">
                <MdEmail />
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className={`image-container ${isActive ? "active" : ""}`}>
        <img
          src={isDarkMode ? ImageBlackPage : ImageWhitePage}
          alt=""
          onClick={handleClick}
        />
        <div>
          <Skills />
        </div>
      </section>

      <section className="text-projects">
        <h2>My Projects</h2>
        <h4>
          {" "}
          <SiPowerbi className="icon-size-data" /> Power BI Dashboards
        </h4>
        <div className="dashboard-projects">
          <div>
            <iframe
              title="aula-curso"
              width="625"
              height="380"
              src="https://app.powerbi.com/view?r=eyJrIjoiNDg4NWU3ZjgtYjdiOS00MThiLTlkMTktZjllNWU2NGZhYzQwIiwidCI6IjJhYTE4ODc1LTgwMjktNDkzZi1iMWEzLTE1M2FlNzllMjc4MCJ9"
              allowFullScreen="true"
            ></iframe>

            <div className="projects-content-home">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="card-projects"
                  style={{ width: "19rem" }}
                  onMouseEnter={() => handleMouseEnter(project.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div style={{ position: "relative" }}>
                    <Card.Img
                      variant="top"
                      src={project.images[0]}
                      style={{ opacity: hoveredCard === project.id ? 0 : 1 }}
                    />
                    <Card.Img
                      variant="top"
                      src={project.images[1]}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        opacity: hoveredCard === project.id ? 1 : 0,
                        transition: "opacity 0.7s ease",
                      }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.text}</Card.Text>
                    <Link to={project.link}>
                      <Button className="button-see" variant="primary">
                        See
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
          <div className="text-description reveal-right">
            <p>
              Transformando dados em insights significativos. Através do Power
              BI, consigo criar dashboards interativos que auxiliam na tomada de
              decisões estratégicas. Nesta seção, você encontrará alguns dos
              meus projetos mais recentes e tutoriais que criei para
              compartilhar meu conhecimento e ajudar outros profissionais a
              aproveitar ao máximo essa poderosa ferramenta de BI.
            </p>
          </div>
        </div>
        <hr class="hr hr-blurry" />

        <h4>
          {" "}
          <FaPython className="icon-size-python" /> Python Projects
        </h4>

        <div className="dashboard-projects">
          <div>
            <img src={PythonCode} alt="Python Code" width="625" height="380" />
            <div className="projects-content-home">
              {projectPython.map((project) => (
                <Card
                  key={project.id}
                  className="card-projects"
                  style={{ width: "19rem" }}
                  onMouseEnter={() => handleMouseEnter(project.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div style={{ position: "relative" }}>
                    <Card.Img
                      variant="top"
                      src={project.images[0]}
                      style={{ opacity: hoveredCard === project.id ? 0 : 1 }}
                    />
                    <Card.Img
                      variant="top"
                      src={project.images[1]}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        opacity: hoveredCard === project.id ? 1 : 0,
                        transition: "opacity 0.7s ease",
                      }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.text}</Card.Text>
                    {project.link && (
                      <Link to={project.link}>
                        <Button className="button-see" variant="primary">
                          See
                        </Button>
                      </Link>
                    )}
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
          <div className="text-description reveal-right">
            <p>
              Explorando o mundo da automação e inteligência artificial com
              Python. Aqui, compartilho projetos e tutoriais que abrangem desde
              a automação de tarefas até a criação de modelos de aprendizado de
              máquina. Mergulhe nesta seção para descobrir como Python pode
              simplificar processos e abrir novas possibilidades.
            </p>
          </div>
        </div>
        <hr class="hr hr-blurry" />

        <h4>
          {" "}
          <FaJava className="icon-size-python" /> Projetos Java
        </h4>

        <div className="dashboard-projects">
          <div>
            <img src={JavaCode} alt="Java Code" width="625" height="380" />
            <div className="projects-content-home">
              {projectJava.map((project) => (
                <Card
                  key={project.id}
                  className="card-projects"
                  style={{ width: "19rem" }}
                  onMouseEnter={() => handleMouseEnter(project.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div style={{ position: "relative" }}>
                    <Card.Img
                      variant="top"
                      src={project.images[0]}
                      style={{ opacity: hoveredCard === project.id ? 0 : 1 }}
                    />
                    <Card.Img
                      variant="top"
                      src={project.images[1]}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        opacity: hoveredCard === project.id ? 1 : 0,
                        transition: "opacity 0.7s ease",
                      }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.text}</Card.Text>
                    {project.link && (
                      <Link to={project.link}>
                        <Button className="button-see" variant="primary">
                          See
                        </Button>
                      </Link>
                    )}
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
          <div className="text-description reveal-right">
            <p>
              Explorando o universo da programação Java e SQL, compartilho aqui
              meus projetos e tutoriais que abrangem desde a integração com web
              services SOAP até a conexão com bancos de dados SQL. Nesta seção,
              você encontrará exemplos práticos de como utilizo Java para
              construir aplicações robustas e eficientes, bem como técnicas
              avançadas de manipulação e consulta de dados em SQL. Mergulhe e
              descubra como essas tecnologias podem ser aplicadas para resolver
              problemas complexos e otimizar processos empresariais.
            </p>
          </div>
        </div>
        <hr class="hr hr-blurry" />

        <h4>
          {" "}
          <RiReactjsFill className="icon-size-python" /> Projetos React JS
        </h4>
        <div className="dashboard-projects">
          <div>
            <img src={ReactCode} alt="Code react js" width="625" height="380" />
            <div className="projects-content-home">
              {projectsReact.map((project) => (
                <Card
                  key={project.id}
                  className="card-projects"
                  style={{ width: "19rem" }}
                  onMouseEnter={() => handleMouseEnter(project.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div style={{ position: "relative" }}>
                    <Card.Img
                      variant="top"
                      src={project.images[0]}
                      style={{ opacity: hoveredCard === project.id ? 0 : 1 }}
                    />
                    <Card.Img
                      variant="top"
                      src={project.images[1]}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        opacity: hoveredCard === project.id ? 1 : 0,
                        transition: "opacity 0.7s ease",
                      }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.text}</Card.Text>
                    {project.link && (
                      <Link to={project.link}>
                        <Button className="button-see" variant="primary">
                          See
                        </Button>
                      </Link>
                    )}
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
          <div className="text-description reveal-right">
            <p>
              Mergulhe no universo do desenvolvimento web com React JS e Node
              JS. Nesta seção, apresento projetos e tutoriais que demonstram
              minha expertise na criação de aplicações CRUD, desenvolvimento de
              websites dinâmicos e integração eficiente entre frontend e
              servidor. Descubra como essas tecnologias podem ser utilizadas
              para criar soluções modernas e interativas que atendem a diversas
              necessidades.
            </p>
          </div>
        </div>
        <hr class="hr hr-blurry" />
      </section>
      <Link to="/">
        <Button className="button-see" variant="primary">
          Navegar até os projetos
        </Button>
      </Link>
      <Footer />
    </div>
  );
};

export default Home;
