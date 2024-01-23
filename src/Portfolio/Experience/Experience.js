import React from "react";
import "./experience.css";
import ExperienceSection from "./ExperienceSection/ExperienceSection";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <article className="experience">
      <span className="headerText">Experience</span>
      {EXPERIENCES.map((experience) => (
        <ExperienceSection
          key={experience.id}
          companyName={experience.companyName}
          startDate={experience.startDate}
          endDate={experience.endDate}
          description={experience.description}
        />
      ))}
    </article>
  );
};

export default Experience;
