import React from "react";
import "./Plans.css";
import MiniButterflyPurple from "../../assets/images/miniButterflyPurple.png";
import MiniButterflyBlue from "../../assets/images/miniButterflyBkue.png";
import MiniButterflyPink from "../../assets/images/miniButterflyPink.png";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { useColor } from "../../contexts/ColorContext";
import { useTheme } from "../../contexts/ThemeContext";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaWhatsapp, FaGithubSquare } from "react-icons/fa";
import Star from "../../assets/icons/star.png";

const butterflyMap = {
  "#9747FF": MiniButterflyPurple,
  "#2291A4": MiniButterflyBlue,
  "#F10091": MiniButterflyPink,
};

const plansData = [
  {
    title: "STARTER",
    className: "starter",
    price: "R$ 950,00",
    whatsappLink:
      "https://wa.me/5533998759437?text=Olá! Tenho interesse no plano STARTER.",
    features: [
      { text: "Landing Page (1 página)", included: true },
      { text: "Design responsivo (mobile + desktop)", included: true },
      { text: "Integração com WhatsApp", included: true },
      { text: "Links para redes sociais", included: true },
      { text: "SEO básico", included: true },
      { text: "Deploy e publicação do site (frontend)", included: true },
      { text: "Envio automático de e-mail", included: false },
      { text: "Banco de dados", included: false },
      { text: "Área administrativa", included: false },
      { text: "Integrações externas", included: false },
    ],
  },
  {
    title: "STANDARD",
    className: "standard featured",
    badge: Star,
    price: "R$ 2.100",
    whatsappLink:
      "https://wa.me/5533998759437?text=Olá! Tenho interesse no plano STANDARD.",
    features: [
      { text: "Tudo do plano anterior", included: true },
      { text: "Até 5 páginas", included: true },
      { text: "Formulário com envio de e-mail", included: true },
      { text: "Integração com Google Maps", included: true },
      { text: "Integração com API simples", included: true },
      { text: "Otimização de performance", included: true },
      { text: "Configuração de domínio", included: true },
      { text: "Estrutura preparada para expansão", included: true },
      { text: "Área administrativa", included: false },
      { text: "Banco de dados", included: false },
    ],
  },
  {
    title: "PREMIUM",
    className: "premium",
    price: "A partir de R$ 3.200",
    whatsappLink:
      "https://wa.me/5533998759437?text=Olá! Tenho interesse no plano PREMIUM.",
    features: [
      { text: "Tudo dos planos anteriores", included: true },
      { text: "Páginas ilimitadas", included: true },
      { text: "Banco de dados", included: true },
      { text: "Área administrativa", included: true },
      { text: "Sistema de login", included: true },
      { text: "Otimização de performance", included: true },
      { text: "Painel de gerenciamento", included: true },
      { text: "Integração com APIs externas", included: true },
      { text: "Automações", included: true },
      { text: "Funcionalidades personalizadas", included: true },
    ],
  },
];

const Plans = () => {
  const { selectedColor } = useColor();
  const { isDarkMode } = useTheme();

  const getBackgroundImage = () => {
    return butterflyMap[selectedColor] || MiniButterflyPurple;
  };

  return (
    <div
      className={`plans-container ${
        isDarkMode ? "dark-mode-plans" : ""
      } color-${selectedColor.replace("#", "")}`}
    >
      <NavBar isDarkMode={isDarkMode} />

      <section className="plans-section">
        <div className="plans-content">
          <div className="plans-header-row">
            <div className="icons-container-custom-plans">
              <ul>
                <li>
                  <a
                    href="https://github.com/bycmlla"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                  <a
                    href="https://wa.me/5533998759437"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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

            <div className="title-image-container-plan">
              <div className="plans-title-area">
                <h1>Planos de Desenvolvimento.</h1>
                <p>Escolha o Plano Ideal para Seu Site</p>
              </div>

              <img
                src={getBackgroundImage()}
                alt="Butterfly"
                className="background-image-plans"
              />
            </div>
          </div>
          <div className="plans-pricing-area">
            <div className="plans-cards">
              {plansData.map((plan, index) => (
                <div key={index} className={`plan-card ${plan.className}`}>
                  <div className="plan-card-top">
                    {plan.badge && (
                      <img
                        src={plan.badge}
                        alt="Destaque"
                        className="plan-badge"
                      />
                    )}
                    <h2>{plan.title}</h2>
                  </div>

                  <p className="plan-price">{plan.price}</p>

                  <ul className="plan-features">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className={feature.included ? "included" : "excluded"}
                      >
                        <span className="feature-icon">
                          {feature.included ? "✔" : "✖"}
                        </span>
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`plan-button plan-button-link ${plan.className}`}
                  >
                    Solicitar orçamento
                  </a>
                </div>
              ))}
            </div>

            <div className="plans-info-box">
              <div className="info-item">
                <h3>🌐 Domínio</h3>
                <p>O domínio é o endereço do site (ex: empresa.com.br).</p>
                <p>Deve ser adquirido pelo cliente.</p>
                <p>Valor médio: R$40 — R$70 por ano</p>
              </div>

              <div className="info-item">
                <h3>⚙️ Hospedagem Backend</h3>
                <p>
                  Projetos com funcionalidades dinâmicas (ex: envio de e-mails,
                  banco de dados ou sistemas) necessitam de hospedagem backend.
                </p>
                <p>
                  Essa hospedagem é contratada diretamente pelo cliente, em
                  provedores de sua preferência. Caso necessário, posso auxiliar
                  na escolha e configuração.
                </p>
                <p>Valor médio: R$20 a R$80 / mês</p>
              </div>

              <div className="info-item">
                <h3>🗄️ Banco de Dados</h3>
                <p>
                  Necessário apenas para sistemas que armazenam informações (ex:
                  usuários, pedidos, formulários, etc).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Plans;
