import React from "react";
import Header from "./Header/Header";
import About from "./About/About";
import Profile from "./ProfileSection/Profile";
import Footer from "./Footer/Footer";
import Experience from "./Experience/Experience";
import * as CONSTANTS from "./constants";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Header />
      <div className="body">
        <div className="aboutAndExperience">
          <About
            headerText={CONSTANTS.ABOUT}
            description={CONSTANTS.ABOUT_DESCRIPTION}
          />
          <Experience />
        </div>
        <Profile
          name={CONSTANTS.NAME}
          pictureUrl={CONSTANTS.PICTURE_URL}
          size={CONSTANTS.SIZE}
          skills={CONSTANTS.SKILLS}
        />
      </div>
      <Footer link={CONSTANTS.LINKDIN_PROFILE} text={CONSTANTS.LINKDIN} />
    </div>
  );
};

export default Portfolio;
