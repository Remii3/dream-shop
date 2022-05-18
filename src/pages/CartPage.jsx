import { useContext } from "react";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import CartItem from "../components/UI/CartItem";

import { ThemeContext } from "../context/ContextProvider";

import "../styles/scss/pagesStyle/cartPage.scss";

const CartPage = () => {
  const { items, totalPrice } = useContext(ThemeContext);
  return (
    <>
      <Nav />
      <section id="cartSpaceOuter">
        <h1 className="cartSpaceOuter_cartTitle">
          My Cart{" "}
          <i className="fa-solid fa-cart-shopping cartTitle_cartIcon"></i>
        </h1>
        <div className="cartSpaceOuter_cartSpace">
          <div className="cartSpace_itemSpace">
            {items &&
              items.map((item, index) => (
                <CartItem key={index} itemData={item} />
              ))}
            {items.length === 0 && (
              <h1 className="itemSpace_noItems">No items</h1>
            )}
          </div>
          <div className="cartSpace_purchaseSpace">
            <div className="purchaseSpace_infoSpace">
              <h1 className="infoSpace_info">
                <span className="info_text">Tax:</span>
                <span className="info_amount">0zł</span>
              </h1>
              <h1 className="infoSpace_info">
                <span className="info_text">Grand total:</span>
                <span className="info_amount">{totalPrice.toFixed(2)}zł</span>
              </h1>
            </div>
            <button
              className="purchaseSpace_purchaseBtn"
              disabled={items.length <= 0 && true}
            >
              Purchase
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CartPage;
