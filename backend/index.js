const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();


const server = express();
const PORT = process.env.PORT || 4000;

server.use(cors());
server.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


server.post("/enviarEmail", (req, res) => {
  const { destinatario, assunto, corpo } = req.body;

  const mailOptions = {
    from: "by.cmlla0107@gmail.com",
    to: destinatario,
    subject: assunto,
    text: corpo,
  };

  transporter.sendMail(mailOptions, (error, info) => {
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
