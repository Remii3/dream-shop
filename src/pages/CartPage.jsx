import React, { useContext } from "react";
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import CartItem from "../components/UI/CartItem";
import { ThemeContext } from "../context/ContextProvider";
import "../styles/scss/pagesStyle/cartPage.scss";

const CartPage = () => {
  const { items } = useContext(ThemeContext);
  return (
    <>
      <Nav />
      <h1 className="cartTitle">My Cart</h1>
      <section id="cartSpace">
        <div className="cartSpace_itemSpace">
          {items &&
            items.map((item, index) => (
              <CartItem key={index} itemData={item} />
            ))}
          {items.length === 0 && <h3>No items</h3>}
        </div>
        <div className="cartSpace_purchaseSpace">
          <div className="purchaseSpace_infoSpace">
            <h1 className="infoSpace_info">
              <span className="info_text">Tax:</span>
              <span className="info_amount">0zł</span>
            </h1>
            <h1 className="infoSpace_info">
              <span className="info_text">Grand total:</span>
              <span className="info_amount">125zł</span>
            </h1>
          </div>
          <button
            className="purchaseSpace_purchaseBtn"
            disabled={items.length <= 0 && true}
          >
            Purchase
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CartPage;
