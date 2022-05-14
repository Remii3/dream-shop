import React from "react";
import "../../styles/scss/componentsStyle/welcomeScreen.scss";

const WelcomeScreen = () => {
  const seeMoreBtnClickHandler = () => {
    const mainSection = document.getElementById("mainPage");
    mainSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="welcomeScreen">
      <div className="shadowOverlay" />
      <div className="welcomeScreen_titleSpace">
        <h1 className="titleSpace_title">
          W<span className="title_coloredLetter">el</span>co
          <span className="title_coloredLetter">m</span>e
        </h1>
        <h1 className="titleSpace_title">To</h1>
        <h1 className="titleSpace_title">GooDreamShop</h1>
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
