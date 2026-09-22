import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";
import Dashboard1 from "../../assets/images/dashboards/dashboard 1.jpeg";
import { useColor } from "../../contexts/ColorContext";
import { useTheme } from "../../contexts/ThemeContext";
import PowerBiIcon from "../../assets/icons/powerbi.svg";
import PythonIcon from "../../assets/icons/python.svg";
import Footer from "../../components/Footer/Footer";
import BlackPBI from "../../assets/icons/blacpbi.svg";
import BlackPython from "../../assets/icons/icons8-python.svg";
import PsyVideo from "../../assets/videos/psyrpgvideo.mp4";
import PsyRpg1 from "../../assets/images/projects/psy1.png";
import PsyRpg2 from "../../assets/images/projects/psy2.png";
import PsyRpg3 from "../../assets/images/projects/psy3.png";
import PsyRpgCard from "../../assets/images/projects/psy1tela1.png";
import ReactNativeIcon from "../../assets/icons/react-native.png";
import ReactNativeIconBlack from "../../assets/icons/react-native-black.png";
import NodeJsIcon from "../../assets/icons/nodejs.png";
import NodeJsIconBlack from "../../assets/icons/nodepreto.png";
import GoogleIcon from "../../assets/icons/google.png";
import GoogleIconBlack from "../../assets/icons/googlepreto.png";
import RoomRover1 from "../../assets/images/projects/RoomRover1.png";
import RoomRover2 from "../../assets/images/projects/roomrover2.png";
import RoomRover3 from "../../assets/images/projects/roomrover3.png";
import RoomRover4 from "../../assets/images/projects/roomrover4.png";
import RoomRoverCard from "../../assets/images/projects/roomrovercard.png";
import AngularIcon from "../../assets/icons/angular.svg";
import AngularIconBlack from "../../assets/icons/angularjsblack.png";
import JavaIcon from "../../assets/icons/java.png";
import MySQLIcon from "../../assets/icons/mysql.png";
import MySQLIconBlack from "../../assets/icons/mysqlpreto.png";
import HTMLIcon from "../../assets/icons/html.png";
import WeatherUpCard from "../../assets/images/projects/weatherupcard.png";
import WeatherUp1 from "../../assets/images/projects/weatherup1.png";
import WeatherUp2 from "../../assets/images/projects/weatherup2.png";
import WeatherUp3 from "../../assets/images/projects/weatherup3.png";
import WeatherUp4 from "../../assets/images/projects/weatherup4.png";
import WeatherUp5 from "../../assets/images/projects/weatherup5.png";
import DepthImageCard from "../../assets/images/python/depthmaps.png";
import RoboRosa from "../../assets/images/python/image.png";
import NvidiaIcon from "../../assets/icons/nvidia.svg";
import OpenCVIcon from "../../assets/icons/opencv.svg";
import OpenCVIconBlack from "../../assets/icons/opencvblack.png";
import JtdtransportesCard from "../../assets/images/projects/jtdtransportes - Copia.png";
import Jtdtransportes1 from "../../assets/images/projects/jtdtransportes.png";
import Jtdtransportes2 from "../../assets/images/projects/jtdtransportes2.png";
import Jtdtransportes3 from "../../assets/images/projects/jtdtransportes3.png";
import Jtdtransportes4 from "../../assets/images/projects/jtdtransportes4.png";
import DioneMenezes1 from "../../assets/images/projects/dionemenezes1.png";
import DioneMenezes2 from "../../assets/images/projects/dionemenezes2.png";
import DioneMenezes3 from "../../assets/images/projects/dionemenezes3.png";
import DioneMenezes4 from "../../assets/images/projects/dionemenezes4.png";
import DioneMenezes5 from "../../assets/images/projects/dionemenezes5.png";
import DioneMenezes6 from "../../assets/images/projects/dionemenezes6.png";
import DioneMenezes7 from "../../assets/images/projects/dionemenezes7.png";
import DioneMenezes8 from "../../assets/images/projects/dionemenezes8.png";
import DioneMenezes9 from "../../assets/images/projects/dionemenezes9.png";
import Ems1 from "../../assets/images/projects/ems1.png";
import Ems2 from "../../assets/images/projects/ems2.png";
import Ems3 from "../../assets/images/projects/ems3.png";
import Ems4 from "../../assets/images/projects/ems4.png";
import Ems5 from "../../assets/images/projects/ems5.png";
import Gmac1 from "../../assets/images/projects/gmac1.png";
import Gmac2 from "../../assets/images/projects/gmac2.png";
import Gmac3 from "../../assets/images/projects/gmac3.png";
import Gmac4 from "../../assets/images/projects/gmac4.png";
import Gmac5 from "../../assets/images/projects/gmac5.png";
import Deskio1 from "../../assets/images/projects/deskio1.png";
import Deskio2 from "../../assets/images/projects/deskio2.png";
import Deskio3 from "../../assets/images/projects/deskio3.png";
import Deskio4 from "../../assets/images/projects/deskio4.png";
import Uva1 from "../../assets/images/projects/uva1.png";
import Uva2 from "../../assets/images/projects/uva2.png";
import Uva3 from "../../assets/images/projects/uva3.png";
import Uva4 from "../../assets/images/projects/uva4.png";
import Uva5 from "../../assets/images/projects/uva5.png";

