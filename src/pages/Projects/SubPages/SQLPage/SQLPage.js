import SQLImage from "../../../../assets/images/logos/sql-illustration.png";
import { useRef, useState } from "react";
import NavBar from "../../../../components/NavBar/NavBar";
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

  const codeRef = useRef(null);

  const [showNotification, setShowNotification] = useState(false);

  const copyToClipboard = () => {
    const code = codeRef.current.innerText;
    navigator.clipboard.writeText(code).then(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    });
  };
  return (
    <div className={`SQLPage-container ${isDarkMode ? "dark-mode-sql" : ""}`}>
      <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <img
        className="image-sql"
        src={SQLImage}
        alt=""
        width="100%"
        height="20%"
      />
      <div className="SQLPage">
        <p>
          SQL (Structured Query Language) é uma linguagem padrão utilizada para
          gerenciar e manipular bancos de dados relacionais. Ela permite que
          você crie, leia, atualize e exclua dados armazenados em tabelas dentro
          de um banco de dados.
          <br />
          <br /> Este é um tutorial com informações sobre algumas
          funcionalidades do SQl e como utilizá-los. Abaixo temos o sumário com
          todos assuntos abordados aqui até então tornando sua navegação mais
          fácil. Logo adicionarei mais conteúdos!
        </p>
        <nav className="custom-nav">
          <h2 className="nav-title">Sumário</h2>
          <ul className="nav-list">
            <li>
              <a className="nav-link" href="#mysql-sql-server">
                MySQL ou SQL Server: Qual Utilizar?
              </a>
              <ul className="sub-list">
                <li>
                  <a className="sub-link" href="#licenciamento-custo">
                    Licenciamento e Custo
                  </a>
                </li>
                <li>
                  <a className="sub-link" href="#linguagem-sintaxe-sql">
                    Linguagem e Sintaxe SQL
                  </a>
                </li>
                <li>
                  <a className="sub-link" href="#suporte-tipos-dados">
                    Suporte a Tipos de Dados
                  </a>
                </li>
                <li>
                  <a
                    className="sub-link"
                    href="#procedimentos-armazenados-funcoes"
                  >
                    Procedimentos Armazenados e Funções
                  </a>
                </li>
                <li>
                  <a className="sub-link" href="#ferramentas-administracao">
                    Ferramentas de Administração
                  </a>
                </li>
                <li>
                  <a className="sub-link" href="#seguranca">
                    Segurança
                  </a>
                </li>
                <li>
                  <a className="sub-link" href="#integracao-outras-tecnologias">
                    Integração com Outras Tecnologias
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link" href="#indices-sql">
                Índices no SQL
              </a>
              <ul className="sub-list">
                <li>
                  <a className="sub-link" href="#o-que-sao-indices">
                    O que são índices?
                  </a>
                </li>
                <li>
                  <a className="sub-link" href="#indice-clusterizado">
                    Índice Clusterizado
                  </a>
                </li>
                <li>
                  <a className="sub-link" href="#indice-nao-clusterizado">
                    Índice Não Clusterizado
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link" href="#views">
                Views
              </a>
              <ul className="sub-list">
                <li>
                  <a className="sub-link" href="#o-que-e-view">
                    O que é uma view (exibição)?
                  </a>
                </li>
                <li>
                  <a className="sub-link" href="#tipos-views">
                    Tipos de Views
                  </a>
                  <ul className="sub-sub-list">
                    <li>
                      <a className="sub-sub-link" href="#views-simples">
                        Views Simples
                      </a>
                    </li>
                    <li>
                      <a className="sub-sub-link" href="#views-complexas">
                        Views Complexas
                      </a>
                    </li>
                    <li>
                      <a className="sub-sub-link" href="#views-indexadas">
                        Views Indexadas
                      </a>
                    </li>
                    <li>
                      <a className="sub-sub-link" href="#views-particao">
                        Views de Partição
                      </a>
                    </li>
                    <li>
                      <a className="sub-sub-link" href="#views-sistema">
                        Views do Sistema
                      </a>
                    </li>
                    <li>
                      <a className="sub-sub-link" href="#views-atualizacao">
                        Views de Atualização
                      </a>
                    </li>
                    <li>
                      <a className="sub-sub-link" href="#views-encapsuladas">
                        Views Encapsuladas
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link" href="#joins">
                Joins
              </a>
              <ul className="sub-list">
                <li>
                  <a className="sub-link" href="#o-que-sao-joins">
                    O que são os Joins?
                  </a>
                </li>
                <li>
                  <a className="sub-link" href="#tipos-joins">
                    Tipos de Joins
                  </a>
                  <ul className="sub-sub-list">
                    <li>
                      <a className="sub-sub-link" href="#inner-join">
                        Inner Join
                      </a>
                    </li>
                    <li>
                      <a className="sub-sub-link" href="#left-join">
                        Left Join (Left Outer Join)
                      </a>
                    </li>
                    <li>
                      <a className="sub-sub-link" href="#right-join">
                        Right Join (Right Outer Join)
                      </a>
                    </li>
                    <li>
                      <a className="sub-sub-link" href="#full-join">
                        Full Join
                      </a>
                    </li>
                    <li>
                      <a className="sub-sub-link" href="#cross-join">
                        Cross Join
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link" href="#case-when">
                Case When
              </a>
              <ul className="sub-list">
                <li>
                  <a className="sub-link" href="#o-que-e-case">
                    O que é e como funciona o Case When
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link" href="#criacao-instancia">
                Criação de Instância Via Terminal
              </a>
            </li>
            <li>
              <a className="nav-link" href="#referencias">
                Referências
              </a>
            </li>
          </ul>
        </nav>

        <hr class="hr hr-blurry" />
        <section>
          <h2 id="mysql-sql-server">MySQL ou SQL Server: Qual Utilizar?</h2>

          <div className="licenciamento-custo">
            <h4 id="licenciamento-custo">Licenciamento e Custo</h4>
            <ul>
              <li>
                <strong>MySQL</strong>: É um sistema de código aberto e
                gratuito, mas também oferece versões comerciais com suporte e
                funcionalidades adicionais pela Oracle Corporation.
              </li>
              <li>
                <strong>SQL Server</strong>: É um produto comercial da Microsoft
                com várias edições, incluindo uma versão gratuita chamada SQL
                Server Express. As edições comerciais podem ser bastante caras,
                dependendo das necessidades da organização.
              </li>
            </ul>

            <h4 id="linguagem-sintaxe-sql">Linguagem e Sintaxe SQL</h4>
            <ul>
              <li>
                Ambos usam SQL (Structured Query Language) para gerenciar e
                manipular dados, mas existem diferenças na sintaxe e
                funcionalidades específicas suportadas.
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

            <h4 id="suporte-tipos-dados">Suporte a Tipos de Dados</h4>
            <ul>
              <li>
                Ambos suportam uma vasta gama de tipos de dados, mas com algumas
                diferenças. Por exemplo, o MySQL tem tipos de dados específicos
                como <code>ENUM</code> e <code>SET</code>, enquanto o SQL Server
                tem tipos como <code>SQL_VARIANT</code> e <code>XML</code>.
              </li>
            </ul>

            <h4 id="procedimentos-armazenados-funcoes">
              Procedimentos Armazenados e Funções
            </h4>
            <ul>
              <li>
                Ambos suportam procedimentos armazenados e funções, mas a
                linguagem T-SQL (Transact-SQL) usada no SQL Server é mais rica
                em funcionalidades em comparação com o SQL/PL usado no MySQL.
              </li>
            </ul>

            <h4 id="ferramentas-administracao">Ferramentas de Administração</h4>
            <ul>
              <li>
                <strong>MySQL</strong>: Oferece o MySQL Workbench como uma
                ferramenta oficial para administração, desenvolvimento e
                modelagem de bancos de dados.
              </li>
              <li>
                <strong>SQL Server</strong>: Oferece o SQL Server Management
                Studio (SSMS) como uma ferramenta abrangente para administração,
                desenvolvimento e análise.
              </li>
            </ul>

            <h4 id="seguranca">Segurança</h4>
            <ul>
              <li>
                Ambos oferecem fortes recursos de segurança, mas com algumas
                diferenças em como são implementados.
              </li>
              <li>
                <strong>SQL Server</strong>: Integração nativa com Active
                Directory, criptografia transparente de dados, e permissões
                detalhadas de nível de coluna.
              </li>
              <li>
                <strong>MySQL</strong>: Suporte a SSL/TLS para encriptação de
                dados em trânsito, e autenticação de plug-ins como PAM e LDAP.
              </li>
            </ul>

            <h4 id="integracao-outras-tecnologias">
              Integração com Outras Tecnologias
            </h4>
            <ul>
              <li>
                <strong>SQL Server</strong>: Integração robusta com o
                ecossistema de produtos da Microsoft, como Azure, Power BI, e
                outros serviços em nuvem.
              </li>
              <li>
                <strong>MySQL</strong>: Amplamente utilizado com várias
                tecnologias de código aberto e plataformas em nuvem, como AWS e
                Google Cloud.
              </li>
            </ul>
          </div>
          <hr class="hr hr-blurry" />
        </section>

        <section>
          <h2 id="indices-sql">Índices no SQL</h2>
          <div className="indices-sql">
            <h4 id="o-que-sao-indices">O que são índices?</h4>
            <p>
              Os registros em um banco de dados são armazenados em páginas de
              dados que compõem uma estrutura de dados pilha. Os registros de
              dados não são armazenados em uma ordem específica, e não existe
              uma ordenação sequente para as páginas de dados.
            </p>
            <p>Existem dois métodos para acessar os dados:</p>
            <ul>
              <li>
                <strong>Exame de tabela</strong>, que examina todas as páginas
                de dados das tabelas, começando do início da tabela passando por
                todos os registros, página a página e extraindo aqueles que
                satisfazem aos critérios da consulta.
              </li>
              <li>
                <strong>Usando índices</strong>, percorrendo a estrutura da
                árvore do índice para localizar os registros, por comparação,
                extraindo somente aqueles registros necessários para
                satisfazerem os critérios passados pela consulta.
              </li>
            </ul>
            <p>Os índices aceleram a recuperação dos dados.</p>
            <p>
              Quando um índice é criado em uma tabela, ele afeta como os dados
              são armazenados fisicamente no disco.
            </p>
            <h4 id="indice-clusterizado">Índice Clusterizado</h4>
            <p>
              Organiza os dados da tabela na ordem do índice, ou seja, os dados
              da tabela são organizados fisicamente com base na chave do índice.
              Uma tabela pode ter apenas um índice clusterizado, pois define a
              ordem física dos dados na tabela.
            </p>

            <div className="code-container">
              <button className="copy-button" onClick={copyToClipboard}>
                Copy
              </button>
              <pre className="code-block" ref={codeRef}>
                <code>
                  CREATE TABLE Produtos (<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;ProdutoID INT PRIMARY KEY CLUSTERED,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;Nome NVARCHAR(100),
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;Preco DECIMAL(10, 2)
                  <br />
                  );
                </code>
              </pre>
              {showNotification && (
                <div className="notification">
                  Código copiado para a área de transferência!
                </div>
              )}
            </div>

            <h4 id="indice-nao-clusterizado">Índice Não Clusterizado</h4>
            <p>
              Cria uma estrutura separada que contém as chaves do índice e
              ponteiros para os dados reais na tabela. Uma tabela pode ter
              vários índices não clusterizados.
            </p>

            <div className="code-container">
              <button className="copy-button" onClick={copyToClipboard}>
                Copy
              </button>
              <pre className="code-block" ref={codeRef}>
                <code>
                  CREATE TABLE Vendas ( <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;VendaID INT PRIMARY KEY, <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;DataVenda DATE, <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;ClienteID INT, <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;Valor DECIMAL(10, 2) <br />
                  ); <br />
                  <br />
                  CREATE INDEX idx_ClienteID ON Vendas (ClienteID);
                </code>
              </pre>
              {showNotification && (
                <div className="notification">
                  Código copiado para a área de transferência!
                </div>
              )}
            </div>
          </div>
          <hr class="hr hr-blurry" />
        </section>
        <section>
          <h2 id="views">Views</h2>

          <h4 id="o-que-e-view">O que é uma view (exibição)?</h4>
          <p>
            Uma view é uma consulta SQL armazenada que cria uma tabela virtual.
            Ela não armazena dados, apenas a definição da consulta.
          </p>
          <p>
            São usadas principalmente para leitura e consulta de dados. Não
            armazenam dados, apenas as definições das consultas. Não aceitam
            parâmetros.
          </p>

          <div className="code-container">
            <button className="copy-button" onClick={copyToClipboard}>
              Copy
            </button>
            <pre className="code-block" ref={codeRef}>
              <code>
                CREATE VIEW ClientesAtivos AS SELECT <br />
                &nbsp;&nbsp;&nbsp;&nbsp;ClienteID, <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Nome, <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Email <br />
                FROM
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Clientes <br />
                WHERE Status = 'Ativo';
              </code>
            </pre>
            {showNotification && (
              <div className="notification">
                Código copiado para a área de transferência!
              </div>
            )}
          </div>

          <h4 id="tipos-views">Tipos de Views</h4>

          <h5 id="views-simples">Views Simples</h5>
          <p>
            São as views mais básicas, geralmente baseadas em apenas uma tabela.
            Não contém funções complexas.
          </p>

          <div className="code-container">
            <button className="copy-button" onClick={copyToClipboard}>
              Copy
            </button>
            <pre className="code-block" ref={codeRef}>
              <code>
                CREATE VIEW ClientesAtivos AS SELECT <br />
                &nbsp;&nbsp;&nbsp;&nbsp;ClienteID, <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Nome, <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Email <br />
                FROM
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Clientes <br />
                WHERE Status = 'Ativo';
              </code>
            </pre>
            {showNotification && (
              <div className="notification">
                Código copiado para a área de transferência!
              </div>
            )}
          </div>

          <h5 id="views-complexas">Views Complexas</h5>
          <p>
            Estas views podem incluir várias tabelas, junções, subconsultas e
            funções agregadas. Elas são usadas para consultas mais avançadas.
          </p>

          <div className="code-container">
            <button className="copy-button" onClick={copyToClipboard}>
              Copy
            </button>
            <pre className="code-block" ref={codeRef}>
              <code>
                CREATE VIEW vwVendasPorCliente AS <br />
                &nbsp;&nbsp;&nbsp;&nbsp;SELECT c.ClienteID, c.Nome, <br />
                &nbsp;&nbsp;&nbsp;&nbsp;SUM(v.Valor) AS TotalVendas <br />
                &nbsp;&nbsp;&nbsp;&nbsp;FROM Clientes c <br />
                &nbsp;&nbsp;&nbsp;&nbsp;JOIN Vendas v ON c.ClienteID =
                v.ClienteID <br />
                &nbsp;&nbsp;&nbsp;&nbsp;GROUP BY c.ClienteID, c.Nome;
              </code>
            </pre>
            {showNotification && (
              <div className="notification">
                Código copiado para a área de transferência!
              </div>
            )}
          </div>

          <h5 id="views-indexadas">Views Indexadas</h5>
          <p>
            Embora as views normais não armazenem dados fisicamente, uma view
            indexada armazena os dados da consulta resultante, permitindo um
            acesso mais rápido. Isso ocorre quando um índice é criado na view.
          </p>

          <div className="code-container">
            <button className="copy-button" onClick={copyToClipboard}>
              Copy
            </button>
            <pre className="code-block" ref={codeRef}>
              <code>
                CREATE VIEW vwVendasPorCliente WITH SCHEMABINDING AS <br />
                &nbsp;&nbsp;&nbsp;&nbsp;SELECT c.ClienteID, c.Nome, <br />
                &nbsp;&nbsp;&nbsp;&nbsp;SUM(v.Valor) AS TotalVendas <br />
                &nbsp;&nbsp;&nbsp;&nbsp;FROM dbo.Clientes c <br />
                &nbsp;&nbsp;&nbsp;&nbsp;JOIN dbo.Vendas v ON c.ClienteID =
                v.ClienteID <br />
                &nbsp;&nbsp;&nbsp;&nbsp;GROUP BY c.ClienteID, c.Nome; <br />
                <br />
                CREATE UNIQUE CLUSTERED INDEX idx_VendasPorCliente ON <br />
                &nbsp;&nbsp;&nbsp;&nbsp;vwVendasPorCliente (ClienteID);
              </code>
            </pre>
            {showNotification && (
              <div className="notification">
                Código copiado para a área de transferência!
              </div>
            )}
          </div>

          <h5 id="views-particao">Views de Partição</h5>
          <p>
            Estas views são usadas para unir dados de várias tabelas de
            partição, permitindo que você trate dados de tabelas separadas como
            uma única tabela lógica. Elas são úteis para gerenciar grandes
            volumes de dados divididos em várias tabelas.
          </p>

          <div className="code-container">
            <button className="copy-button" onClick={copyToClipboard}>
              Copy
            </button>
            <pre className="code-block" ref={codeRef}>
              <code>
                CREATE VIEW vwVendasParticionadas AS <br />
                &nbsp;&nbsp;&nbsp;&nbsp;SELECT * FROM Vendas2019 <br />
                &nbsp;&nbsp;&nbsp;&nbsp;UNION ALL <br />
                &nbsp;&nbsp;&nbsp;&nbsp;SELECT * FROM Vendas2020 <br />
                &nbsp;&nbsp;&nbsp;&nbsp;UNION ALL <br />
                &nbsp;&nbsp;&nbsp;&nbsp;SELECT * FROM Vendas2021;
              </code>
            </pre>
            {showNotification && (
              <div className="notification">
                Código copiado para a área de transferência!
              </div>
            )}
          </div>

          <p>
            Agora, você pode consultar a view <code>vwVendasParticionadas</code>{" "}
            como se fosse uma única tabela.
          </p>

          <div className="code-container">
            <button className="copy-button" onClick={copyToClipboard}>
              Copy
            </button>
            <pre className="code-block" ref={codeRef}>
              <code>
                SELECT * FROM vwVendasParticionadas <br />
                WHERE DataVenda (maior que)= '2020-01-01' <br />
                AND DataVenda (menor que)= '2020-12-31';
              </code>
            </pre>
            {showNotification && (
              <div className="notification">
                Código copiado para a área de transferência!
              </div>
            )}
          </div>

          <h5 id="views-sistema">Views do Sistema</h5>
          <p>
            Estas são views internas fornecidas pelo SQL Server que contêm
            informações sobre o banco de dados e o servidor. Elas são úteis para
            administração e monitoramento.
          </p>
          <div className="code-container">
            <button className="copy-button" onClick={copyToClipboard}>
              Copy
            </button>
            <pre className="code-block" ref={codeRef}>
              <code>SELECT * FROM sys.objects WHERE type = 'V';</code>
            </pre>
            {showNotification && (
              <div className="notification">
                Código copiado para a área de transferência!
              </div>
            )}
          </div>

          <h5 id="views-atualizacao">Views de Atualização</h5>
          <p>
            Embora as views sejam tipicamente usadas para consulta, você pode
            criar views que permitem operações de atualização (INSERT, UPDATE,
            DELETE) se certas condições forem atendidas.
          </p>
          <div className="code-container">
            <button className="copy-button" onClick={copyToClipboard}>
              Copy
            </button>
            <pre className="code-block" ref={codeRef}>
              <code>
                CREATE VIEW vwAtualizacaoClientes <br />
                AS <br />
                SELECT ClienteID, Nome, Email <br />
                FROM Clientes <br />
                WHERE Status = 'Ativo' <br />
                WITH CHECK OPTION;
              </code>
            </pre>
            {showNotification && (
              <div className="notification">
                Código copiado para a área de transferência!
              </div>
            )}
          </div>
          <div class="line-container">
            <div class="vertical-line"></div>
            <p class="text-content">
              Quando você usa <code>WITH CHECK OPTION</code> ao criar uma view,
              o SQL Server impõe que qualquer <code>INSERT</code> ou{" "}
              <code>UPDATE</code> realizado através dessa view deve resultar em
              uma linha que ainda satisfaça a condição da view.
            </p>
          </div>
          <div className="code-container">
            <button className="copy-button" onClick={copyToClipboard}>
              Copy
            </button>
            <pre className="code-block" ref={codeRef}>
              <code>
                UPDATE vwClientesAtivosAtualizavel <br />
                SET Email = 'novoemail@exemplo.com' <br />
                WHERE ClienteID = 1;
              </code>
            </pre>
            {showNotification && (
              <div className="notification">
                Código copiado para a área de transferência!
              </div>
            )}
          </div>
          <p>
            Se o cliente com <code>ClienteID = 1</code> tiver{" "}
            <code>Status = 'Ativo'</code>, seu endereço de e-mail será
            atualizado. Se o cliente não for ativo, a atualização não será
            permitida por causa da cláusula <code>WITH CHECK OPTION</code>.
          </p>

          <h5 id="views-encapsuladas">Views Encapsuladas</h5>
          <p>
            Estas são views que referenciam outras views. Isso pode ajudar na
            organização e modularidade, mas pode afetar o desempenho se não
            forem gerenciadas adequadamente.
          </p>
          <div className="code-container">
            <button className="copy-button" onClick={copyToClipboard}>
              Copy
            </button>
            <pre className="code-block" ref={codeRef}>
              <code>
                CREATE VIEW vwClientesDetalhes AS <br />
                SELECT c.ClienteID, c.Nome, c.Email, v.TotalVendas <br />
                FROM vwClientesAtivos c <br />
                JOIN vwVendasPorCliente v ON c.ClienteID = v.ClienteID;
              </code>
            </pre>
            {showNotification && (
              <div className="notification">
                Código copiado para a área de transferência!
              </div>
            )}
          </div>
        </section>
        <section>
          <hr class="hr hr-blurry" />
          <h2 id="joins">Joins</h2>

          <h4 id="o-que-sao-joins">O que são os Joins?</h4>
          <p>
            No SQL, os <code>JOINs</code> são utilizados para combinar dados de
            duas ou mais tabelas com base em uma relação entre elas. Essas
            operações permitem que você associe registros de diferentes tabelas
            com base em colunas comuns, criando conjuntos de resultados mais
            completos e relevantes para suas consultas.
          </p>

          <h4 id="tipos-joins">Tipos de Joins</h4>

          <h5 id="inner-join">Inner Join</h5>
          <p>
            O <code>INNER JOIN</code> retorna registros que têm valores
            correspondentes em ambas as tabelas. Ele combina linhas de duas
            tabelas se a condição de junção especificada for verdadeira.
          </p>
          <div className="code-container">
            <button className="copy-button" onClick={copyToClipboard}>
              Copy
            </button>
            <pre className="code-block" ref={codeRef}>
              <code>
                SELECT * <br />
                FROM TabelaA <br />
                INNER JOIN TabelaB ON TabelaA.ID = TabelaB.ID;
              </code>
            </pre>
            {showNotification && (
              <div className="notification">
                Código copiado para a área de transferência!
              </div>
            )}
          </div>
          <h5 id="left-join">Left Join (Left Outer Join)</h5>
          <p>
            O <code>LEFT JOIN</code> retorna todos os registros da tabela da
            esquerda (tabela A), e os registros correspondentes da tabela da
            direita (tabela B). Se não houver correspondência, os valores NULL
            são retornados para as colunas da tabela da direita.
          </p>
          <div className="code-container">
            <button className="copy-button" onClick={copyToClipboard}>
              Copy
            </button>
            <pre className="code-block" ref={codeRef}>
              <code>
                SELECT C.NOMECARGO [CARGO], F.NOMEFUNCIONARIO AS [FUNCIONÁRIO],
                F.SALARIOFUNCIONARIO AS [SALÁRIO] <br />
                FROM CARGO AS C <br />
                LEFT JOIN FUNCIONARIO AS F ON C.IDCARGO = F.IDCARGO;
              </code>
            </pre>
            {showNotification && (
              <div className="notification">
                Código copiado para a área de transferência!
              </div>
            )}
          </div>
          <h5 id="right-join">Right Join (Right Outer Join)</h5>
          <p>
            O <code>RIGHT JOIN</code> é o oposto do <code>LEFT JOIN</code>. Ele
            retorna todos os registros da tabela da direita (tabela B), e os
            registros correspondentes da tabela da esquerda (tabela A). Se não
            houver correspondência, os valores NULL são retornados para as
            colunas da tabela da esquerda.
          </p>

          <h5 id="full-join">Full Join</h5>
          <p>
            O <code>FULL JOIN</code> retorna registros quando há uma
            correspondência em uma das tabelas. Ele retorna todos os registros
            de ambas as tabelas, combinando as linhas quando há uma
            correspondência e adicionando NULL onde não há correspondência.
          </p>

          <h5 id="cross-join">Cross Join</h5>
          <p>
            O <code>CROSS JOIN</code> retorna o produto cartesiano de duas
            tabelas. Isso significa que combina cada linha da primeira tabela
            com cada linha da segunda tabela, resultando em um número de linhas
            igual ao produto dos números de linhas nas tabelas.
          </p>
          <hr class="hr hr-blurry" />
        </section>

        <section>
          <h2 id="case-when">Case When</h2>
          <h4 id="o-que-e-case">O que é e como funciona o Case When?</h4>
          <p>
            O <code>CASE WHEN</code> no SQL é uma função condicional que permite
            definir regras específicas para operações em uma tabela de dados.
            Assim, usamos quando uma condição específica é verdadeira. O{" "}
            <code>CASE WHEN</code> está composto por três partes: a cláusula{" "}
            <code>CASE</code>, a cláusula <code>WHEN</code> e a cláusula{" "}
            <code>THEN</code>.
          </p>
          <pre>
            <code>
              {`CASE condição
WHEN valores_condicionais
THEN ações
ELSE ação_padrão
END;`}
            </code>
          </pre>
          <p>Exemplo:</p>

          <div className="code-container">
            <button className="copy-button" onClick={copyToClipboard}>
              Copy
            </button>
            <pre className="code-block" ref={codeRef}>
              <code>
                CASE WHEN condição1 THEN valor1 WHEN condição2 THEN valor2 ELSE
                valorPadrão END;
              </code>
            </pre>
            {showNotification && (
              <div className="notification">
                Código copiado para a área de transferência!
              </div>
            )}
          </div>
          <pre>
            <code>{``}</code>
          </pre>
          <hr class="hr hr-blurry" />
        </section>
        <section>
          <h2 id="criacao-instancia">Criação de Instância Via Terminal</h2>

          <h4>Pare e exclua a instância existente</h4>
          <pre>
            <code>
              {`sqllocaldb stop "MinhaInstanciaAntiga"
sqllocaldb delete "MinhaInstanciaAntiga";`}
            </code>
          </pre>

          <h4>Crie uma nova instância</h4>
          <pre>
            <code>{`sqllocaldb create "MinhaNovaInstancia";`}</code>
          </pre>

          <h4>Inicie a nova instância</h4>
          <pre>
            <code>{`sqllocaldb start "MinhaNovaInstancia";`}</code>
          </pre>

          <h4>Verifique as informações da nova instância</h4>
          <pre>
            <code>{`sqllocaldb info "MinhaNovaInstancia";`}</code>
          </pre>
        </section>

        <section>
          <hr class="hr hr-blurry" />

          <h2 id="referencias">Referências</h2>
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
        </section>
      </div>
    </div>
  );
};

export default SQLPage;
