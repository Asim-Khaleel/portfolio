import React from "react";
import "./footer.css";

const Footer = ({ link, text }) => {
  return (
    <div className="footer">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </div>
  );
};

export default Footer;
