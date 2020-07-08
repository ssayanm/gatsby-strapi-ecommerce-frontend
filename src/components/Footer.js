import React from "react";
import SocialLinks from "../constants/socialLinks";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links" />
        <h5>
          copyright &copy; {new Date().getFullYear()} all rights reserved
          <br />
          <span>
            Developed with <FaHeart style={{ color: "#ff355e" }} /> by Sayan
            Mukherjee
          </span>
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
