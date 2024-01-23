import React from "react";
import "./Avatar.css";

const Avatar = ({ pictureUrl, size }) => {
  return (
    <div className="avatar">
      <img
        src={pictureUrl}
        alt="Avatar"
        style={{ width: size, height: size, objectFit: "cover" }}
      />
    </div>
  );
};

export default Avatar;
