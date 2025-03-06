// import React, { useEffect, useState } from "react";
// import NavBar from "../../components/NavBar/NavBar";
// import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
// import { FaGithubSquare } from "react-icons/fa";
// import Footer from "../../components/Footer/Footer";
// import { Link } from "react-router-dom";
// import VideoBlack from "../../assets/videos/video01.mp4";
// import VideoWhite from "../../assets/videos/videowhite.mp4";
// import axios from "axios";
// import "./Contact.css";

// const Contact = () => {
//   const [isDarkMode, setIsDarkMode] = useState(
//     localStorage.getItem("darkMode") === "true"
//   );

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//     console.log(value)
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     axios
//       .post("http://localhost:4000/enviarEmail", {
//         name: formData.name,
//         email: formData.email,
//         subject: formData.subject,
//         description: formData.description,
//       })
//       .then((response) => {
//         alert(response.data);
//         setFormData({
//           name: "",
//           email: "",
//           subject: "",
//           description: "",
//         });
//       })
//       .catch((error) => {
//         console.error("Erro:", error);
//         alert("Erro ao enviar o email.");
//       });
//   };
  

//   useEffect(() => {
//     setIsDarkMode(localStorage.getItem("darkMode") === "true");
//   }, []);

//   const toggleDarkMode = () => {
//     const newDarkModeState = !isDarkMode;
//     setIsDarkMode(newDarkModeState);
//     localStorage.setItem("darkMode", newDarkModeState.toString());

//     window.location.reload();
//   };

//   return (
//     <div
//       className={`div-container-contact ${
//         isDarkMode ? "dark-mode-contact" : ""
//       }`}
//     >
//       <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

//       <section className="talk-me-container video-background">
//         <div className="video-overlay">
//           <p>Talk with me!</p>
//         </div>
//         <video
//           key={isDarkMode ? "dark" : "light"}
//           className="video"
//           autoPlay
//           loop
//           muted
//           preload="auto"
//         >
//           <source src={isDarkMode ? VideoBlack : VideoWhite} type="video/mp4" />
//           Seu navegador não suporta vídeos em HTML5.
//         </video>
//       </section>

//       <section className="contact-container">
//         <div className="contact">
//           <h6>Contato</h6>
//           <a href="mailto:by.cmlla0107@gmail.com" className="email-text">
//             by.cmlla0107@gmail.com
//           </a>
//         </div>
//         <div className="click-here">
//           <h6>Clique aqui</h6>
//           <ul>
//             <li>
//               <a href="https://github.com/bycmlla">
//                 <FaGithubSquare />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.linkedin.com/in/camila-de-aguiar-ti1808/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaLinkedin />
//               </a>
//             </li>
//             <li>
//               <a href="https://wa.me/5533998759437">
//                 <FaWhatsapp />
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <section className="input-email-container">
//         <div className="input-email">
//           <p className="title-email">Send me a message</p>
//           <form className="teste" onSubmit={handleSubmit}>
//             <div className="teste1">
//               <input
//                 type="text"
//                 className="input-subject"
//                 name="name"
//                 placeholder="Seu nome"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="email"
//                 className="input-subject"
//                 name="email"
//                 placeholder="Seu e-mail"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="text"
//                 className="input-subject"
//                 name="subject"
//                 placeholder="Assunto"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <textarea
//               placeholder="Descrição"
//               name="description"
//               rows="10"
//               className="textarea"
//               value={formData.description}
//               onChange={handleChange}
//               required
//             ></textarea>
//             <div>
//               <button type="submit" className="button-send">
//                 enviar
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>

//       <section className="text-talk-container">
//         <div className="text-talk">
//           <p>
//             Oh, you don't want to talk with me? <br />
//             Damn, alright, just take a quick look at my projects then.
//           </p>
//           <Link to="/projects">
//             <button>veja meus projetos</button>
//           </Link>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Contact;
