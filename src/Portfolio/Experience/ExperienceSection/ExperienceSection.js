import React from "react";
import "./ExperienceSection.css";

// Function to convert date to "Dec 12, 2023" format
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const ExperienceSection = ({
  companyName,
  startDate,
  endDate,
  description,
}) => {
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);

  return (
    <div className="experience-section">
      <div className="headerText">{companyName}</div>
      <span className="date">{formattedStartDate}</span> -
      <span className="date">{formattedEndDate}</span>
      <div className="description">{description}</div>
    </div>
  );
};

export default ExperienceSection;
