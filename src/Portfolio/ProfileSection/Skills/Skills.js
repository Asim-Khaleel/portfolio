import React from "react";
import "./skill.css";

const Skills = ({ skills }) => {
  return (
    <div className="skill">
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="skill-container">
          <div className="skill-name">{skill.skill}</div>
          <div className="skill-bar">
            <div
              className="skill-fill"
              style={{
                width: `${skill.percentage}%`,
                backgroundColor: "#3498db",
              }}
            >
              {skill.percentage}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
