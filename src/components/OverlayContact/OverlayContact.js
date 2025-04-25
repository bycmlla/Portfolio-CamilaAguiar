import React, { useEffect } from "react";
import "./OverlayContact.css";
import { FaGithubAlt } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { BiLogoGmail } from "react-icons/bi";
import { useTheme } from "../../contexts/ThemeContext";
import { useColor } from "../../contexts/ColorContext";
import { IoClose } from "react-icons/io5";

export const OverlayContact = ({ isOverlayOpen, handleCloseOverlay }) => {
  const { selectedColor } = useColor();
  const { isDarkMode } = useTheme();

  const colorClass = selectedColor
    ? `color-${selectedColor.replace("#", "")}`
    : "";

  useEffect(() => {
    if (isOverlayOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOverlayOpen]);

  if (!isOverlayOpen) return null;
  return (
    <div>
      {isOverlayOpen && (
        <div
          className={`overlay ${colorClass} ${isDarkMode ? "dark-mode" : ""}`}
        >
          <div className="overlay-content-contact">
            <button className="close-overlay" onClick={handleCloseOverlay}>
              <IoClose />
            </button>
            <section className="contact-container-overlay">
              <div className="title-contatos">
                <h3>Contatos</h3>
                <p>Fale comigo usando os contatos abaixo!</p>
              </div>
              <div className="inner-contact-overlay">
                <ul>
                  <li style={{ marginRight: 30 }} className="github">
                    <a
                      href="https://github.com/bycmlla"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button type="button">
                        <FaGithubAlt />
                      </button>
                    </a>
                    <h5>Github</h5>
                    <p>@bycmlla</p>
                  </li>
                  <li className="linkedin">
                    <a
                      href="https://www.linkedin.com/in/camilaaguiarr/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button type="button">
                        <FiLinkedin />
                      </button>
                    </a>
                    <h5>LinkedIn</h5>
                    <p>@camilacarvalho</p>
                  </li>
                  <li style={{ marginRight: 20 }}>
                    <a
                      href="https://wa.me/5533998759437"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button type="button">
                        <PiWhatsappLogoFill />
                      </button>
                    </a>
                    <h5>Whatsapp</h5>
                    <p>(33) 9 9875-9437</p>
                  </li>
                  <li>
                    <a
                      href="mailto:by.cmlla0107@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button type="button">
                        <BiLogoGmail />
                      </button>
                    </a>
                    <h5>E-mail</h5>
                    <p>camilacarvalhoagui@gmail.com</p>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};
