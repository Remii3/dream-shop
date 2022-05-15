import React from "react";
import "../../styles/scss/componentsStyle/welcomeScreen.scss";

const WelcomeScreen = () => {
  const seeMoreBtnClickHandler = () => {
    const mainSection = document.getElementById("mainPage");
    mainSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="welcomeScreen">
      <ul className="welcomeScreen_animationSpace">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="shadowOverlay" />
      <div className="welcomeScreen_titleSpace">
        <h1 className="titleSpace_title">
          W<span className="title_coloredLetter">el</span>co
          <span className="title_coloredLetter">m</span>e
        </h1>
        <h1 className="titleSpace_title">
          <span className="title_coloredLetter">T</span>o
        </h1>
        <h1 className="titleSpace_title">
          G<span className="title_coloredLetter">oo</span>Dream
          <span className="title_coloredLetter">Sh</span>op
        </h1>
        <button
          className="titleSpace_seeMoreBtn"
          onClick={seeMoreBtnClickHandler}
        >
          See more
        </button>
      </div>
    </section>
  );
};

export default WelcomeScreen;
