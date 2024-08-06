import React, {useState, useEffect} from "react";
import NavBar from "../../components/NavBar/NavBar";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaWhatsapp, FaGithubSquare } from "react-icons/fa";
import Curriculum from "../../assets/images/curriculumpng.jpg";
import Curriculum2 from "../../assets/images/curriculumpng2.jpg";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./AboutMe.css";
import ScrollReveal from "scrollreveal";
import Skills from "../../components/Skills/Skills";

const AboutMe = () => {
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

  
  ScrollReveal().reveal(".reveal-right", {
    origin: "right",
    distance: "20px",
    duration: 2000,
    delay: 200,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    reset: true,
  });

  return (
    <div className={`about-me-container ${isDarkMode ? "dark-mode-about" : ""}`}>
      <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}  />
      <div className="about-me-section">
        <div className="icons-container-custom">
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
            <li>
              <a href="mailto:by.cmlla0107@gmail.com">
                <MdEmail />
              </a>
            </li>
          </ul>
        </div>
        <div className="about-me-content">
          <h1>About me.</h1>
          <p>
            My journey started back in university where I started my YouTube
            channel to learn new things and teach other people all the cool
            stuff within computer vision and AI. I pretty much fell in love with
            creating content, staying up to date with the newest technologies
            and making some awesome projects. <br /> <br />
            Now we are here. I'm growing my personal brand while doing what I
            love. I have a lot of things going on right now as you can see here
            on my website. We have some pretty cools things like my YouTube
            channel, courses, video content platform for companies, freelance
            company, tons of collaborations, and the best of all, an awesome and
            engaging community. <br /> <br />
            Feel free to reach out to me if you are interested in partnering up
            or collaborate in some way. <br /> <br />
            Cami
          </p>
        </div>
        </div>
        <div className="skills-about">
        <Skills/>
        </div>
      <div className="curriculum-container">
        <img src={Curriculum} alt="" />
        <img src={Curriculum2} alt="" />
        <div className="button-home">
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutMe;
