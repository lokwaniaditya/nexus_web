import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Nexus</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true} className="nav_text">
                Home
              </Link>
            </li>
            <li>
              <Link to="experience" spy={true} smooth={true} className="nav_text">
                About
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true} className="nav_text">
                Projects
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true} className="nav_text">
                Events
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default navbar;
