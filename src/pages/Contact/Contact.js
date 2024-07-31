import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import VideoBlack from "../../assets/videos/video01.mp4";
import VideoWhite from "../../assets/videos/videowhite.mp4";
import "./Contact.css";

const Contact = () => {
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

  return (
    <div
      className={`div-container-contact ${
        isDarkMode ? "dark-mode-contact" : ""
      }`}
    >
      <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

      <section className="talk-me-container video-background">
        <div className="video-overlay">
          <p>Talk with me!</p>
        </div>
        <video
          key={isDarkMode ? "dark" : "light"}
          className="video"
          autoPlay
          loop
          muted
          preload="auto"
        >
          <source src={isDarkMode ? VideoBlack : VideoWhite} type="video/mp4" />
          Seu navegador não suporta vídeos em HTML5.
        </video>
      </section>

      <section className="contact-container">
        <div className="contact">
          <h6>Contacts</h6>
          <a href="mailto:by.cmlla0107@gmail.com">
            <p className="email-text">
              <a href="mailto:by.cmlla0107@gmail.com">by.cmlla0107@gmail.com</a>
            </p>
          </a>
        </div>
        <div className="click-here">
          <h6>Click here</h6>
          <ul>
            <li>
              <a href="https://github.com/bycmlla">
                <FaGithubSquare />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/camila-de-aguiar-ti1808/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://wa.me/5533998759437">
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="input-email-container">
        <div className="input-email">
          <p className="title-email">Send me a message</p>
          <div className="teste">
            <div className="teste1">
              <input
                type="text"
                className="input-subject"
                placeholder="your name"
              />
              <input
                type="email"
                className="input-subject"
                placeholder="your e-mail"
              />
              <input
                type="text"
                className="input-subject"
                placeholder="subject"
              />
            </div>
            <textarea
              placeholder="description"
              rows="10"
              className="textarea"
            ></textarea>
          </div>
          <button type="submit" className="button-send">
            send
          </button>
        </div>
      </section>

      <section className="text-talk-container">
        <div className="text-talk">
          <p>
            Oh, you don't want to talk with me? <br />
            Damn, alright, just take a quick look at my projects then.
          </p>
          <Link to="/projects">
            <button>See my projects</button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
