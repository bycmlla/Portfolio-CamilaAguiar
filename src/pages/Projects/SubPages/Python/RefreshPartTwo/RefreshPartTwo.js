import React, { useState, useRef } from "react";
import "./RefreshPartTwo.css";

import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import NavBar from "../../../../../components/NavBar/NavBar";
import Footer from "../../../../../components/Footer/Footer";

import PBIHeaderBlack from "../../../../../assets/images/python/PBI Black 2.png";
import PBIHeaderWhite from "../../../../../assets/images/python/PBI White 2.png";
import Etp1 from "../../../../../assets/images/python/etapa 2.1.png";
import Etp2 from "../../../../../assets/images/python/etapa 2.2.png";
import Etp3 from "../../../../../assets/images/python/etapa 2.3.png";

export const RefreshPartTwo = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const codeRef = useRef(null);
  const [showNotification, setShowNotification] = useState(false);

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

  return (
    <div
      className={`refresh-container ${
        isDarkMode ? "dark-mode-refreshparttwo" : ""
      }`}
    >
      <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div>
        <Link to={"/blog"} className="back-icon-refresh">
          <FaArrowLeft />
        </Link>
      </div>
      <img
        src={isDarkMode ? PBIHeaderWhite : PBIHeaderBlack}
        alt="Logo do Power BI"
        width="100%"
      />
      <div className="refresh-page-2">
        <h2>Atualizando dataset via API do Power BI</h2>
        <p>
          Para que os relatórios e dashboards do Power BI reflitam sempre os
          dados mais recentes, é necessário manter os datasets atualizados
          frequentemente. Em muitos casos, os dados podem ser provenientes de
          fontes que mudam diariamente, ou até mesmo em tempo real, como
          sistemas de ERP, CRM, bancos de dados e planilhas. No entanto,
          realizar essas atualizações de forma manual ou depender de
          agendamentos fixos pode não ser suficiente em cenários de alta
          frequência de mudanças, além de ser uma tarefa repetitiva e demorada.
          <br /> <br />
          Para resolver esse desafio, uma solução eficiente é automatizar a
          atualização dos datasets do Power BI utilizando Python e a API REST do
          Power BI. Com o Python, podemos criar scripts que se comunicam
          diretamente com a API, iniciando atualizações programáticas de
          datasets de forma precisa e no momento exato em que elas são
          necessárias.
          <br /> <br />A API REST do Power BI fornece endpoints que permitem
          realizar operações como listar os datasets, iniciar atualizações, e
          monitorar o status das atualizações em tempo real. Usando Python, é
          possível desenvolver um fluxo automatizado que, além de atualizar os
          dados conforme necessário, também pode ser integrado com outras fontes
          de dados e sistemas para garantir que todas as atualizações estejam
          sempre sincronizadas.
        </p>
        <h3>Script de Atualização</h3>
        <p>
          O script abaixo faz uma autenticação no Azure Active Directory (Azure
          AD) para obter um token de acesso e usa esse token para chamar a API
          do Power BI para atualizar um conjunto de dados. Vou otimizar o código
          e explicar cada seção detalhadamente.
        </p>
        <ol>
          <li>
            Autenticação e Obtenção de Token: A função{" "}
            <code>request_access_token()</code> usa a biblioteca msal para obter
            um token de acesso do Azure AD. Este token é necessário para
            autorizar a chamada à API do Power BI.
          </li>
          <li>
            Solicitação de Atualização de Dataset: Após obter o token de acesso,
            ele é usado na função <code>requests.post</code> requests.post para
            fazer uma requisição HTTP para o endpoint de atualização do Power
            BI. Se o retorno for bem-sucedido (código 202), o dataset foi
            atualizado.
          </li>
        </ol>
        <div className="code-container">
          <button className="copy-button" onClick={copyToClipboard}>
            Copy
          </button>
          <pre className="code-block" ref={codeRef}>
            <code>
              {`
import requests
import msal
from cred import username, password

def request_access_token():
    app_id = '<app id>'
    tenant_id = '<tenant id>'

    authority_url = f'https://login.microsoftonline.com/{tenant_id}'
    scopes = ['https://analysis.windows.net/powerbi/api/.default']

    # Bloco 01
    client = msal.PublicClientApplication(app_id, authority=authority_url)
    try:
        # Obtém o token de acesso usando nome de usuário e senha
        token_response = client.acquire_token_by_username_password(username=username, password=password, scopes=scopes)
        if 'access_token' not in token_response:
            raise Exception(f"Erro ao obter o token: {token_response.get('error_description', 'Erro desconhecido')}")
        
        return token_response['access_token']
    except Exception as e:
        print(f"Falha na autenticação: {e}")
        return None

access_id = request_access_token()

if access_id:
    dataset_id = '<dataset id>'
    endpoint = f'https://api.powerbi.com/v1.0/myorg/datasets/{dataset_id}/refreshes'
    headers = {
        'Authorization': f'Bearer {access_id}'
    }

    try:
        response = requests.post(endpoint, headers=headers)
        if response.status_code == 202:
            print('Dataset refreshed successfully')
        else:
            print(f"Erro na atualização do dataset: {response.status_code} - {response.reason}")
            print(response.json())
    except requests.RequestException as e:
        print(f"Erro na requisição: {e}")
else:
    print("Não foi possível obter o token de acesso.")

`}
            </code>
          </pre>
          {showNotification && (
            <div className="notification">
              Código copiado para a área de transferência!
            </div>
          )}
        </div>
        <p>
          O bloco 01 é a criação da função de solicitação do token de acesso,
          ele irá gerar o token permitindo que você se conecte à API do Power
          BI. <br />
          <br />
          Precisamos atualizar o dataset_id. No portal Azure, pesquise por
          Registro de Aplicativo e vá até o app criado anteriormente (veja o
          artigo anterior) e você terá acesso a todas as informações
          necessárias.
        </p>
        <img
          src={Etp2}
          alt="Sumario com informações do aplicativo"
          className="img-refresh"
        />
        <p>
          Substitua os valores das variáveis app_id (ID do aplicativo) e o
          tentant_id (ID do diretório) pelos do seu aplicativo. Essas são as
          únicas duas coisas que precisamos atualizar na função.
          <br /> <br />
          Dentro do Power BI, procure o conjunto de dados associado ao seu
          dashboard e pegue o ID do conjunto de dados a partir da sua URL e
          atribua a variável dataset_id.
        </p>
        <img
          src={Etp1}
          alt="Sumario com informações do aplicativo"
          className="img-refresh"
        />
        <p>
          Rode o script e ele atualizará.
          <br />
          Atualmente tenho muitos conjuntos de dados sendo atualizados a cada
          hora eu meu servidor, aliviando completamente o serviço.
        </p>
        <img
          src={Etp3}
          alt="Sumario com informações do aplicativo"
          className="img-refresh"
        />
      </div>
      <Footer />
    </div>
  );
};
