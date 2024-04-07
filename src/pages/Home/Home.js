import React from "react";
import { TypeWriter } from "../../components/TypeWriter/TypeWriter";
import NavBar from "../../components/NavBar/NavBar";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaWhatsapp, FaGithubSquare } from "react-icons/fa";
import ImageWhitePage from "../../assets/images/camilawhitepage.png";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <div className="gray-background"></div>
      <div className="text-and-image-container">
        <div className="text-container">
          <TypeWriter text="Hello, i'm Camila" />
          <p>
            Full-stack Developer and <br />
            Computer Vision. <br /> <br />
            Full-stack developer, applying knowledge in <br /> React JS, Node
            JS, TypeScript, and Computer <br /> Vision in Python. Contributing
            to assistive <br /> technology.
          </p>
        </div>
      </div>
      <div className="content-container">
        <ImageSlider />
        <div className="icons-container">
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
      </div>
      <div className="button-container">
        <Link to="/projects">
          <button>See my projects</button>
        </Link>
      </div>
      <div className="image-container">
        <img src={ImageWhitePage} alt="" className="centered-image" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
