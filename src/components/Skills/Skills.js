import React from "react";
import "./Skills.css";
import { RiReactjsFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io5";
import {
  FaAngular,
  FaHtml5,
  FaSass,
  FaFigma,
  FaBootstrap,
  FaNode,
  FaJava,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { SiOpencv, SiPostgresql, SiPowerbi, SiMysql } from "react-icons/si";

const Skills = () => {
  return (
    <div>
      <div className="front-end-container">
        <h6>
          Front End Skills <span className="line"></span>
        </h6>
        <div className="front-line-one">
          <ul className="ul-front-one">
            <li>
              <span>React JS</span>
              <RiReactjsFill className="icon-size" />
            </li>
            <li>
              <span>JavaScript</span>
              <IoLogoJavascript className="icon-size" />
            </li>
            <li>
              <span>Angular</span>
              <FaAngular className="icon-size" />
            </li>
            <li>
              <span>TypeScript</span>
              <TbBrandTypescript className="icon-size" />
            </li>
            <li>
              <span>Bootstrap</span>
              <FaBootstrap className="icon-size" />
            </li>
          </ul>
        </div>
        <div className="front-line-two">
          <ul className="ul-front-two">
            <li>
              <span>HTML5</span>
              <FaHtml5 className="icon-size" />
            </li>
            <li>
              <span>CSS3</span>
              <IoLogoCss3 className="icon-size" />
            </li>
            <li>
              <span>SASS</span>
              <FaSass className="icon-size" />
            </li>
            <li>
              <span>Figma</span>
              <FaFigma className="icon-size" />
            </li>
          </ul>
        </div>
        <div className="back-end-container">
          <h6>
            Back End Skills <span className="line"></span>
          </h6>
          <ul className="ul-back-end">
            <li>
              <span>Node JS</span>
              <FaNode className="icon-size" />
            </li>
            <li>
              <span>Java</span>
              <FaJava className="icon-size" />
            </li>
            <li>
              <span>Python</span>
              <FaPython className="icon-size" />
            </li>
            <li>
              <span>OpenCV</span>
              <SiOpencv className="icon-size" />
            </li>
          </ul>
        </div>
        <div className="data-container">
          <h6>
            Data Analytics <span className="line"></span>
          </h6>
          <ul className="ul-back-end">
            <li>
              <span>PostGreSQL</span>
              <SiPostgresql className="icon-size" />
            </li>
            <li>
              <span>Data Analytics</span>
              <FaDatabase className="icon-size" />
            </li>
            <li>
              <span>Power BI</span>
              <SiPowerbi className="icon-size" />
            </li>
            <li>
              <span>MySQL</span>
              <SiMysql className="icon-size" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
