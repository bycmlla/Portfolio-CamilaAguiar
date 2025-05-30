import React from "react";
import "./AboutMe.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { useColor } from "../../contexts/ColorContext";
import { useTheme } from "../../contexts/ThemeContext";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaWhatsapp, FaGithubSquare } from "react-icons/fa";
import ScrollReveal from "scrollreveal";
import MiniButterflyPurple from "../../assets/images/miniButterflyPurple.png";
import MiniButterflyBlue from "../../assets/images/miniButterflyBkue.png";
import MiniButterflyPink from "../../assets/images/miniButterflyPink.png";
import MesaMulheresPurple from "../../assets/images/mesaMulheresNaCienciaRoxo.png";
import MesaMulheresBlue from "../../assets/images/mesaMulheresNaCienciaAzul.png";
import MesaMulheresPink from "../../assets/images/mesaMulheresNaCienciaRosa.png";
import CongressoPurple from "../../assets/images/congresoBJLRoxo.png";
import CongressoBlue from "../../assets/images/congresoBJLAzul.png";
import CongressoPink from "../../assets/images/congresoBJLRosa.png";
import NomofobiaPurple from "../../assets/images/nomofobiaIfBaianoRoxo.png";
import NomofobiaBlue from "../../assets/images/nomofobiaIfBaianoAzul.png";
import NomofobiaPink from "../../assets/images/nomofobiaIfBaianoRosa.png";
import MostraCientificaPurple from "../../assets/images/mostraCientíficaRoxo.png";
import MostraCientificaBlue from "../../assets/images/mostraCientíficaAzul.png";
import MostraCientificaRosa from "../../assets/images/mostraCientíficaRosa.png";
import CVFile from "../../assets/files/curriculo-camila-carvalho.pdf";

const butterflyMap = {
  "#9747FF": MiniButterflyPurple,
  "#2291A4": MiniButterflyBlue,
  "#F10091": MiniButterflyPink,
};

const imagesProjects = {
  "#9747FF": [
    {
      src: MesaMulheresPurple,
      text: "Mesa Mulheres na Ciência",
      description:
        "FEMMIC - 2023 - Palestrante contando minha trajetória na área da pesquisa.",
    },
    {
      src: CongressoPurple,
      text: "Congresso de Ensino e Pesquisa",
      description:
        "IF Baiano Campus Bom Jesus da Lapa | 2023 | Apresentação de dois projetos de pesquisa realizados no ano de 2022 a 2023, e perspectivas de projetos futuros.",
    },
    {
      src: NomofobiaPurple,
      text: "Nomofobia - O Vício no uso de smartphones entre os discentes do IF Baiano",
      description:
        "FEMMIC | 2024 - Apresentando a pesquisa como palestrante representando o curso de ADS do Instituto Federal Baiano.",
    },
    {
      src: MostraCientificaPurple,
      text: "Mostra Ciêntífica de Tecnologia e Informação",
      description:
        "2024 - Apresentando o projeto Uma Interface de Visão Estereoscópica Binocular para Reconhecimento de Humanos e Objetos para Robôs Socialmente Assistivos",
    },
  ],
  "#2291A4": [
    {
      src: MesaMulheresBlue,
      text: "Mesa Mulheres na Ciência",
      description:
        "FEMMIC - 2023 -Palestrante contando minha trajetória na área da pesquisa.",
    },
    {
      src: CongressoBlue,
      text: "Congresso de Ensino e Pesquisa",
      description:
        "IF Baiano Campus Bom Jesus da Lapa | 2023 | Apresentação de dois projetos de pesquisa realizados no ano de 2022 a 2023, e perspectivas de projetos futuros.",
    },
    {
      src: NomofobiaBlue,
      text: "Nomofobia - O Vício no uso de smartphones entre os discentes do IF Baian",
      description:
        "FEMMIC | 2024 - Apresentando a pesquisa como palestrante representando o curso de ADS do Instituto Federal Baiano.",
    },
    {
      src: MostraCientificaBlue,
      text: "Mostra Científica - Azul",
      description:
        "2024 - Apresentando o projeto Uma Interface de Visão Estereoscópica Binocular para Reconhecimento de Humanos e Objetos para Robôs Socialmente Assistivos",
    },
  ],
  "#F10091": [
    {
      src: MesaMulheresPink,
      text: "Mesa Mulheres na Ciência",
      description:
        "FEMMIC - 2023 -Palestrante contando minha trajetória na área da pesquisa.",
    },
    {
      src: CongressoPink,
      text: "Congresso de Ensino e Pesquisa",
      description:
        "IF Baiano Campus Bom Jesus da Lapa | 2023 | Apresentação de dois projetos de pesquisa realizados no ano de 2022 a 2023, e perspectivas de projetos futuros.",
    },
    {
      src: NomofobiaPink,
      text: "Nomofobia - O Vício no uso de smartphones entre os discentes do IF Baian",
      description:
        "FEMMIC | 2024 - Apresentando a pesquisa como palestrante representando o curso de ADS do Instituto Federal Baiano.",
    },
    {
      src: MostraCientificaRosa,
      text: "Mostra Ciêntífica de Tecnologia e Informação",
      description:
        "2024 - Apresentando o projeto Uma Interface de Visão Estereoscópica Binocular para Reconhecimento de Humanos e Objetos para Robôs Socialmente Assistivos",
    },
  ],
};

