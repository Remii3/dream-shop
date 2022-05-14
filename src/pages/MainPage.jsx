import React from "react";
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import "../styles/scss/pagesStyle/mainPage.scss";
const MainPage = () => {
  return (
    <>
      <Nav />
      <section id="mainPage">
        <div className="test1"></div>
        <div className="test2"></div>
        <div className="test3"></div>
      </section>
      <Footer />
    </>
  );
};

export default MainPage;
