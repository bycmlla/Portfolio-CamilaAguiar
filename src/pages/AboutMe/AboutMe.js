import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Curriculum from "../../assets/images/curriculumpng.png";
import { Link } from "react-router-dom";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <NavBar />
      <div className="about-me-section">
        <div className="icons-container-custom">
          <ul>
            <li>
              <a href="mailto:by.cmlla0107@gmail.com">
                <MdEmail />
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
              <a href="https://www.instagram.com/by_cmlla/">
                <RiInstagramFill />
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
      <div className="curriculum-container">
        <img src={Curriculum} alt="" />
        <div className="button-home">
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
