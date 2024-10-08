import "./Navbar.css";
import logo from "../assets/logo.png";
import { useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-wrapper">
      <ul
        className={`mobile-menu ${
          isMenuOpen ? "mobile-menu--open" : "mobile-menu--closed"
        } `}
      >
        <li>
          <a href="#hero" onClick={() => setIsMenuOpen(false)}>
            <span className="material-symbols-rounded">home</span>
            Home
          </a>
        </li>
        <li>
          <a href="#education" onClick={() => setIsMenuOpen(false)}>
            <span className="material-symbols-rounded">school</span>
            Education
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>
            <span className="material-symbols-rounded">done_all</span>
            Projects
          </a>
        </li>
      </ul>

      <nav>
        <div className="logo__container">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="logo-title">Jonas Andersen</h1>
        </div>

        <ul className={`desktop-menu `}>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>

        <button
          className="material-symbols-rounded menu-btn"
          onClick={handleToggleMenu}
        >
          grid_view
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
