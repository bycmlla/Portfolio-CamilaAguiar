import { useState, useRef } from "react";
import "./Refresh.css";

import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import NavBar from "../../../../../components/NavBar/NavBar";

import PbiPyBlack from "../../../../../assets/images/python/pbi black.png";
import PbiPyWhite from "../../../../../assets/images/python/pbi white.png";
import Footer from "../../../../../components/Footer/Footer";
import Etp1 from "../../../../../assets/images/python/etapa 1.1.png";
import Etp2 from "../../../../../assets/images/python/etapa 1.2.png";
import Etp3 from "../../../../../assets/images/python/etapa 1.3.png";
import Etp4 from "../../../../../assets/images/python/etapa 1.4.png";
import Etp5 from "../../../../../assets/images/python/etapa 1.5.png";
import Etp6 from "../../../../../assets/images/python/etapa 1.6.png";
import Etp7 from "../../../../../assets/images/python/etapa 1.7.png";
import Etp8 from "../../../../../assets/images/python/etapa 1.8.png";
import Etp9 from "../../../../../assets/images/python/etapa 1.9.png";
import Etp10 from "../../../../../assets/images/python/etapa 1.10.png";
import Etp11 from "../../../../../assets/images/python/etapa 1.11.png";
import Etp12 from "../../../../../assets/images/python/etapa 1.12.png";
import Etp13 from "../../../../../assets/images/python/etapa 1.13.png";
import unhinhin from "../../../../../assets/images/python/hunhihi.gif";

import { useTheme } from "../../../../../contexts/ThemeContext";

