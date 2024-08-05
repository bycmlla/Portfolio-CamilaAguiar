const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();

const server = express();
const PORT = process.env.PORT || 4000;

server.use(cors());
server.use(bodyParser.json());

require('dotenv').config();
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS);


server.post("/enviarEmail", (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'camilacarvalhoagui@gmail.com',
      pass: 'bqww xkra tllp bsss',
    },
  });

  const { name, email, subject, description } = req.body;

  const mailOptions = {
    from: email,
    to: 'camilacarvalhoagui@gmail.com',
    subject: subject,
    text: `Nome: ${name} Email: ${email} \n${description}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    console.log(mailOptions)
    if (error) {
      console.log(error);
      res.status(500).send("Erro ao enviar o email.");
    } else {
      console.log("Email enviado: " + info.response);
      res.status(200).send("Email enviado com sucesso.");
    }
  });
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
