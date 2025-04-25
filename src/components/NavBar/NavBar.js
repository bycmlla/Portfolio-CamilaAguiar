import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import LogoDark from "../../assets/icons/CamilaCarvalho.png";
import LogoLight from "../../assets/icons/CamilaCarvalho-white.png";
import { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import ScrollReveal from "scrollreveal";
import { useColor } from "../../contexts/ColorContext";
import { useTheme } from "../../contexts/ThemeContext";

const colors = ["#9747FF", "#2291A4", "#F10091"];

const NavBar = ({ onOpenContact }) => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const { setSelectedColor } = useColor();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

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
          <Link to="/projects">Projetos</Link>
        </li>
        <li>
          <Link to="/breve">Blog</Link>
        </li>
        <li>
          <Link to="/about">Sobre Mim</Link>
        </li>
        <li>
          <button className="button-contact-navbar" onClick={onOpenContact}>
            Contato
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
