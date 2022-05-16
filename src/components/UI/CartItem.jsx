import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ContextProvider";
import "../../styles/scss/componentsStyle/cartItem.scss";

const CartItem = ({ itemData }) => {
  const { id, name, description, price, amount } = itemData;
  const cart = useContext(ThemeContext);

  const addToCartHandler = () => {
    cart.addItem({ id, name, description, price, amount: 1 });
  };
  const removeFromCartHandler = () => {
    cart.removeItem(id);
  };

  const totalItemPrice = (amount * price).toFixed(2);

  return (
    <div id="informationSpace">
      <div className="informationSpace_nameSpace">
        <Link to={`/products/${id}`}>
          <h2 className="nameSpace_name">{name}</h2>
        </Link>
        <p className="nameSpace_desc">{description}</p>
      </div>
      <section className="informationSpace_quantityPriceSpace">
        <div className="quantityPriceSpace_priceSpace">
          <h3 className="priceSpace_title">Price:</h3>
          <p className="priceSpace_amount">{price}zł</p>
        </div>
        <div className="quantityPriceSpace_quantitySpace">
          <h3 className="quantitySpace_title">Quantity:</h3>
          <div className="quantitySpace_buttonSpace">
            <button
              className="buttonSpace_amountChange"
              onClick={removeFromCartHandler}
            >
              -
            </button>
            <p className="quantitySpace_amount">{amount}</p>
            <button
              className="buttonSpace_amountChange"
              onClick={addToCartHandler}
            >
              +
            </button>
          </div>
        </div>
        <div className="quantityPriceSpace_totalPriceSpace">
          <h3 className="totalPriceSpace_title">Total:</h3>
          <p className="totalPriceSpace_amount">{totalItemPrice}zł</p>
        </div>
      </section>
    </div>
  );
};

export default CartItem;
