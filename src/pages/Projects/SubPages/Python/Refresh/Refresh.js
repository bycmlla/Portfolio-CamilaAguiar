import { useState, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavBar from "../../../../../components/NavBar/NavBar";
import PbiPyBlack from "../../../../../assets/images/python/pbi black.png"
import PbiPyWhite from "../../../../../assets/images/python/pbi white.png"

const Refresh = () => {

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const codeRef = useRef(null);
  const [showNotification, setShowNotification] = useState(false);

  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    localStorage.setItem("darkMode", newDarkModeState.toString());
  };

  const copyToClipboard = () => {
    if (codeRef.current) {
      const code = codeRef.current.innerText;
      navigator.clipboard.writeText(code).then(() => {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
      });
    }
  };

  return (
    <div className={`rosapage-container ${isDarkMode ? "dark-mode-rosa" : ""}`}>
      <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div>
        <Link to={"/python"} className="back-icon" style={{color: 'white'}}>
          <FaArrowLeft />
        </Link>
      </div>
      <img src={isDarkMode ? PbiPyWhite : PbiPyBlack} alt="Logo do Python e do Power BI" width="100%"/>
      <div className="rosa-page">
        
      </div>
    </div>
  );
};

export default Refresh;