const Refresh = () => {

  const isDarkMode = useTheme()
  const codeRef = useRef(null);
  const [showNotification, setShowNotification] = useState(false);

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
      className={`refresh-container ${isDarkMode ? "dark-mode-refresh" : ""}`}
    >
      <NavBar isDarkMode={isDarkMode} />
      <div>
        <Link to={"/blog"} className="back-icon-refresh">
          <FaArrowLeft />
        </Link>
      </div>
      <img
        src={isDarkMode ? PbiPyWhite : PbiPyBlack}
        alt="Logo do Python e do Power BI"
        width="100%"
      />
      <div className="refresh-page">
        <h2>Conexão da API do Power BI</h2>
        <p>
          O Power BI é uma poderosa ferramenta de análise de dados da Microsoft,
          amplamente utilizada para criar relatórios e dashboards interativos.
          Ele permite que usuários de todos os níveis de habilidade — de
          analistas de dados a gerentes e executivos — transformem dados brutos
          em informações visuais e compreensíveis. <br /> <br />
          A ferramenta é utilizada em diversos contextos, como análise de
          vendas, monitoramento de indicadores de desempenho, controle
          financeiro, entre outros. Os relatórios e dashboards criados no Power
          BI são amplamente acessíveis, podendo ser visualizados tanto na web
          quanto em dispositivos móveis. <br /> <br />
          Conectar o Power BI ao Python via API é vantajoso para empresas e
          profissionais de dados, pois oferece uma maneira eficiente de manter
          os dashboards atualizados com os dados mais recentes, provenientes de
          várias fontes, e realizar operações avançadas de processamento.
          Utilizando APIs, é possível automatizar tarefas, como a atualização de
          datasets, a publicação de relatórios e a extração de informações para
          análises externas. Isso traz maior agilidade e precisão nas operações,
          ajudando na tomada de decisões mais rápidas e baseadas em dados
          atualizados. <br /> <br />O Power BI fornece uma API RESTful que pode
          ser usada com bibliotecas Python, como `requests`, para fazer
          requisições HTTP e realizar operações no serviço do Power BI. Com essa
          API, desenvolvedores podem acessar dados e controlar a plataforma
          remotamente, programando a atualização de datasets, criação de
          relatórios e monitoramento de métricas. Além disso, o Python permite o
          uso de técnicas avançadas de Machine Learning e visualizações
          personalizadas que, quando integradas ao Power BI, ampliam o poder
          analítico da plataforma.
        </p>
        <h3>Pré-requisitos e Configuração Inicial</h3>
        <p>
          Para utilizar a API REST do Power BI e atualizar datasets via Python,
          é preciso ter uma conta no Power BI com as permissões corretas.
          <ul>
            <li>
              Uma Licença Power BI Pro ou Premium:
              <ul>
                <li>
                  A conta deve possuir uma licença Pro ou acessar um workspace
                  Premium. A licença Pro permite acesso completo aos recursos de
                  criação, publicação e compartilhamento de relatórios e
                  dashboards, além da integração com APIs. A licença Premium,
                  por sua vez, oferece ainda mais capacidade de processamento e
                  permite compartilhamento em larga escala.
                </li>
              </ul>
            </li>
            <li>
              Permissão de Acesso ao Workspace:
              <ul>
                <li>
                  Os datasets que serão atualizados precisam estar em workspaces
                  aos quais a conta possui acesso de edição ou administração.
                  Sem acesso ao workspace específico onde o dataset está
                  armazenado, a conta não conseguirá listar ou atualizar o
                  dataset.
                </li>
              </ul>
            </li>
            <li>
              Autorização para Uso da API REST:
              <ul>
                <li>
                  A organização ou administrador de TI pode precisar conceder
                  permissão para que o aplicativo registrado (necessário para a
                  autenticação na API REST) acesse os recursos do Power BI. Esse
                  processo pode incluir ajustes nas configurações de segurança
                  do Azure AD para permitir a autenticação via API. Irei citar
                  algumas configurações que fiz.
                </li>
              </ul>
            </li>
          </ul>
        </p>
        <h3>Etapa 01 - Configurar a API e se conectar ao endpoint.</h3>
        <a href="https://learn.microsoft.com/en-us/power-bi/developer/embedded/register-app?tabs=customers">
          Registrar um Azure AD Application
        </a>
        <p>
          No link acima você encontra as instruções que o guiará em cada etapa.
          Mas sinto que a instrução é um pouco confusa. Sinto que falta algo na
          documentação. Mas é necessário ler um pouco para entender melhor.
          <br />
          <br />
          Navegue até Set up your environment, e vá para a página{" "}
          <a href="https://app.powerbi.com/embedsetup">
            Onboarding Embed Tool
          </a>{" "}
          <br />
          Agora é necessário configurar sua página do ambiente de incorporação
          do Power BI dependendo do seu caso de uso. Se você estiver
          desenvolvendo um relatório para um cliente, escolherá o incorporado
          para seus clientes. Se for um administrador do sistema, que trabalha
          para uma empresa, escolherá o incorporado para sua organização.
        </p>
        <img
          src={Etp1}
          alt="Choose an embedding solution"
          className="img-refresh"
        />
        <p>Eu escolhi a primeira opção.</p>
        <img
          src={Etp2}
          alt="Choose an embedding solution 2"
          className="img-refresh"
          style={{ marginTop: "10px" }}
        />
        <p>
          A primeira coisa que você deverá fazer é realizar o login em sua
          conta. Logo em seguida clique em avançar e dê um nome ao seu
          aplicativo, como por exemplo Power BI Integration. <br />É necessário
          escolher as permissões que serão concedidas a este aplicativo. Para
          demonstrar aqui, escolhi todas as opções.
        </p>
        <img
          src={Etp3}
          alt="Choose an embedding solution"
          className="img-refresh"
        />
        <p>
          E clique em registrar. E então criamos oficialmente o aplicativo. O
          próximo passo é apenas se você desejar criar um novo workspace para
          trabalhar a API, assim como o 4° passo, que é para caso você tenha
          algum relatório que queira importar para este workspace e ambos são
          opcionais. <br />A última etapa, que é a etapa cinco, é a etapa mais
          importante, que é conceder permissão ao aplicativo.
        </p>
        <img
          src={Etp4}
          alt="Solicitações de Permissões"
          className="img-refresh"
        />
        <p>
          Após finalizada a criação do aplicativo, é retornado o ID do mesmo.
        </p>
        <img
          src={Etp5}
          alt="Sumario com informações do aplicativo"
          className="img-refresh"
        />
        <p>
          O próximo passo é acessar o{" "}
          <a href="https://portal.azure.com/#home">Portal Azure</a>
        </p>
        <img
          src={Etp6}
          alt="Sumario com informações do aplicativo"
          className="img-refresh"
        />
        <p>
          Na barra de pesquisa, procure por Registros de Aplicativos ou App
          Registration caso esteja utilizando inglês, mas traduza.
        </p>
        <img
          src={Etp7}
          alt="Sumario com informações do aplicativo"
          className="img-refresh"
        />
        <p>
          Por padrão, ele vai mostrar o aplicativo que você possui. Mas quero
          escolher todos os aplicativos, então clico em Todos os Aplicativos. 😆
        </p>
        <img
          src={Etp8}
          alt="Sumario com informações do aplicativo"
          className="img-refresh"
        />
        <p>
          Clicando em seu aplicativo, algumas opções ao lado esquerdo
          aparecerão. Vá até autenticação e role ate o final, até encontrar a
          opção Permitir fluxos de cliente publico, deixando-o ativo. Salve as
          alterações.
        </p>
        <img
          src={Etp9}
          alt="Sumario com informações do aplicativo"
          className="img-refresh"
        />
        <h6>
          ! Caso queira modificar as permissões da API, pode ir em Permissões de
          APIs.
        </h6>

        <h3>Etapa 02 - Criação do script de conexão</h3>
        <p>
          Agora podemos escrever o script para conectar-se ao serviço API do
          Power BI. <br />
          Em sua IDE, estou utilizando o PyCharm mas pode ser outra de sua
          preferência, como VSCode, crie um arquivo chamado power_bi_api.py ou o
          nome de sua preferência, com extensão Python, já que é a linguagem que
          estaremos utilizando.
          <br />
          <br />O primeiro import que faremos é o request, e para gerar o token
          de acesso, instale a lib MSAL, The Microsoft Authentication Library ou
          Biblioteca de Autenticação da Microsoft, a partir do comando abaixo.
        </p>

        <div className="code-container">
          <button className="copy-button" onClick={copyToClipboard}>
            Copy
          </button>
          <pre className="code-block" ref={codeRef}>
            <code>
              {`
pip install msal
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
          Voltando ao Azure, em visão geral você terá acesso ao seu ID do
          Aplicativo, que é o seu Client ID e ao seu ID do diretório, que é o
          seu Tenant ID.
        </p>
        <img
          src={Etp10}
          alt="Sumario com informações do aplicativo"
          className="img-refresh"
        />
        <p>
          Quando nos conectamos a API do Power BI, precisamos fornecer o nosso
          nome de usuário e a nossa senha para verificar nossa conta. Você pode
          criar um nosso script chamado cred.py, ou pode usar variáveis de
          ambiente, seja o dotenv ou até mesmo dentro da sua IDE. Para
          facilidade, estarei utilizando o arquivo python.
        </p>
        <div className="code-container">
          <button className="copy-button" onClick={copyToClipboard}>
            Copy
          </button>
          <pre className="code-block" ref={codeRef}>
            <code>
              {`
import requests
import msal
from cred import username, passowrd

app_id = '0a5a2e01-ea59-4ed2-8f4c-659d426d74d2'
tenant_id = 'e8a9a604-b2c2-4837-a08d-25ddf50e0e78'
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
          Voltando ao seu aplicativo, clicando em Endpoints, você consegue ter
          acesso a todos os Endpoints da API. Eu utilizei o que está marcado
          abaixo, mas não importa qual que você copiou, pois vamos excluir tudo
          que está a direita do login microsoftonline para termos a nossa URL
          base.
        </p>
        <img
          src={Etp11}
          alt="Sumario com informações do aplicativo"
          className="img-refresh"
        />
        <div className="code-container">
          <button className="copy-button" onClick={copyToClipboard}>
            Copy
          </button>
          <pre className="code-block" ref={codeRef}>
            <code>
              {`
import requests
import msal
from cred import username, passowrd

app_id = '0a5a2e01-ea59-4ed2-8f4c-659d426d74d2'
tenant_id = 'e8a9a604-b2c2-4837-a08d-25ddf50e0e78'

authority_url = 'https://login.microsoftonline.com/' + tenant_id
scopes = ['https://analysis.windows.net/powerbi/api/.default']
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
          Para conectar a API do Power BI é um processo de duas etapas. O
          primeiro passo é gerar o token ID e o segundo passo é pegar o token ID
          e usá-lo para criar um código de classe.{" "}
        </p>

        <div className="code-container">
          <button className="copy-button" onClick={copyToClipboard}>
            Copy
          </button>
          <pre className="code-block" ref={codeRef}>                                               
            <code>
              {`
import requests
import msal
from cred import username, passowrd

app_id = '0a5a2e01-ea59-4ed2-8f4c-659d426d74d2'
tenant_id = 'e8a9a604-b2c2-4837-a08d-25ddf50e0e78'

authority_url = 'https://login.microsoftonline.com/' + tenant_id
scopes = ['https://analysis.windows.net/powerbi/api/.default']

# Passo 1 - Gerar o token ID de acesso

client = msal.PublicClientApplication(app_id, authority=authority_url)
response = client.acquire_token_by_username_passowrd(username=username, passowrd=passowrd, scopes=scopes)
print(response)
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
          A execução deste bloco de código me dará uma concessão inválida. Para
          resolver este problema, vamos voltar ao Microsoft Azure, e buscar por
          Azure Active Directory - propriedades.
          <br />
          <br />A razão pela qual estamos recebendo o erro é porque a Microsoft
          Addres, por padrão, tem várias camadas de segurança e configurações
          para ativar. Iremos alterar as configurações de segurança, clicando em
          gerenciar padrões de segurança. Caso apareça algumas caixas de opções,
          escolha a primeira.
        </p>
        <img
          src={Etp12}
          alt="Sumario com informações do aplicativo"
          className="img-refresh"
        />
        <p>
          Voltando ao script, já conseguimos criar o nosso token de acesso com
          sucesso.
        </p>
        <img
          src={Etp13}
          alt="Sumario com informações do aplicativo"
          className="img-refresh"
        />
        <p>
          Primeiro criei o endpoint, e em seguida sua header atribuindo o meu
          token SSID. Para fazer com que o codigo de solicitação das classes
          seja obtido, inseri a solicitação de resposta do endpoint.
        </p>
        <div className="code-container">
          <button className="copy-button" onClick={copyToClipboard}>
            Copy
          </button>
          <pre className="code-block" ref={codeRef}>
            <code>
              {`
import requests
import msal
from cred import username, passowrd

app_id = '0a5a2e01-ea59-4ed2-8f4c-659d426d74d2'
tenant_id = 'e8a9a604-b2c2-4837-a08d-25ddf50e0e78'

authority_url = 'https://login.microsoftonline.com/' + tenant_id
scopes = ['https://analysis.windows.net/powerbi/api/.default']

# Passo 1 - Gerar o token ID de acesso

client = msal.PublicClientApplication(app_id, authority=authority_url)
response = client.acquire_token_by_username_passowrd(username=username, passowrd=passowrd, scopes=scopes)
access_id = response.get('access_token')

# Passo 2 

endpoint = 'https://api.powerbi.com/v1.0/myorg/groups'
headers= {
    'Authorization': f'Bearer ' + access_id
}
response_request = requests.get(endpoint, headers=headers)
if response_request.status_code == 200:
    print(response_request.json()) 
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
          Neste endpoint retornará todos os meus workspaces da minha conta do
          Power BI.
          <br />
          Pronto, você já está conectado!
        </p>
        <img
          src={unhinhin}
          alt="Logo do Python e do Power BI"
          className="img-refresh"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Refresh;
