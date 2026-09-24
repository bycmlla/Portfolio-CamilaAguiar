import "./SendEmails.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { useTheme } from "../../contexts/ThemeContext";

import HeroBanner from "../../assets/images/send-emails/hero-banner.jpg";
import FormImage from "../../assets/images/send-emails/formulario.png";
import ResendImage from "../../assets/images/send-emails/resend.png";
import VariableImage from "../../assets/images/send-emails/variable.png";
import NodeResendImage from "../../assets/images/send-emails/noderesend.png";
import PostImage from "../../assets/images/send-emails/post.jpg";
import ZodImage from "../../assets/images/send-emails/zod.png";
import Status400Image from "../../assets/images/send-emails/status400.jpg";
import ResendSecondImage from "../../assets/images/send-emails/resend2.webp";
import ReplyImage from "../../assets/images/send-emails/reply.jpg";
import DomainImage from "../../assets/images/send-emails/domain.png";
import DnsImage from "../../assets/images/send-emails/zona-dns.png";
import SpfImage from "../../assets/images/send-emails/spf.jpg";
import RatedImage from "../../assets/images/send-emails/rated.png";
import ErrorImage from "../../assets/images/send-emails/error.png";
import ResultImage from "../../assets/images/send-emails/result.png";

const sections = [
  ["entendendo-fluxo-envio", "Entendendo o fluxo de envio"],
  ["instalando-dependencias", "Instalando as dependências"],
  ["configurando-resend", "Configurando o Resend"],
  ["criando-rota-formulario", "Criando a rota do formulário"],
  ["validando-dados-zod", "Validando os dados com Zod"],
  ["enviando-email-resend", "Enviando o e-mail com Resend"],
  ["configurando-reply-to", "Configurando o Reply-To"],
  ["dominio-proprio-resend", "Configurando um domínio próprio no Resend"],
  ["dns-registro-br", "Configurando o DNS no Registro.br"],
  ["protegendo-rota-envio", "Protegendo a rota de envio"],
  ["tratando-erros-envio", "Tratando erros no envio"],
  ["resultado-final", "Resultado final"],
];

const resendTemplateStart = String.fromCharCode(36) + "{";

