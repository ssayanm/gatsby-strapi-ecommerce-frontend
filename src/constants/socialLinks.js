import React from "react";
import {
  FaEnvelopeSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <FaWhatsappSquare className="social-icon"></FaWhatsappSquare>,
    url: "https://wa.me/13455250403",
  },
  {
    id: 4,
    icon: <FaEnvelopeSquare className="social-icon"></FaEnvelopeSquare>,
    url: "mailto:info@xtremeautocare.ky",
  },
  {
    id: 5,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/xtreme_auto_care_345/",
  },
];
const links = data.map((link) => {
  return (
    <li key={link.id}>
      <a
        href={link.url}
        className="social-link"
        target="_blank"
        rel="noreferrer"
      >
        {link.icon}
      </a>
    </li>
  );
});

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  );
};
