import React, { useState, useEffect, useRef } from "react";
import "./Automation.css";
import Python from "../../../../../assets/images/python/python.png";
import PythonBlack from "../../../../../assets/images/python/python black.png";
import Diretorio from "../../../../../assets/images/python/diretorio.png";
import CMD from "../../../../../assets/images/python/cmd.png";
import NavBar from "../../../../../components/NavBar/NavBar";

const Automation = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    setIsDarkMode(localStorage.getItem("darkMode") === "true");
  }, []);

  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    localStorage.setItem("darkMode", newDarkModeState.toString());
  };

  const copyToClipboard = () => {
    if (codeRef.current) {
      const code = codeRef.current.innerText;
      navigator.clipboard.writeText(code).then(() => {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
      });
    }
  };
  const codeRef = useRef(null);
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div
      className={`automation-container ${isDarkMode ? "dark-mode-sql" : ""}`}
    >
      <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <img
        className="image-opencv"
        src={isDarkMode ? Python : PythonBlack}
        alt="Logo da linguagem Python"
        width="100%"
      />
      <div className="rosa-page">
        <p>
          <strong>IMPORTANTE</strong>: Esse procedimento que será ensinado tem
          objetivo educacional. Então é muito importante estar ciente disso,
          pois o whatsapp não gosta de automações e pode dar problema. Pode ter
          seu número bloqueado dependendo da forma que for utilizado.  <br />{" "}
          <br />
          <strong>Outro ponto</strong>: neste código, ele realiza o envio de
          imagens a partir de um determinado diretório, mas também é possível
          realizar o envio de mensagens de texto mudando alguns parâmetros.
        </p>

        <p>
          Para isso estaremos utilizando a biblioteca Selenium Python que faz a
          interação entre o navegador e o Python, e o Webdriver do Google
          Chrome. O Webdriver é a aplicação que controla os navegadores de forma
          automatizada. Inclusive utiliza aplicações nativas para diminuir
          problemas e interferências com as linguagens e tecnologias usadas nos
          sites.
        </p>
        <h5>Primeiro passo:</h5>
        <p>
          Primeiro, é necessário de uma IDE para compilar o seu código. Estou
          utilizando o Pycharm, mas é de plena escolha do desenvolvedor.
        </p>
        <h5>Segundo passo:</h5>
        <p>
          Depois, instale o Chrome WebDriver, garantindo que ele esteja na mesma
          versão do seu navegador. A versão que estou utilizando é a
          127.0.6533.74.{" "}
        </p>
        <p>
          No link abaixo, você encontrará várias versões disponíveis do
          WebDriver. Baixe o arquivo correspondente à versão do seu navegador,
          extraia o executável e coloque-o no mesmo diretório onde o Python está
          instalado em seu computador.
        </p>
        <a
          href="https://googlechromelabs.github.io/chrome-for-testing/"
          style={{ textDecoration: "none", fontWeight: "bold", color: "black" }}
        >
          Chrome for Testing availability
        </a>
        <img
          src={Diretorio}
          alt="Exemplo de diretorio final do arquivo"
          className="img-rosa"
          style={{ marginTop: "10px" }}
        />
        <p>
          Clique duas vezes no executável para instalar. Após ver a mensagem de
          confirmação, siga para a próxima etapa.
        </p>
        <h5>Terceiro passo:</h5>
        <p>Instale o Selenium utilizando o comando:</p>
        <div className="code-container">
          <button className="copy-button" onClick={copyToClipboard}>
            Copy
          </button>
          <pre className="code-block" ref={codeRef}>
            <code>{`pip install selenium`}</code>
          </pre>
          {showNotification && (
            <div className="notification">
              Código copiado para a área de transferência!
            </div>
          )}
        </div>
        <h5>Hora de codar...</h5>
        <p>
          Os imports que você precisará estarão listados abaixo. Irei pular uma
          explicação detalhada de cada um pois isso ficará muito extenso.
        </p>
        <div className="code-container">
          <button className="copy-button" onClick={copyToClipboard}>
            Copy
          </button>
          <pre className="code-block" ref={codeRef}>
            <code>{`from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import logging
`}</code>
          </pre>
          {showNotification && (
            <div className="notification">
              Código copiado para a área de transferência!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Automation;
