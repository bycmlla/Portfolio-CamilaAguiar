import React, { useState, useEffect, useRef } from "react";
import "./Automation.css";
import Python from "../../../../../assets/images/python/python.png";
import PythonBlack from "../../../../../assets/images/python/python black.png";
import Diretorio from "../../../../../assets/images/python/diretorio.png";
import CMD from "../../../../../assets/images/python/cmd.png";
import NavBar from "../../../../../components/NavBar/NavBar";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
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
      <div>
        <Link to={"/python"} className="back-icon-auth">
          <FaArrowLeft />
        </Link>
      </div>
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
          style={{ textDecoration: "none", fontWeight: "bold", color: "blue" }}
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
        <img src={CMD} alt="" className="img-rosa" />
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
        <h4>
          <code>Hora de codar...</code>
        </h4>
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
        <p>
          Estas importações são necessárias para configurar e usar o Selenium
          WebDriver para interagir com o WhatsApp Web.
        </p>
        <div className="code-container">
          <button className="copy-button" onClick={copyToClipboard}>
            Copy
          </button>
          <pre className="code-block" ref={codeRef}>
            <code>{`chrome_options = Options()
chrome_options.add_argument("user-data-dir=C:/Caminho_para_seu_usuário/Users/")
chrome_options.add_argument("profile-directory=Camila de Carvalho")
service = Service("C:/Caminho_para_o_webdriver/chromedriver-win64/chromedriver.exe")driver = webdriver.Chrome(service=service, options=chrome_options)
`}</code>
          </pre>
          {showNotification && (
            <div className="notification">
              Código copiado para a área de transferência!
            </div>
          )}
        </div>
        <p>
          Estas linhas configuram o WebDriver para usar o perfil do usuário
          existente do Chrome, onde as informações de login do WhatsApp Web já
          estão armazenadas, evitando assim a necessidade de login toda vez.
        </p>
        <div className="code-container">
          <button className="copy-button" onClick={copyToClipboard}>
            Copy
          </button>
          <pre className="code-block" ref={codeRef}>
            <code>{`try:
    logging.info("Opening WhatsApp Web")
    driver.get("https://web.whatsapp.com/")
    time.sleep(15)
`}</code>
          </pre>
          {showNotification && (
            <div className="notification">
              Código copiado para a área de transferência!
            </div>
          )}
        </div>
        <ul>
          <li>
            <code>driver.get(...)</code>: Abre o WhatsApp Web.
          </li>
          <li>
            <code>time.sleep(15)</code>: Aguarda 15 segundos para que a página
            carregue.
          </li>
        </ul>
        <div className="code-container">
          <button className="copy-button" onClick={copyToClipboard}>
            Copy
          </button>
          <pre className="code-block" ref={codeRef}>
            <code>{`logging.info("Searching for the desired chat")
chat_name = "Nome Contato"
search_box = WebDriverWait(driver, 30).until(
    EC.presence_of_element_located((By.XPATH, '//div[@role="textbox" and @data-tab="3"]'))
)
search_box.send_keys(chat_name)
search_box.send_keys(Keys.RETURN)
time.sleep(2)

`}</code>
          </pre>
          {showNotification && (
            <div className="notification">
              Código copiado para a área de transferência!
            </div>
          )}
        </div>
        <p>
          Digita o nome do chat desejado na caixa de pesquisa. Pressiona a tecla
          Enter para selecionar o chat.
        </p>
        <div className="code-container">
          <button className="copy-button" onClick={copyToClipboard}>
            Copy
          </button>
          <pre className="code-block" ref={codeRef}>
            <code>{`logging.info("Attaching the image")
attach_button = WebDriverWait(driver, 60).until(
    EC.element_to_be_clickable((By.XPATH, '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[1]/div[2]/div/div/div/span'))
)
attach_button.click()
time.sleep(2)

`}</code>
          </pre>
          {showNotification && (
            <div className="notification">
              Código copiado para a área de transferência!
            </div>
          )}
        </div>
        <p>
          Clica no botão de anexo para abrir a opção de envio de arquivos.
          Insere o caminho da imagem no campo de input de arquivo para anexar a
          imagem ao chat.
        </p>
        <div className="code-container">
          <button className="copy-button" onClick={copyToClipboard}>
            Copy
          </button>
          <pre className="code-block" ref={codeRef}>
            <code>{`logging.info("Sending the image")
send_button = WebDriverWait(driver, 30).until(
    EC.element_to_be_clickable((By.XPATH, '//span[@data-icon="send"]'))
)
send_button.click()
logging.info("Image sent successfully!")
time.sleep(5)
driver.quit()
`}</code>
          </pre>
          {showNotification && (
            <div className="notification">
              Código copiado para a área de transferência!
            </div>
          )}
        </div>
        <p>
          Clica no botão de envio para mandar a imagem no chat. Fecha o
          WebDriver após o envio da imagem.
        </p>
        <div className="code-container">
          <button className="copy-button" onClick={copyToClipboard}>
            Copy
          </button>
          <pre className="code-block" ref={codeRef}>
            <code>{`except Exception as e:
    logging.error(f"An error has occurred: {e}")
    driver.quit()
`}</code>
          </pre>
          {showNotification && (
            <div className="notification">
              Código copiado para a área de transferência!
            </div>
          )}
        </div>
        <p>
          Captura qualquer exceção que ocorra durante o processo e registra uma
          mensagem de erro no log.
        </p>
        <p>Esta função, quando chamada, realiza os seguintes passos:</p>
        <ol>
          <li>Configura e inicializa o WebDriver.</li>
          <li>Abre o WhatsApp Web e aguarda o carregamento completo.</li>
          <li>Pesquisa pelo chat desejado.</li>
          <li>Anexa a imagem ao chat.</li>
          <li>Envia a imagem.</li>
          <li>Fecha o WebDriver.</li>
        </ol>
      </div>
    </div>
  );
};

export default Automation;
