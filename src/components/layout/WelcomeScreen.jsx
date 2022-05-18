import "../../styles/scss/componentsStyle/welcomeScreen.scss";

const WelcomeScreen = () => {
  const seeMoreBtnClickHandler = () => {
    const mainSection = document.getElementById("mainPage");
    mainSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="welcomeScreen">
      <ul className="welcomeScreen_animationSpace">
        <li className="animationSpace_square"></li>
        <li className="animationSpace_square"></li>
        <li className="animationSpace_square"></li>
        <li className="animationSpace_square"></li>
        <li className="animationSpace_square"></li>
        <li className="animationSpace_square"></li>
        <li className="animationSpace_square"></li>
        <li className="animationSpace_square"></li>
        <li className="animationSpace_square"></li>
        <li className="animationSpace_square"></li>
      </ul>
      <div className="shadowOverlay" />
      <div className="welcomeScreen_titleSpace">
        <h1 className="titleSpace_title ">
          <span className="title_coloredLetter">W</span>el
          <span className="title_coloredLetter">c</span>o
          <span className="title_coloredLetter">m</span>e
        </h1>
        <h1 className="titleSpace_title ">
          <span className="title_coloredLetter">t</span>o
        </h1>
        <h1 className="titleSpace_title">
          <span className="title_coloredLetter">G</span>oo
          <span className="title_coloredLetter">D</span>ream
          <span className="title_coloredLetter">S</span>hop
        </h1>
        <div className="titleSpace_seeMoreBtnSpace">
          <button
            className="seeMoreBtnSpace_seeMoreBtn"
            onClick={seeMoreBtnClickHandler}
          >
            See more
          </button>
        </div>
      </div>
    </section>
  );
};

export default WelcomeScreen;
