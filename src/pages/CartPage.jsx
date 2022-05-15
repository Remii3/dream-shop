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
          <button className="purchaseSpace_purchaseBtn">Purchase</button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CartPage;
