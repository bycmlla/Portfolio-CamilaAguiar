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

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const { selectedColor, setSelectedColor } = useColor();
  const { isDarkMode, toggleDarkMode } = useTheme();

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
      } reveal-top`}
    >
      <div className="navbar-brand">
        <a href="/" className="logo">
          <img
            src={isDarkMode ? LogoLight : LogoDark}
            alt="Logo"
            aria-hidden="true"
          />
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <MdDarkMode
            className="dark-mode-icon"
            onClick={toggleDarkMode}
            size={24}
          />
        </li>
        {colors.map((color) => (
          <li key={color}>
            <button
              className="color-button"
              style={{
                backgroundColor: color,
                border: selectedColor === color ? "2px solid white" : "none",
              }}
              onClick={() => setSelectedColor(color)}
            />
          </li>
        ))}
        <li>
          <Link to="/projects">Projetos</Link>
        </li>
        <li>
          <Link to="/about">Sobre Mim</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;