import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import ItemCard from "../components/UI/ItemCard";
import sortItems from "../functions/sortItems";

import "../styles/scss/pagesStyle/mainPage.scss";

const MainPage = (props) => {
  const { shopItems } = props;

  const sortTypesAndTitles = [
    { title: "NEWS", sortType: "created" },
    { title: "POPULAR", sortType: "popularity" },
    { title: "MOST LIKED", sortType: "liked" },
  ];

  return (
    <>
      <Nav />
      <section id="mainPage">
        {sortTypesAndTitles.map((arrayItem) => {
          return (
            <div className="mainPage_productsSpace">
              <h1 className="productsSpace_title">
                {arrayItem.title.toUpperCase()}
              </h1>
              <div className="productsSpace_cardsSpace">
                {shopItems &&
                  sortItems(shopItems, arrayItem.sortType)
                    .slice(2)
                    .map((item, index) => (
                      <ItemCard key={index} itemData={item} />
                    ))}
              </div>
            </div>
          );
        })}
      </section>
      <Footer />
    </>
  );
};

export default MainPage;
