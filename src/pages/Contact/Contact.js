import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
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
      <div className="talk-me-container video-background">
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
      </div>

      <div className="contact-container">
        <div className="contact">
          <h6>Contacts</h6>
          <a href="mailto:by.cmlla0107@gmail.com">
            <MdEmail className="email-icon" />
            <p className="email-text">
              <a href="mailto:by.cmlla0107@gmail.com">by.cmlla0107@gmail.com</a>
            </p>
          </a>
        </div>
        <div className="click-here">
          <h6>Click here</h6>
          <ul>
            <li>
              <a href="https://www.instagram.com/by_cmlla/">
                <RiInstagramFill />
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
      </div>
      <div className="input-email-container">
        <div className="input-email">
          <input type="text" className="input-subject" placeholder="Assunto" />
          <textarea
            placeholder="Descrição"
            id=""
            rows="15"
            className="textarea"
          ></textarea>
          <button type="submit" className="button-send">
            send
          </button>
        </div>
      </div>
      <div className="text-talk-container">
        <div className="text-talk">
          <p>
            Oh, you don't want to talk with me? <br />
            Damn, alright, just take a quick look at my projects then.
          </p>
          <Link to="/projects">
            <button>See my projects</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
