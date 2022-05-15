import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ContextProvider";
import "../../styles/scss/componentsStyle/itemCard.scss";

const ItemCard = (props) => {
  const { id, name, description, price } = props.itemData;

  const cart = useContext(ThemeContext);

  const addToCartHandler = () => {
    cart.addItem({ id, name, description, price, amount: 1 });
  };

  return (
    <div className="cardSpace">
      <h2 className="cardSpace_name">{name}</h2>
      <p className="cardSpace_desc">{description}</p>
      <div className="cardSpace_buySpace">
        <button className="cardSpace_addToCartBtn" onClick={addToCartHandler}>
          Add to cart
        </button>
        <Link to={`/products/${id}`} className="cardSpace_info">
          <p>i</p>
        </Link>
        <p className="cardSpace_price">{price}zł</p>
      </div>
    </div>
  );
};

export default ItemCard;
