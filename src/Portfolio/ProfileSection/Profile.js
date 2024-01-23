import React from "react";
import "./Profile.css";
import Avatar from "./Avatar/Avatar";
import Skills from "./Skills/Skills";

const Profile = ({ pictureUrl, size, name, skills }) => {
  return (
    <aside className="profileSection">
      <Avatar pictureUrl={pictureUrl} size={size} />
      <div className="name">
        <span>{name}</span>
      </div>
      <Skills skills={skills} />
    </aside>
  );
};

export default Profile;
