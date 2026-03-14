import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import LogoDark from "../../assets/icons/CamilaCarvalho.png";
import LogoLight from "../../assets/icons/CamilaCarvalho-white.png";
import TranslateWhite from "../../assets/icons/translatewhite.png";
import TranslateBlack from "../../assets/icons/translate.png";
import { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import ScrollReveal from "scrollreveal";
import { useColor } from "../../contexts/ColorContext";
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";

const colors = ["#9747FF", "#2291A4", "#F10091"];

const NavBar = ({ onOpenContact }) => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const { setSelectedColor } = useColor();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const handleHamburgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setIsActive(true);
  }, [location.pathname]);

  useEffect(() => {
    ScrollReveal().reveal(".reveal-top", {
      origin: "top",
      distance: "20px",
      duration: 2000,
      delay: 200,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      reset: false,
    });
  }, []);

  const texts = {
    pt: {
      projects: "Projetos",
      blog: "Blog",
      about: "Sobre Mim",
      contact: "Contato",
    },
    en: {
      projects: "Projects",
      blog: "Blog",
      about: "About Me",
      contact: "Contact",
    },
  };

  return (
    <nav
      className={`my-navbar ${isActive ? "active" : ""} ${
        isDarkMode ? "dark-mode" : ""
      } reveal-top ${menuOpen ? "active-menu" : ""}`}
    >
      <div className="navbar-brand">
        <a href="#/" className="logo">
          <img
            src={isDarkMode ? LogoLight : LogoDark}
            alt="Logo"
            aria-hidden="true"
          />
        </a>
      </div>
      <div
        className={`hamburger-icon ${menuOpen ? "active" : ""}`}
        onClick={handleHamburgerClick}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className="nav-links">
        <li>
          <MdDarkMode
            className="dark-mode-icon"
            onClick={toggleDarkMode}
            size={24}
          />
        </li>

        <li>
          <img
            src={isDarkMode ? TranslateWhite : TranslateBlack}
            alt="Translate"
            className="translate-icon"
            onClick={toggleLanguage}
            style={{ width: 24, height: 24, cursor: "pointer" }}
          />
        </li>
        <li className="color-palette">
          {" "}
          {colors.map((color) => (
            <button
              key={color}
              className="color-button"
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </li>
        <li>
          <Link to="/projects">{texts[language].projects}</Link>
        </li>
        <li>
          <Link to="/blog">{texts[language].blog}</Link>
        </li>
        <li>
          <Link to="/about">{texts[language].about}</Link>
        </li>
        <li>
          <button className="button-contact-navbar" onClick={onOpenContact}>
            {texts[language].contact}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
