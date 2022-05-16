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
      <Link to={`/products/${id}`}>
        <div className="cardSpace_bgShadow" />
        <h2 className="cardSpace_name">{name}</h2>
        <p className="cardSpace_desc">{description}</p>
      </Link>
      <div className="cardSpace_buySpace">
        <button className="cardSpace_addToCartBtn" onClick={addToCartHandler}>
          Add to cart
        </button>

        <p className="cardSpace_price">{price}zł</p>
      </div>
    </div>
  );
};

export default ItemCard;
