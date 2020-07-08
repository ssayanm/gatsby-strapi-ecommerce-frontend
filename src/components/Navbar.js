import React from "react";
import { Link } from "gatsby";
import logo from "../assets/images/Xtreme.png";
import { FaAlignRight } from "react-icons/fa";
import PageLinks from "../constants/links";
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar container">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" width="90%" />
          </Link>
        </div>
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignRight></FaAlignRight>
        </button>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  );
};

export default Navbar;
