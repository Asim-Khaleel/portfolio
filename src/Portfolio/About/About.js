import React from "react";
import "./about.css";

const About = ({ headerText, description }) => {
  return (
    <article className="about">
      <span className="headerText">{headerText}</span>
      <p className="description">{description}</p>
    </article>
  );
};

export default About;
