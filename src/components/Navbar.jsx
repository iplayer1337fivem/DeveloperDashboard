import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
// import navbar.module.css for navbar styling
import styles from "./Navbar.module.css";
// import fontawesome for using the icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Navbar({ setDarkMode, darkMode }) {
  // State to track if the navbar is collapsed
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Function to toggle the collapse state
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className={`${styles.nav} navbar navbar-expand-lg navbar-light`}>
      <div className="container-fluid">
        {/* Centering the Website Name */}
        <div
          className={`d-flex flex-grow-1  ${styles.justify} ms-5 position-relative`}
        >
          <Link className="navbar-brand text-white fs-2 fw-bold" to="/">
            HOME
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler fs-6 me-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          {isCollapsed ? (
            <span className="navbar-toggler-icon"></span>
          ) : (
            <span className="close-icon">✖</span>
          )}
        </button>

        {/* Right side: Navigation Links */}
        <div
          className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={`${styles.color} nav-link fs-5`}
                to="/developerDashboard"
              >
                DeveloperDashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`${styles.color} nav-link fs-5`} to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`${styles.color} nav-link fs-5`} to="/faq">
                FAQ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`${styles.color} nav-link fs-5`} to="/terms">
                Terms
              </NavLink>
            </li>
            <li className="nav-item">
              <button
                onClick={() => setDarkMode((prevState) => !prevState)}
                className={`${styles.button} px-2`}
              >
                <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
