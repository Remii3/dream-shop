import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/scss/componentsStyle/nav.scss";

const Nav = () => {
  const [burgerActive, setBurgerActive] = useState(false);

  const burgerClickHandler = () => {
    setBurgerActive((prevState) => !prevState);
  };

  const navClickHandler = (e) => {
    const allNavPageLinks = document.querySelectorAll(`.pages_link`);
    const selectedEl = document.querySelector(`.${e.target.classList[1]}`);

    allNavPageLinks.forEach((item) => item.classList.remove("selected"));
    selectedEl.classList.add("selected");
  };

  return (
    <nav id="navigationSpace">
      <section className="navigationSpace_innerSection">
        <div className="innerSection_iconSpace">
          <button
            onClick={burgerClickHandler}
            className={`navigation_burger hamburger hamburger--collapse  ${
              burgerActive && "is-active"
            }`}
            type="button"
          >
            <span className="burger_stripeSpace hamburger-box">
              <span className="burger_stripe hamburger-inner"></span>
            </span>
          </button>

          <p className="navigation_cart">
            <Link to={"/cart"}>
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </p>
        </div>
        <div
          className={`navigation_pages ${
            burgerActive && "navigation_pages-active"
          }`}
        >
          <Link to={"/"}>
            <span
              className="pages_link navLink1"
              onClick={navClickHandler.bind(this)}
            >
              Home
            </span>
          </Link>
          <Link to={"/products"}>
            <span
              className="pages_link navLink2"
              onClick={navClickHandler.bind(this)}
            >
              Products
            </span>
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default Nav;
