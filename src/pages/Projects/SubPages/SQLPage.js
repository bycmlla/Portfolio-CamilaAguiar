import React from "react";
import SQLImage from "../../../assets/images/sql.png";
import { useState } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import "./SQLPage.css";

const SQLPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    localStorage.setItem("darkMode", newDarkModeState.toString());
  };

  return (
    <div className={`SQLPage-container ${isDarkMode ? "dark-mode-sql" : ""}`}>
      <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <img src={SQLImage} alt="" width="30%" height="50%" />
      <div className="SQLPage">
        <h1>SQL</h1>

        {/* Índice (Sumário) */}
        <nav>
          <h2>Índice</h2>
          <ul>
            <li>
              <a href="#paginas-extras">Páginas Extras</a>
            </li>
            <li>
              <a href="#mysql-sql-server">
                MySQL ou SQL Server: Qual Utilizar?
              </a>
              <ul>
                <li>
                  <a href="#licenciamento-custo">Licenciamento e Custo</a>
                </li>
                <li>
                  <a href="#linguagem-sintaxe-sql">Linguagem e Sintaxe SQL</a>
                </li>
                <li>
                  <a href="#suporte-tipos-dados">Suporte a Tipos de Dados</a>
                </li>
                <li>
                  <a href="#procedimentos-armazenados-funcoes">
                    Procedimentos Armazenados e Funções
                  </a>
                </li>
                <li>
                  <a href="#ferramentas-administracao">
                    Ferramentas de Administração
                  </a>
                </li>
                <li>
                  <a href="#seguranca">Segurança</a>
                </li>
                <li>
                  <a href="#integracao-outras-tecnologias">
                    Integração com Outras Tecnologias
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#indices-sql">Índices no SQL</a>
              <ul>
                <li>
                  <a href="#o-que-sao-indices">O que são índices?</a>
                </li>
                <li>
                  <a href="#indice-clusterizado">Índice Clusterizado</a>
                </li>
                <li>
                  <a href="#indice-nao-clusterizado">Índice Não Clusterizado</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#views">Views</a>
              <ul>
                <li>
                  <a href="#o-que-e-view">O que é uma view (exibição)?</a>
                </li>
                <li>
                  <a href="#tipos-views">Tipos de Views</a>
                  <ul>
                    <li>
                      <a href="#views-simples">Views Simples</a>
                    </li>
                    <li>
                      <a href="#views-complexas">Views Complexas</a>
                    </li>
                    <li>
                      <a href="#views-indexadas">Views Indexadas</a>
                    </li>
                    <li>
                      <a href="#views-particao">Views de Partição</a>
                    </li>
                    <li>
                      <a href="#views-sistema">Views do Sistema</a>
                    </li>
                    <li>
                      <a href="#views-atualizacao">Views de Atualização</a>
                    </li>
                    <li>
                      <a href="#views-encapsuladas">Views Encapsuladas</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#joins">Joins</a>
              <ul>
                <li>
                  <a href="#o-que-sao-joins">O que são os Joins?</a>
                </li>
                <li>
                  <a href="#tipos-joins">Tipos de Joins</a>
                  <ul>
                    <li>
                      <a href="#inner-join">Inner Join</a>
                    </li>
                    <li>
                      <a href="#left-join">Left Join (Left Outer Join)</a>
                    </li>
                    <li>
                      <a href="#right-join">Right Join (Right Outer Join)</a>
                    </li>
                    <li>
                      <a href="#full-join">Full Join</a>
                    </li>
                    <li>
                      <a href="#cross-join">Cross Join</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#referencias">Referências</a>
            </li>
          </ul>
        </nav>

        <h2 id="paginas-extras">Páginas Extras</h2>
        <ul>
          <li>
            <a href="https://www.notion.so/Cl-usulas-70c22f743c064af891f4fc8acc814c95?pvs=21">
              Cláusulas
            </a>
          </li>
          <li>
            <a href="https://www.notion.so/Links-de-SQL-MySQL-cbe284bd02704c28a63c6a67563e226c?pvs=21">
              Links de SQL/MySQL
            </a>
          </li>
          <li>
            <a href="https://www.notion.so/Connect-to-Database-SQL-Server-with-Java-a694730081914bd59b31a261d386eff2?pvs=21">
              Connect to Database SQL Server with Java
            </a>
          </li>
        </ul>

        <h2 id="mysql-sql-server">MySQL ou SQL Server: Qual Utilizar?</h2>

        <h3 id="licenciamento-custo">Licenciamento e Custo</h3>
        <ul>
          <li>
            <strong>MySQL</strong>: É um sistema de código aberto e gratuito,
            mas também oferece versões comerciais com suporte e funcionalidades
            adicionais pela Oracle Corporation.
          </li>
          <li>
            <strong>SQL Server</strong>: É um produto comercial da Microsoft com
            várias edições, incluindo uma versão gratuita chamada SQL Server
            Express. As edições comerciais podem ser bastante caras, dependendo
            das necessidades da organização.
          </li>
        </ul>

        <h3 id="linguagem-sintaxe-sql">Linguagem e Sintaxe SQL</h3>
        <ul>
          <li>
            Ambos usam SQL (Structured Query Language) para gerenciar e
            manipular dados, mas existem diferenças na sintaxe e funcionalidades
            específicas suportadas.
          </li>
          <li>
            <strong>MySQL</strong>: Utiliza <code>AUTO_INCREMENT</code> para
            colunas com incremento automático.
          </li>
          <li>
            <strong>SQL Server</strong>: Utiliza <code>IDENTITY</code> para
            colunas com incremento automático.
          </li>
        </ul>

        <h3 id="suporte-tipos-dados">Suporte a Tipos de Dados</h3>
        <ul>
          <li>
            Ambos suportam uma vasta gama de tipos de dados, mas com algumas
            diferenças. Por exemplo, o MySQL tem tipos de dados específicos como{" "}
            <code>ENUM</code> e <code>SET</code>, enquanto o SQL Server tem
            tipos como <code>SQL_VARIANT</code> e <code>XML</code>.
          </li>
        </ul>

        <h3 id="procedimentos-armazenados-funcoes">
          Procedimentos Armazenados e Funções
        </h3>
        <ul>
          <li>
            Ambos suportam procedimentos armazenados e funções, mas a linguagem
            T-SQL (Transact-SQL) usada no SQL Server é mais rica em
            funcionalidades em comparação com o SQL/PL usado no MySQL.
          </li>
        </ul>

        <h3 id="ferramentas-administracao">Ferramentas de Administração</h3>
        <ul>
          <li>
            <strong>MySQL</strong>: Oferece o MySQL Workbench como uma
            ferramenta oficial para administração, desenvolvimento e modelagem
            de bancos de dados.
          </li>
          <li>
            <strong>SQL Server</strong>: Oferece o SQL Server Management Studio
            (SSMS) como uma ferramenta abrangente para administração,
            desenvolvimento e análise.
          </li>
        </ul>

        <h3 id="seguranca">Segurança</h3>
        <ul>
          <li>
            Ambos oferecem fortes recursos de segurança, mas com algumas
            diferenças em como são implementados.
          </li>
          <li>
            <strong>SQL Server</strong>: Integração nativa com Active Directory,
            criptografia transparente de dados, e permissões detalhadas de nível
            de coluna.
          </li>
          <li>
            <strong>MySQL</strong>: Suporte a SSL/TLS para encriptação de dados
            em trânsito, e autenticação de plug-ins como PAM e LDAP.
          </li>
        </ul>

        <h3 id="integracao-outras-tecnologias">
          Integração com Outras Tecnologias
        </h3>
        <ul>
          <li>
            <strong>SQL Server</strong>: Integração robusta com o ecossistema de
            produtos da Microsoft, como Azure, Power BI, e outros serviços em
            nuvem.
          </li>
          <li>
            <strong>MySQL</strong>: Amplamente utilizado com várias tecnologias
            de código aberto e plataformas em nuvem, como AWS e Google Cloud.
          </li>
        </ul>

        <h2 id="indices-sql">Índices no SQL</h2>

        <h3 id="o-que-sao-indices">O que são índices?</h3>
        <p>
          Os registros em um banco de dados são armazenados em páginas de dados
          que compõem uma estrutura de dados pilha. Os registros de dados não
          são armazenados em uma ordem específica, e não existe uma ordenação
          sequente para as páginas de dados.
        </p>
        <p>Existem dois métodos para acessar os dados:</p>
        <ul>
          <li>
            <strong>Exame de tabela</strong>, que examina todas as páginas de
            dados das tabelas, começando do início da tabela passando por todos
            os registros, página a página e extraindo aqueles que satisfazem aos
            critérios da consulta.
          </li>
          <li>
            <strong>Usando índices</strong>, percorrendo a estrutura da árvore
            do índice para localizar os registros, por comparação, extraindo
            somente aqueles registros necessários para satisfazerem os critérios
            passados pela consulta.
          </li>
        </ul>
        <p>Os índices aceleram a recuperação dos dados.</p>
        <p>
          Quando um índice é criado em uma tabela, ele afeta como os dados são
          armazenados fisicamente no disco.
        </p>

        <h3 id="indice-clusterizado">Índice Clusterizado</h3>
        <p>
          Organiza os dados da tabela na ordem do índice, ou seja, os dados da
          tabela são organizados fisicamente com base na chave do índice. Uma
          tabela pode ter apenas um índice clusterizado, pois define a ordem
          física dos dados na tabela.
        </p>
        <pre>
          <code>
            CREATE TABLE Produtos ( ProdutoID INT PRIMARY KEY CLUSTERED, Nome
            NVARCHAR(100), Preco DECIMAL(10, 2) );
          </code>
        </pre>

        <h3 id="indice-nao-clusterizado">Índice Não Clusterizado</h3>
        <p>
          Cria uma estrutura separada que contém as chaves do índice e ponteiros
          para os dados reais na tabela. Uma tabela pode ter vários índices não
          clusterizados.
        </p>
        <pre>
          <code>
            CREATE NONCLUSTERED INDEX idx_nome_produto ON Produtos (Nome);
          </code>
        </pre>

        <h2 id="views">Views</h2>

        <h3 id="o-que-e-view">O que é uma view (exibição)?</h3>
        <p>
          Uma view é uma consulta SQL armazenada que cria uma tabela virtual.
          Ela não armazena dados, apenas a definição da consulta.
        </p>
        <p>
          São usadas principalmente para leitura e consulta de dados. Não
          armazenam dados, apenas as definições das consultas. Não aceitam
          parâmetros.
        </p>
        <pre>
          <code>
            CREATE VIEW ClientesAtivos AS SELECT ClienteID, Nome, Email FROM
            Clientes WHERE Status = 'Ativo';
          </code>
        </pre>

        <h3 id="tipos-views">Tipos de Views</h3>

        <h4 id="views-simples">Views Simples</h4>
        <p>
          São as views mais básicas, geralmente baseadas em apenas uma tabela.
          Não contém funções complexas.
        </p>
        <pre>
          <code>
            CREATE VIEW ClientesAtivos AS SELECT ClienteID, Nome, Email FROM
            Clientes WHERE Status = 'Ativo';
          </code>
        </pre>

        <h4 id="views-complexas">Views Complexas</h4>
        <p>
          Estas views podem incluir várias tabelas, junções, subconsultas e
          funções agregadas. Elas são usadas para consultas mais avançadas.
        </p>
        <pre>
          <code>
            CREATE VIEW vwVendasPorCliente AS SELECT c.ClienteID, c.Nome,
            SUM(v.Valor) AS TotalVendas FROM Clientes c JOIN Vendas v ON
            c.ClienteID = v.ClienteID GROUP BY c.ClienteID, c.Nome;
          </code>
        </pre>

        <h4>Views Indexadas</h4>
        <p>
          Embora as views normais não armazenem dados fisicamente, uma view
          indexada armazena os dados da consulta resultante, permitindo um
          acesso mais rápido. Isso ocorre quando um índice é criado na view.
        </p>
        <pre>
          <code>
            CREATE VIEW vwVendasPorCliente WITH SCHEMABINDING AS SELECT
            c.ClienteID, c.Nome, SUM(v.Valor) AS TotalVendas FROM dbo.Clientes c
            JOIN dbo.Vendas v ON c.ClienteID = v.ClienteID GROUP BY c.ClienteID,
            c.Nome; CREATE UNIQUE CLUSTERED INDEX idx_VendasPorCliente ON
            vwVendasPorCliente (ClienteID);
          </code>
        </pre>

        <h2>Referências</h2>
        <p>
          <a href="https://www.w3schools.com/sql/sql_intro.asp">
            W3Schools SQL Tutorial
          </a>
        </p>
        <p>
          <a href="https://www.sqlservertutorial.net/">SQL Server Tutorial</a>
        </p>
        <p>
          <a href="https://dev.mysql.com/doc/refman/8.0/en/">
            MySQL Documentation
          </a>
        </p>
      </div>
    </div>
  );
};

export default SQLPage;
