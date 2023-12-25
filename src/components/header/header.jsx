import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Logo from "../../assets/BF1LOGO-removebg-preview.png";

function Header() {
  return (
    <header>
      <img className="logo bf1" src={Logo} alt="" />
      <nav>
        <ul>
          <Link style={{ textDecoration: "none" }} to="/">
            <li>HOME</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/contact">
            <li>CONTACT</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/photos">
            <li>PHOTOS</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