const resendSendCode = [
  "const { name, email, company, phone, message } = parsed.data;",
  "",
  "const { error } = await resend.emails.send({",
  "  from: process.env.MAIL_FROM_EMAIL,",
  "  to: [process.env.MAIL_TO],",
  "  subject: \"Novo contato pelo site\",",
  "  replyTo: email,",
  "  html: " + String.fromCharCode(96),
  "    <h2>Novo contato</h2>",
  "",
  "    <p><strong>Nome:</strong> " + resendTemplateStart + "name}</p>",
  "    <p><strong>E-mail:</strong> " + resendTemplateStart + "email}</p>",
  "    <p><strong>Empresa:</strong> " + resendTemplateStart + "company || \"-\"}</p>",
  "    <p><strong>Telefone:</strong> " + resendTemplateStart + "phone || \"-\"}</p>",
  "",
  "    <p><strong>Mensagem:</strong></p>",
  "    <p>" + resendTemplateStart + "message}</p>",
  "  " + String.fromCharCode(96) + ",",
  "});",
].join("\n");

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Não foi possível copiar o código:", error);
    }
  };

  return (
    <div className="send-emails-code-container">
      <button
        type="button"
        className="send-emails-copy-button"
        onClick={copyCode}
      >
        {copied ? "Copiado!" : "Copy"}
      </button>
      <pre className="send-emails-code">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const SendEmails = () => {
  const { isDarkMode } = useTheme();
  const flowCode = `Usuário preenche o formulário
          ↓
Frontend envia um POST
          ↓
POST /api/contact
          ↓
Backend valida os dados
          ↓
Resend API
          ↓
Servidor de e-mail
          ↓
E-mail recebido`;

  const dependenciesCode =
    "npm install express resend dotenv zod cors helmet express-rate-limit";

  const scrollToSection = (event, id) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      className={
        "send-emails-container " +
        (isDarkMode ? "dark-mode-send-emails" : "")
      }
    >
      <NavBar isDarkMode={isDarkMode} />

      <Link
        to="/blog"
        className="back-icon-send-emails"
        aria-label="Voltar ao blog"
      >
        <FaArrowLeft />
      </Link>

      <img
        src={HeroBanner}
        alt="Envelopes representando o envio de e-mails"
        className="send-emails-hero"
      />

      <main className="send-emails-page">
        <h2>Enviando e-mails de um formulário com Node.js</h2>
        <p>
          Em muitos sites existe a necessidade de receber informações enviadas
          por um formulário de contato. Em vez de simplesmente armazenar esses
          dados, uma alternativa é fazer com que o backend transforme cada
          envio do formulário em um e-mail.
        </p>
        <p>
          Neste projeto, implementei esse fluxo utilizando{" "}
          <strong>
            Node.js + Express no backend e o Resend para realizar o envio dos
            e-mails
          </strong>
          . O Resend disponibiliza um SDK para Node.js e pode ser utilizado
          diretamente dentro de rotas do Express.
        </p>

        <nav className="send-emails-nav">
          <h2 className="send-emails-nav-title">Sumário</h2>
          <ul className="send-emails-nav-list">
            {sections.map(([id, title]) => (
              <li key={id}>
                <a
                  className="send-emails-nav-link"
                  href={"#" + id}
                  onClick={(event) => scrollToSection(event, id)}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <hr className="hr hr-blurry" />

        <section className="send-emails-section">
          <h2 id="entendendo-fluxo-envio">Entendendo o fluxo de envio</h2>
          <img
            src={FormImage}
            alt="Formulário de contato usado no fluxo de envio de e-mails"
            className="send-emails-section-image"
          />
          <p>
            Antes de começar a implementação, é importante entender como as
            informações percorrem a aplicação.
          </p>

          <p>O funcionamento ficou assim:</p>

          <CodeBlock code={flowCode} />

          <p>
            O frontend não se comunica diretamente com o Resend. Ele envia os
            dados para o backend, que fica responsável pela validação e pelo
            envio do e-mail.
          </p>
        </section>

        <section className="send-emails-section">
          <h2 id="instalando-dependencias">Instalando as dependências</h2>
          <p>No backend, utilizei algumas bibliotecas:</p>

          <CodeBlock code={dependenciesCode} />

          <p>Cada uma possui uma função diferente:</p>
          <ul>
            <li><code>Express</code> — criação da API;</li>
            <li><code>Resend</code> — envio dos e-mails;</li>
            <li><code>dotenv</code> — gerenciamento das variáveis de ambiente;</li>
            <li><code>Zod</code> — validação dos dados;</li>
            <li><code>CORS</code> — controle das origens que podem acessar a API;</li>
            <li><code>Helmet</code> — configuração de headers relacionados à segurança;</li>
            <li><code>express-rate-limit</code> — limitação da quantidade de requisições.</li>
          </ul>
        </section>

        <section className="send-emails-section">
          <h2 id="configurando-resend">Configurando o Resend</h2>
          <img
            src={ResendImage}
            alt="Página inicial do Resend"
            className="send-emails-section-image"
          />
          <p>
            Depois de criar uma conta no Resend, é necessário gerar uma{" "}
            <strong>API Key</strong>.
          </p>
          <p>
            Essa chave será utilizada pelo backend para se autenticar no
            serviço.
          </p>

          <h3>Configurando as variáveis de ambiente</h3>
          <img
            src={VariableImage}
            alt="Configuração das variáveis de ambiente"
            className="send-emails-section-image"
          />
          <p>
            A API Key não deve ser colocada diretamente no código nem enviada
            para o GitHub.
          </p>
          <p>No projeto, deixei as configurações em variáveis de ambiente:</p>

          <CodeBlock
            code={"RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx\nMAIL_FROM_EMAIL=site@seudominio.com.br\nMAIL_TO=contato@seudominio.com.br"}
          />

          <h3>Inicializando o Resend no backend</h3>
          <img
            src={NodeResendImage}
            alt="Integração entre Node.js e Resend"
            className="send-emails-section-image"
          />
          <p>No Node.js, importamos e inicializamos o Resend:</p>
          <CodeBlock
            code={'import { Resend } from "resend";\n\nconst resend = new Resend(process.env.RESEND_API_KEY);'}
          />
          <p>
            Assim, o backend consegue se autenticar no Resend sem expor a chave
            no frontend.
          </p>
          <blockquote className="send-emails-important">
            <strong>Importante:</strong> a <code>RESEND_API_KEY</code> deve
            permanecer exclusivamente no backend. O navegador nunca deve ter
            acesso a ela.
          </blockquote>
        </section>

        <hr className="hr hr-blurry" />

        <section className="send-emails-section">
          <h2 id="criando-rota-formulario">Criando a rota do formulário</h2>
          <img
            src={PostImage}
            alt="Rota POST do formulário de contato"
            className="send-emails-section-image"
          />
          <p>No meu caso, o frontend envia os dados para:</p>
          <CodeBlock code="POST /api/contact" />
          <p>
            Essa rota será responsável por receber os dados preenchidos pelo
            usuário, validá-los e posteriormente realizar o envio.
          </p>
        </section>

        <hr className="hr hr-blurry" />

        <section className="send-emails-section">
          <h2 id="validando-dados-zod">Validando os dados com Zod</h2>
          <img
            src={ZodImage}
            alt="Validação de dados utilizando Zod"
            className="send-emails-section-image"
          />
          <p>
            Antes de enviar qualquer e-mail, valido o conteúdo recebido
            utilizando o Zod.
          </p>
          <CodeBlock
            code={'const contactSchema = z.object({\n  name: z.string().trim().min(2).max(80),\n  email: z.string().trim().email().max(120),\n  company: z.string().trim().max(120).optional().or(z.literal("")),\n  role: z.string().trim().max(120).optional().or(z.literal("")),\n  phone: z.string().trim().max(40).optional().or(z.literal("")),\n  message: z.string().trim().min(5).max(4000),\n});'}
          />
          <p>
            Isso impede, por exemplo, que uma requisição envie uma mensagem
            vazia ou um endereço de e-mail em formato inválido.
          </p>

          <h3>Validando os dados recebidos pela rota</h3>
          <img
            src={Status400Image}
            alt="Resposta de erro 400 da rota de contato"
            className="send-emails-section-image"
          />
          <p>Dentro da rota:</p>
          <CodeBlock
            code={'app.post("/api/contact", async (req, res) => {\n  const parsed = contactSchema.safeParse(req.body);\n\n  if (!parsed.success) {\n    return res.status(400).json({\n      ok: false,\n      message: "Verifique os campos e tente novamente.",\n    });\n  }\n\n  // envio do e-mail...\n});'}
          />
          <p>
            Se os dados não estiverem de acordo com o schema definido, a API
            retorna um erro <code>400</code> e o envio não continua.
          </p>
        </section>

        <hr className="hr hr-blurry" />

        <section className="send-emails-section">
          <h2 id="enviando-email-resend">Enviando o e-mail com Resend</h2>
          <img
            src={ResendSecondImage}
            alt="Envio de e-mail utilizando o Resend"
            className="send-emails-section-image"
          />
          <p>
            Depois da validação, os dados recebidos podem finalmente ser
            enviados ao Resend.
          </p>
          <CodeBlock code={resendSendCode} />
          <p>
            O SDK permite definir informações como remetente, destinatário,
            assunto, conteúdo HTML e endereço para resposta.
          </p>
          <p>
            No meu projeto, também criei uma função <code>buildMail()</code>{" "}
            para evitar a repetição dessa estrutura em diferentes rotas.
          </p>
        </section>

        <hr className="hr hr-blurry" />

        <section className="send-emails-section">
          <h2 id="configurando-reply-to">Configurando o Reply-To</h2>
          <img
            src={ReplyImage}
            alt="Configuração do endereço Reply-To"
            className="send-emails-section-image"
          />
          <p>Um detalhe importante da implementação é:</p>
          <CodeBlock code="replyTo: email" />
          <p>
            O e-mail continua sendo enviado pelo endereço configurado no
            domínio:
          </p>
          <CodeBlock code="site@seudominio.com.br" />
          <p>
            Porém, quando clico em <strong>Responder</strong> no cliente de
            e-mail, a resposta é direcionada para o endereço que o usuário
            informou no formulário.
          </p>
          <p>
            Isso permite responder diretamente ao usuário sem precisar copiar
            manualmente o endereço dele.
          </p>
        </section>

        <hr className="hr hr-blurry" />

        <section className="send-emails-section">
          <h2 id="dominio-proprio-resend">
            Configurando um domínio próprio no Resend
          </h2>
          <img
            src={DomainImage}
            alt="Configuração de um domínio próprio no Resend"
            className="send-emails-section-image"
          />
          <p>
            Para utilizar um endereço do próprio domínio como remetente,
            também precisei adicionar o domínio ao Resend.
          </p>
          <p>Por exemplo:</p>
          <CodeBlock code="site@seudominio.com.br" />
          <p>
            O Resend precisa verificar que o domínio realmente está autorizado
            a realizar esses envios.
          </p>
          <p>
            Para isso, é necessário configurar alguns registros DNS.
          </p>
        </section>

        <hr className="hr hr-blurry" />

        <section className="send-emails-section">
          <h2 id="dns-registro-br">Configurando o DNS no Registro.br</h2>
          <img
            src={DnsImage}
            alt="Configuração da zona DNS no Registro.br"
            className="send-emails-section-image"
          />
          <p>
            No meu caso, o gerenciamento do domínio é realizado pelo{" "}
            <strong>Registro.br</strong>.
          </p>
          <p>
            Foi necessário adicionar no DNS os registros fornecidos pelo
            Resend.
          </p>
          <p>O processo ficou aproximadamente assim:</p>
          <CodeBlock
            code={"Resend\n   ↓\nAdicionar domínio\n   ↓\nResend fornece registros DNS\n   ↓\nAdicionar registros no Registro.br\n   ↓\nAguardar propagação\n   ↓\nResend verifica o domínio\n   ↓\nDomínio liberado para envio"}
          />

          <h3>SPF e DKIM</h3>
          <img
            src={SpfImage}
            alt="Configuração dos registros SPF e DKIM"
            className="send-emails-section-image"
          />
          <p>
            O Resend utiliza configurações como <strong>SPF e DKIM</strong> para
            autenticar o envio.
          </p>
          <p>
            De maneira simplificada, esses registros ajudam os servidores de
            e-mail a verificar se o serviço está autorizado a enviar mensagens
            utilizando aquele domínio.
          </p>
          <blockquote className="send-emails-important">
            <strong>Importante:</strong> não copie registros DNS de outro
            domínio ou de outro tutorial. Os valores devem ser obtidos
            diretamente no painel do Resend para o domínio que está sendo
            configurado.
          </blockquote>
        </section>

        <hr className="hr hr-blurry" />

        <section className="send-emails-section">
          <h2 id="protegendo-rota-envio">Protegendo a rota de envio</h2>
          <p>
            Como <code>/api/contact</code> fica acessível pela internet,
            qualquer pessoa — ou bot — poderia tentar realizar diversas
            requisições.
          </p>
          <p>
            Por isso, também adicionei algumas proteções à API.
          </p>

          <h3>Limitando requisições com Rate Limit</h3>
          <img
            src={RatedImage}
            alt="Configuração do Rate Limit para a API"
            className="send-emails-section-image"
          />
          <p>Utilizei o <code>express-rate-limit</code>:</p>
          <CodeBlock
            code={'app.use(\n  "/api/",\n  rateLimit({\n    windowMs: 15 * 60 * 1000,\n    max: 500,\n    standardHeaders: true,\n    legacyHeaders: false,\n  })\n);'}
          />
          <p>
            Nesse exemplo, existe um limite de requisições dentro de uma
            janela de 15 minutos.
          </p>
          <p>
            O valor adequado depende do tráfego e das características de cada
            aplicação. <strong>500 requisições a cada 15 minutos é o valor
            utilizado neste projeto, e não uma recomendação universal.</strong>
          </p>

          <h3>Outras proteções utilizadas</h3>
          <p>Além do Rate Limit, também utilizei:</p>
          <ul>
            <li><code>Helmet</code>;</li>
            <li>Limite para o tamanho do JSON recebido;</li>
            <li>Validação dos dados com Zod;</li>
            <li>Configuração de CORS;</li>
            <li>Escape do conteúdo inserido no HTML;</li>
            <li>Variáveis de ambiente para informações sensíveis.</li>
          </ul>
        </section>

        <hr className="hr hr-blurry" />

        <section className="send-emails-section">
          <h2 id="tratando-erros-envio">Tratando erros no envio</h2>
          <img
            src={ErrorImage}
            alt="Tratamento de erro no envio de e-mail"
            className="send-emails-section-image"
          />
          <p>
            O envio também precisa considerar a possibilidade de o Resend
            retornar algum erro.
          </p>
          <p>No meu projeto:</p>
          <CodeBlock
            code={'const { error } = await resend.emails.send(mailOptions);\n\nif (error) {\n  console.error("Resend Error:", error);\n  throw new Error(error.message);\n}'}
          />
          <p>Caso alguma coisa dê errado, a API retorna:</p>
          <CodeBlock
            code={'return res.status(500).json({\n  ok: false,\n  message: "Não foi possível enviar o e-mail, tente novamente.",\n});'}
          />
          <p>
            Dessa maneira, o frontend consegue identificar que o envio falhou
            e apresentar uma mensagem adequada ao usuário.
          </p>
        </section>

        <hr className="hr hr-blurry" />

        <section className="send-emails-section">
          <h2 id="resultado-final">Resultado final</h2>
          <img
            src={ResultImage}
            alt="Fluxo completo da aplicação de envio de e-mails"
            className="send-emails-section-image"
          />
          <p>
            Depois de todas as configurações, o fluxo completo da aplicação
            ficou assim:
          </p>
          <CodeBlock
            code={"FORMULÁRIO\n     │\n     │ POST /api/contact\n     ▼\nEXPRESS\n     │\n     ├── Validação com Zod\n     ├── Rate Limit\n     ├── Sanitização/escape\n     │\n     ▼\nRESEND API\n     │\n     ▼\nSERVIDOR DE E-MAIL\n     │\n     ▼\n📩 Caixa de entrada"}
          />
          <p>
            O ponto mais importante dessa arquitetura é que{" "}
            <strong>
              o frontend nunca envia o e-mail diretamente pelo Resend
            </strong>
            .
          </p>
          <p>
            O frontend envia apenas os dados do formulário para a API. O
            backend é responsável por validar essas informações, acessar o
            Resend utilizando a API Key e solicitar o envio do e-mail.
          </p>
        </section>

        <hr className="hr hr-blurry" />
      </main>

      <Footer />
    </div>
  );
};

export default SendEmails;
