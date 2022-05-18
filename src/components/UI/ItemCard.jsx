import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ContextProvider";

import "../../styles/scss/componentsStyle/itemCard.scss";

const ItemCard = ({ itemData }) => {
  const { id, name, description, price } = itemData;

  const cart = useContext(ThemeContext);

  const addToCartHandler = () => {
    cart.addItem({ id, name, description, price, amount: 1 });
  };

  return (
    <div className="cardSpace">
      <Link to={`/products/${id}`}>
        <div className="cardSpace_overlay" />
        <h2 className="cardSpace_name">{name}</h2>
        <p className="cardSpace_desc">{description}</p>
      </Link>
      <div className="cardSpace_buyBtnSpace">
        <button className="buyBtnSpace_addToCartBtn" onClick={addToCartHandler}>
          Add to cart
        </button>
        <p className="buyBtnSpace_price">{price}zł</p>
      </div>
    </div>
  );
};

export default ItemCard;
