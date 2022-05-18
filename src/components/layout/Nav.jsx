import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ContextProvider";

import "../../styles/scss/componentsStyle/nav.scss";

const Nav = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const cart = useContext(ThemeContext);

  const burgerClickHandler = () => {
    setBurgerActive((prevState) => !prevState);
  };

  return (
    <nav id="navigationSpace">
      <section className="navigationSpace_innerSection">
        <div className="innerSection_iconSpace">
          <button
            onClick={burgerClickHandler}
            className={`iconSpace_burger hamburger hamburger--collapse  ${
              burgerActive && "is-active"
            }`}
            type="button"
          >
            <span className="burger_stripeSpace hamburger-box">
              <span className="burger_stripe hamburger-inner"></span>
            </span>
          </button>

          <Link to={"/cart"}>
            <i className="fa-solid fa-cart-shopping iconSpace_cart">
              {cart.totalAmount !== 0 && (
                <span className="cartItemsQuantity">{cart.totalAmount}</span>
              )}
            </i>
          </Link>
        </div>
        <div
          className={`navigation_pages ${
            burgerActive && "navigation_pages-active"
          }`}
        >
          <Link to={"/"} className={"pages_link"}>
            <span className=" navLink1">Home</span>
          </Link>
          <Link to={"/products"} className={"pages_link"}>
            <span className=" navLink2">Products</span>
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default Nav;
