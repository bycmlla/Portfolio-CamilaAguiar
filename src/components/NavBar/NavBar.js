import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../../assets/icons/CamilaCarvalho.png";
import { MdDarkMode } from "react-icons/md";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="logo">
          <img src={Logo} alt="" />
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <MdDarkMode className="dark-mode-icon" size={24} />
        </li>
        <li>
          <Link to="/projects">My Projects</Link>
        </li>
        <li>
          <Link to="/about">About me</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
