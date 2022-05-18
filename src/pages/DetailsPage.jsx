import { useCallback, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

import { ThemeContext } from "../context/ContextProvider";

import "../styles/scss/pagesStyle/detailsPage.scss";

const DetailsPage = () => {
  const [itemData, setItemData] = useState();
  const params = useParams();

  const cart = useContext(ThemeContext);

  const fetchSelectedItem = useCallback(async () => {
    const response = await fetch(
      `https://dream-shop-b0c55-default-rtdb.europe-west1.firebasedatabase.app/items/dreams/${params.productId}.json`
    );
    const data = await response.json();
    setItemData(data);
  }, [params.productId]);

  useEffect(() => {
    fetchSelectedItem();
  }, [fetchSelectedItem]);

  if (!itemData) return;
  const { id, name, description, created, likes, price } = itemData;

  const addToCartBtnHandler = () => {
    cart.addItem({ id, name, description, price, amount: 1 });
  };

  return (
    <>
      <Nav />
      <div id="linksHistory">
        <Link to={"/"}>Home</Link> &#62; <Link to={"/products"}>Products</Link>{" "}
        &#62; <Link to={`/products/${id}`}>{name}</Link>
      </div>
      <section id="detailsPage">
        <div className="detailsPage_photoContainer" />
        <div className="detailsPage_infoContainer">
          <h1 className="infoContainer_name">{name}</h1>
          <p className="infoContainer_desc">{description}</p>
          <p className="infoContainer_detailsSpace">
            <span className="detailsSpace_details">Created:</span>{" "}
            <span className="detailsSpace_details">{created}</span>
          </p>
          <p className="infoContainer_detailsSpace">
            <span className="detailsSpace_details">Likes:</span>{" "}
            <span className="detailsSpace_details">{likes}</span>
          </p>
          <div className="infoContainer_buyBtnSpace">
            <p className="buyBtnSpace_infoSpace">
              <span className="infoSpace_info">1szt x </span>
              {price}zł
            </p>
            <button
              className="buyBtnSpace_addBtn"
              onClick={addToCartBtnHandler}
            >
              Add to cart
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DetailsPage;
