import React from "react";
import "./header.css";
import Button from "../Button/Button";
import * as CONSTANTS from "../constants";

const Header = () => {
  return (
    <div className="header">
      <Button
        text={CONSTANTS.LOGIN_TEXT}
        onClick={() => console.warn(CONSTANTS.NOT_IMPLEMENTED_BUTTON_MESSAGE)}
      />
    </div>
  );
};

export default Header;
