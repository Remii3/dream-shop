import { useContext } from "react";
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

  return (
    <div id="informationSpace">
      <div className="informationSpace_nameSpace">
        <p className="nameSpace_name">{name}</p>
        <p className="nameSpace_desc">{description}</p>
      </div>
      <div className="informationSpace_priceSpace">
        <p className="priceSpace_title">Price:</p>
        <p className="priceSpace_amount">{price}</p>
      </div>
      <div className="informationSpace_quantitySpace">
        <p className="quantitySpace_title">Quantity</p>
        <p className="quantitySpace_amount">{amount}</p>
        <button
          className="quantitySpace_amountChange"
          onClick={removeFromCartHandler}
        >
          -
        </button>
        <button
          className="quantitySpace_amountChange"
          onClick={addToCartHandler}
        >
          +
        </button>
      </div>
      <div className="informationSpace_totalPriceSpace">
        <p className="totalPriceSpace_title">Total</p>
        <p className="totalPriceSpace_amount">124</p>
      </div>
    </div>
  );
};

export default CartItem;