const Projects = () => {
  const { selectedColor } = useColor();
  const colorClass = `color-${selectedColor.replace("#", "")}`;
  const { isDarkMode } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 480);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const projects = [
    {
      id: 11,
      title: "Uva Moda Fitness - E-commerce",
      text: "Ideia de e-commerce para uma loja de roupas fitness de Feira de Santana, com foco em estilo, praticidade e experiência de compra online.",
      images: [Uva1],
      otherimages: [
        { type: "image", src: Uva1 },
        { type: "image", src: Uva2 },
        { type: "image", src: Uva3 },
        { type: "image", src: Uva4 },
        { type: "image", src: Uva5 },
      ],
      icons: [ReactNativeIcon, NodeJsIcon],
      iconsBlack: [ReactNativeIconBlack, NodeJsIconBlack],
      l1: "React JS",
      l2: "Node JS",
      description:
        "Este projeto é uma proposta de e-commerce para a Uva Moda Fitness, uma nova ideia de loja de roupas fitness em Feira de Santana. O site foi pensado para apresentar as coleções, destacar os produtos e oferecer uma experiência de compra online moderna e intuitiva.\n\nA interface valoriza a identidade da marca e foi estruturada para permitir futuras expansões, como catálogo completo, carrinho, pagamentos e gestão de pedidos. Por enquanto, o projeto está em fase de exploração e ainda não possui domínio ou link público.",
    },
    {
      id: 10,
      title: "Deskio - Sistema Helpdesk",
      text: "Sistema helpdesk para abertura de chamados, acompanhamento de solicitações e controle de estoque, desenvolvido para a JTD Transportes e adaptável a outras empresas.",
      images: [Deskio1],
      otherimages: [
        { type: "image", src: Deskio1 },
        { type: "image", src: Deskio2 },
        { type: "image", src: Deskio3 },
        { type: "image", src: Deskio4 },
      ],
      icons: [ReactNativeIcon, NodeJsIcon],
      iconsBlack: [ReactNativeIconBlack, NodeJsIconBlack],
      l1: "React JS",
      l2: "Node JS",
      link: "https://deskio.site/admin",
      buttonText: "Ir para o site",
      description:
        "O Deskio é um sistema helpdesk desenvolvido para organizar o atendimento interno e a gestão de recursos de empresas como a JTD Transportes. A plataforma permite abrir, acompanhar e administrar chamados, centralizando as solicitações em um único ambiente.\n\nO sistema também conta com controle de estoque, ajudando a equipe a acompanhar materiais, movimentações e necessidades operacionais com mais agilidade. Sua estrutura pode ser adaptada para diferentes empresas e fluxos de trabalho.",
    },
    {
      id: 9,
      title: "GMAC Metalúrgica - Website",
      text: "Site profissional desenvolvido para uma metalúrgica de Feira de Santana, com foco em apresentar a empresa, seus serviços e sua atuação no mercado.",
      images: [Gmac1],
      otherimages: [
        { type: "image", src: Gmac1 },
        { type: "image", src: Gmac2 },
        { type: "image", src: Gmac3 },
        { type: "image", src: Gmac4 },
        { type: "image", src: Gmac5 },
      ],
      icons: [ReactNativeIcon, NodeJsIcon],
      iconsBlack: [ReactNativeIconBlack, NodeJsIconBlack],
      l1: "React JS",
      l2: "Node JS",
      link: "https://gustavoassuncao02.github.io/GMAC/",
      buttonText: "Ir para o site",
      description:
        "Este projeto é um site profissional desenvolvido para a GMAC Metalúrgica, empresa localizada em Feira de Santana. A página foi criada para apresentar a metalúrgica, destacar seus serviços e fortalecer sua presença digital.\n\nCom uma estrutura responsiva e uma comunicação clara, o site facilita o contato com clientes e transmite a experiência, a qualidade e a confiança da empresa.",
    },
    {
      id: 8,
      title: "EMS Consultoria - Website",
      text: "Site profissional desenvolvido para uma nova transportadora em criação pelo consultor EMS, especializada em serviços de transporte.",
      images: [Ems1],
      otherimages: [
        { type: "image", src: Ems1 },
        { type: "image", src: Ems2 },
        { type: "image", src: Ems3 },
        { type: "image", src: Ems4 },
        { type: "image", src: Ems5 },
      ],
      icons: [ReactNativeIcon, NodeJsIcon],
      iconsBlack: [ReactNativeIconBlack, NodeJsIconBlack],
      l1: "React JS",
      l2: "Node JS",
      link: "https://gustavoassuncao02.github.io/EMS-Consultoria/",
      buttonText: "Ir para o site",
      description:
        "Este projeto é um site profissional desenvolvido para a EMS Consultoria, uma nova transportadora em criação pelo consultor EMS. A página apresenta a empresa, seus serviços de transporte e sua proposta de atuação no mercado.\n\nCom uma identidade visual profissional e navegação responsiva, o site foi estruturado para transmitir confiança, facilitar o contato com clientes e apoiar o lançamento da nova operação.",
    },
    {
      id: 7,
      title: "Dione Menezes - Website",
      text: "Site profissional desenvolvido para a especialista de vendas Dione Menezes, com foco em credibilidade, apresentação profissional e contato com clientes.",
      images: [DioneMenezes1],
      otherimages: [
        { type: "image", src: DioneMenezes1 },
        { type: "image", src: DioneMenezes2 },
        { type: "image", src: DioneMenezes3 },
        { type: "image", src: DioneMenezes4 },
        { type: "image", src: DioneMenezes5 },
        { type: "image", src: DioneMenezes6 },
        { type: "image", src: DioneMenezes7 },
        { type: "image", src: DioneMenezes8 },
        { type: "image", src: DioneMenezes9 },
      ],
      icons: [ReactNativeIcon, NodeJsIcon],
      iconsBlack: [ReactNativeIconBlack, NodeJsIconBlack],
      l1: "React JS",
      l2: "Node JS",
      link: "https://dionemenezes-mouradubeux.com.br",
      buttonText: "Ir para o site",
      description:
        "Este projeto é um site profissional desenvolvido para Dione Menezes, especialista de vendas. A página foi criada para fortalecer sua presença digital, apresentar sua trajetória e destacar seu trabalho de forma clara, elegante e confiável.\n\nCom uma navegação responsiva e uma comunicação objetiva, o site facilita o contato com clientes e valoriza a experiência profissional da especialista.",
    },
    {
      id: 1,
      title: "PsyRPG",
      text: "Aplicativo de Gamificação de Rotinas com Integração ao Google Calendar",
      images: [PsyRpgCard],
      otherimages: [
        { type: "video", src: PsyVideo },
        { type: "image", src: PsyRpg1 },
        { type: "image", src: PsyRpg2 },
        { type: "image", src: PsyRpg3 },
      ],
      repoLink: "https://github.com/bycmlla/PsyRPG.git",
      icons: [ReactNativeIcon, NodeJsIcon, GoogleIcon, MySQLIcon],
      iconsBlack: [
        ReactNativeIconBlack,
        NodeJsIconBlack,
        GoogleIconBlack,
        MySQLIconBlack,
      ],
      l1: "React Native",
      l2: "Node JS",
      l3: "MySQL",
      description:
        "O PsyRPG é um aplicativo de gamificação de rotinas que transforma tarefas do dia a dia em uma experiência envolvente.\n\nNele, o usuário cria missões personalizadas — como estudar, fazer exercícios ou meditar — e, ao completá-las, ganha moedas virtuais que podem ser usadas dentro do app para comprar itens simbólicos ou recompensas.\n\nAlém do sistema de recompensas, o PsyRPG se conecta diretamente ao Google Calendar: toda missão criada no app é automaticamente adicionada à agenda do usuário, promovendo organização e engajamento contínuo.\n\nO objetivo é aumentar a motivação e o comprometimento com as rotinas diárias, tornando o progresso pessoal mais divertido, visual e recompensador.",
    },
    {
      id: 2,
      title: "JTD Transportes - WebSite",
      text: "Website corporativo desenvolvido para a JTD Transportes, com foco em apresentação institucional, serviços e contato com clientes.",
      images: [JtdtransportesCard],
      otherimages: [
        { type: "image", src: Jtdtransportes1 },
        { type: "image", src: Jtdtransportes4 },
        { type: "image", src: Jtdtransportes3 },
        { type: "image", src: Jtdtransportes2 },
      ],
      link: "https://www.jtdtransportes.com.br",
      icons: [ReactNativeIcon, NodeJsIcon],
      iconsBlack: [ReactNativeIconBlack, NodeJsIconBlack],
      l1: "ReactJS",
      l2: "NodeJS",
      description:
        "Este projeto consiste no desenvolvimento do website institucional da JTD Transportes, criado para fortalecer a presença digital da empresa e facilitar a comunicação com clientes e parceiros.\n\nO site apresenta informações sobre a empresa, serviços oferecidos, áreas de atuação e canais de contato, com layout moderno, responsivo e otimizado para diferentes dispositivos. A estrutura foi pensada para oferecer navegação simples, rápida e objetiva, destacando credibilidade e profissionalismo da marca.",
      buttonText: "Ir para o site",
    },
    {
      id: 3,
      title: "Weather Up",
      text: "Aplicativo de Previsão do Tempo",
      images: [WeatherUpCard],
      otherimages: [
        { type: "image", src: WeatherUp1 },
        { type: "image", src: WeatherUp2 },
        { type: "image", src: WeatherUp3 },
        { type: "image", src: WeatherUp4 },
        { type: "image", src: WeatherUp5 },
      ],
      icons: [ReactNativeIcon, NodeJsIcon],
      iconsBlack: [ReactNativeIconBlack, NodeJsIconBlack],
      l1: "React Native",
      l2: "Node JS",
      l3: "MySQL",
      description:
        "O Weather Up é um aplicativo de previsão do tempo que fornece informações meteorológicas precisas e em tempo real para qualquer local do mundo.\n\nO usuário pode buscar manualmente uma cidade ou utilizar sua localização atual para visualizar as condições climáticas do momento.\n\nA aplicação consome dados de uma API de previsão do tempo, exibindo informações detalhadas como:\n\n▸ Temperatura atual, máxima e mínima\n\n▸ Sensação térmica\n\n▸ Condições climáticas (sol, chuva, nublado etc.)\n\n▸ Velocidade e direção do vento\n\n▸ Unidades configuráveis em Celsius ou Fahrenheit",
    },
    {
      id: 4,
      title: "RoomRover",
      text: "Sistema de Reserva de Hotéis",
      images: [RoomRoverCard],
      otherimages: [
        { type: "image", src: RoomRover1 },
        { type: "image", src: RoomRover2 },
        { type: "image", src: RoomRover3 },
        { type: "image", src: RoomRover4 },
      ],
      repoLink: "https://github.com/bycmlla/RoomRover.git",
      icons: [AngularIcon, NodeJsIcon, MySQLIcon],
      iconsBlack: [AngularIconBlack, NodeJsIconBlack, MySQLIconBlack],
      l1: "Angular",
      l2: "Node JS",
      l3: "MySQL",
      description:
        "O RoomRover é um site de reserva de hotéis desenvolvido para tornar o processo de busca, seleção e locação de acomodações simples e intuitivo.\n\nA plataforma permite que o usuário visualize, em tempo real, os hotéis disponíveis para hospedagem, com informações detalhadas sobre preços, localização, avaliações, comodidades e fotos.\n\nO visitante pode criar uma conta ou realizar login para gerenciar suas reservas, salvar preferências de viagem e acompanhar o histórico de estadias.\n\n Durante o processo de reserva, o usuário escolhe as datas de entrada e saída, quantidade de hóspedes, tipo de quarto e opções adicionais, recebendo sempre o valor atualizado e a disponibilidade instantânea.",
    },
    {
      id: 5,
      title: "Dashboards Power BI",
      text: "Aqui apresento os meus dashboards em Power BI.",
      images: [Dashboard1],
      otherimages: [{ type: "image", src: Dashboard1 }],
      link: "#/dashboards",
      icons: [PowerBiIcon, HTMLIcon],
      iconsBlack: [BlackPBI],
      l1: "DAX",
      l2: "HTML",
      l3: "CSS",
      description:
        "O Power BI é uma ferramenta de análise de dados e visualização da Microsoft que oferece uma interface intuitiva para transformar dados em informações acionáveis.",
      buttonText: "Ver dashboards",
    },
    {
      id: 6,
      title: "Visão Estereoscópica para Robôs Assistivos",
      text: "Uma Interface de Visão Estereoscópica Binocular para Reconhecimento de Humanos e Objetos para Robôs Socialmente Assistivos",
      images: [DepthImageCard],
      otherimages: [{ type: "image", src: RoboRosa }],
      link: "#/rosa",
      repoLink: "https://github.com/bycmlla/StereocopicVision.git",
      icons: [PythonIcon, OpenCVIcon, NvidiaIcon],
      iconsBlack: [BlackPython, OpenCVIconBlack],
      l1: "Python",
      l2: "OpenCV",
      description:
        "O projeto tem como objetivo o desenvolvimento de uma interface de visão estereoscópica binocular capaz de reconhecer e localizar pessoas e objetos em um ambiente real.\n\nA partir do uso de duas câmeras sincronizadas, o sistema realiza o processamento de imagens em estéreo para extrair informações de profundidade e distância, permitindo a estimativa precisa da posição dos elementos presentes no cenário.",
      buttonText: "Ver detalhamento",
    },
  ];
  const iconSizes = {
    [GoogleIcon]: { width: 20, height: 20 },
    [GoogleIconBlack]: { width: 18, height: 18 },
    [NodeJsIcon]: { width: 28, height: 28 },
    [AngularIconBlack]: { width: 24, height: 24 },
    [NodeJsIconBlack]: { width: 24, height: 24 },
    [MySQLIcon]: { width: 40, height: 40 },
    [JavaIcon]: { width: 35, height: 35 },
  };
  return (
    <div
      className={`projects-container ${
        isDarkMode ? "dark-mode-projects" : ""
      } ${colorClass}`}
    >
      <NavBar />
      <div className="text-projects">
        <h2>Projetos</h2>
      </div>

      <div className="projects-content">
        {projects.map(({ id, title, text, images, icons, iconsBlack }) => (
          <div
            key={id}
            className="card-projects"
            onClick={() =>
              setSelectedProject(projects.find((p) => p.id === id))
            }
          >
            <img src={images[0]} alt={title} />
            {!isMobile ? (
              <div className="card-overlay">
                <h5>{title}</h5>
                <p>{text}</p>
                <div className="tech-icons">
                  {icons.map((icon, i) => {
                    const size = iconSizes[icon] || { width: 24, height: 24 };
                    return (
                      <img
                        key={i}
                        src={icon}
                        alt="icon"
                        style={{ ...size, margin: "0 5px" }}
                        className="icons-projects"
                      />
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="card-caption">
                <h5>{title}</h5>
                <div className="tech-icons">
                  {(isMobile ? iconsBlack : icons).map((icon, i) => {
                    const size = iconSizes[icon] || {
                      width: isMobile ? 20 : 24,
                      height: isMobile ? 20 : 24,
                    };
                    return (
                      <img
                        key={i}
                        src={icon}
                        alt="icon"
                        style={{
                          ...size,
                          margin: isMobile ? "5px 6px" : "0 5px",
                        }}
                        className="icons-projects"
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="overlay-backdrop"
          onClick={() => setSelectedProject(null)}
        >
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <div className="overlay-body">
              <div className="overlay-left">
                {selectedProject.otherimages?.length > 0 &&
                selectedProject.otherimages[0].type === "video" ? (
                  <video
                    src={selectedProject.otherimages[0].src}
                    controls
                    muted
                    loop
                    className="overlay-video"
                  />
                ) : (
                  selectedProject.otherimages?.length > 0 && (
                    <img
                      src={selectedProject.otherimages[0].src}
                      alt={selectedProject.title}
                      className="overlay-image"
                    />
                  )
                )}

                <div className="overlay-gallery">
                  {selectedProject.otherimages
                    ?.slice(1)
                    .map(
                      (item, index) =>
                        item.type === "image" && (
                          <img
                            key={index}
                            src={item.src}
                            alt={`gallery-${index}`}
                            className="gallery-img"
                            onClick={() => setSelectedImage(item.src)}
                          />
                        ),
                    )}
                </div>
              </div>

              <div className="overlay-right">
                <div className="overlay-header">
                  <h3>{selectedProject.title}</h3>
                  <div className="language-buttons">
                    {selectedProject.l1 && <span>{selectedProject.l1}</span>}
                    {selectedProject.l2 && <span>{selectedProject.l2}</span>}
                    {selectedProject.l3 && <span>{selectedProject.l3}</span>}
                  </div>
                </div>

                <p className="overlay-description">
                  {selectedProject.description}
                </p>
                <div className="overlay-buttons">
                  {}
                  {selectedProject.repoLink && (
                    <button
                      className="repo-btn"
                      onClick={() =>
                        window.open(selectedProject.repoLink, "_blank")
                      }
                    >
                      Repositório
                    </button>
                  )}

                  {}
                  {selectedProject.buttonText && (
                    <button
                      className="detail-btn"
                      onClick={() => {
                        if (selectedProject.link) {
                          window.open(selectedProject.link, "_blank");
                        }
                      }}
                    >
                      {selectedProject.buttonText}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedImage && (
        <div className="image-overlay" onClick={() => setSelectedImage(null)}>
          <div
            className="image-overlay-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="image-close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img src={selectedImage} alt="Ampliada" className="image-full" />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Projects;
