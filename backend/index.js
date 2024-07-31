const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const server = express();
const PORT = process.env.PORT || 3000;

server.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "Camomilacamila71@gmail.com",
    pass: "qwertyuiop098#",
  },
});

server.post("/enviar-email", (req, res) => {
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
