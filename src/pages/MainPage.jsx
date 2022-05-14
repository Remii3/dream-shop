import React from "react";
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import ItemCard from "../components/UI/ItemCard";
import sortItems from "../functions/sortItems";

import "../styles/scss/pagesStyle/mainPage.scss";

const MainPage = (props) => {
  const { shopItems } = props;

  return (
    <>
      <Nav />
      <section id="mainPage">
        <div className="mainPage_newSpace">
          <h1 className="newSpace_title">NEWS</h1>
          <div className="newSpace_cardsSpace">
            {shopItems &&
              sortItems(shopItems, "created")
                .slice(2)
                .map((item, index) => <ItemCard key={index} itemData={item} />)}
          </div>
        </div>
        <div className="mainPage_popularSpace">
          <h1 className="newSpace_title">POPULAR</h1>
          <div className="newSpace_cardsSpace">
            {shopItems &&
              sortItems(shopItems, "popularity")
                .slice(2)
                .map((item, index) => <ItemCard key={index} itemData={item} />)}
          </div>
        </div>
        <div className="mainPage_mostLikedSpace">
          <h1 className="newSpace_title">MOST LIKED</h1>
          <div className="newSpace_cardsSpace">
            {shopItems &&
              sortItems(shopItems, "liked")
                .slice(2)
                .map((item, index) => <ItemCard key={index} itemData={item} />)}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MainPage;