const AboutMe = () => {
  const { selectedColor } = useColor();
  const { isDarkMode } = useTheme();

  const getBackgroundImage = () => {
    return butterflyMap[selectedColor] || MiniButterflyPurple;
  };

  ScrollReveal().reveal(".reveal-right", {
    origin: "right",
    distance: "20px",
    duration: 2000,
    delay: 200,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    reset: true,
  });

  return (
    <div
      className={`about-me-container ${
        isDarkMode ? "dark-mode-about" : ""
      } color-${selectedColor.replace("#", "")}`}
    >
      <NavBar isDarkMode={isDarkMode} />

      <section className="about-me-section">
        <div className="icons-container-custom">
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

        <div className="about-me-content">
          <div className="title-image-container">
            <h1>About me.</h1>
            <img
              src={getBackgroundImage()}
              alt="Butterfly"
              className="background-image-about"
            />
          </div>
          <span className="line-section-about-me"></span>

          <section className="about-me-text">
            <h4>Onde começou</h4>
            <p>
              Ingressei em Análise e Desenvolvimento de Sistemas aos 18 anos no
              Instituto Federal Baiano, onde comecei minha trajetória na área de
              Tecnologia da Informação.
            </p>
            <h4>Minha Atuação</h4>
            <p>
              Atualmente, sou Analista de Dados e Desenvolvedora Full-Stack,
              finalizando minha graduação em Análise e Desenvolvimento de
              Sistemas. Trabalho tanto com desenvolvimento de software quanto
              com análise de dados.
            </p>
            <h4>Meu Estilo de Trabalho</h4>
            <p>
              Acredito que o sucesso de qualquer projeto depende de uma boa
              comunicação e colaboração entre a equipe. Trabalho de forma
              organizada, sempre buscando as melhores soluções e compartilhando
              conhecimento para que todos cresçam juntos.
            </p>
            <h4>Além da Tecnologia</h4>
            <p>
              Sou apaixonada por livros, música e gatos, e, quando não estou
              programando ou analisando dados, gosto de desenhar. A criatividade
              sempre esteve presente na minha vida.
            </p>
            <h4>Confira Mais</h4>
            <p>
              Se quiser saber mais sobre minhas stacks e experiências, continue
              explorando a página. Ah, e se quiser dar uma olhada no meu
              currículo, ele está disponível logo abaixo!
            </p>

            <div>
              <a
                href={CVFile}
                download="CV - Camila Aguiar.pdf"
                className="CV_button"
              >
                Baixar meu CV
              </a>
            </div>
          </section>
          <span className="line-section-about-me"></span>

          <section className="images-camila-container">
            {imagesProjects[selectedColor]
              ?.reduce((rows, item, index, array) => {
                if (index % 2 === 0) {
                  rows.push(array.slice(index, index + 2));
                }
                return rows;
              }, [])
              .map((row, rowIndex) => (
                <div key={rowIndex} className="image-row">
                  {row.map((item, index) => (
                    <div key={index} className="image-item">
                      <img
                        className="img-item"
                        src={item.src}
                        alt={item.text}
                      />
                      <p className="image-text-info">{item.text}</p>
                      <p className="image-text-description">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutMe;
