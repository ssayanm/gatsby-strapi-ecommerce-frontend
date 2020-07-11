import React from "react"
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"
import { FcDam } from "react-icons/fc"
import PageLinks from "../constants/links"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar container">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <FcDam className="logo" />
          </Link>
        </div>
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignRight />
        </button>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
