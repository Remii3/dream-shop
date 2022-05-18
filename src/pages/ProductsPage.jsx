import { useRef } from "react";
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import ItemCard from "../components/UI/ItemCard";
import filterItems from "../functions/filterItems";
import useFilter from "../hooks/useFilter";

import "../styles/scss/pagesStyle/productsPage.scss";

const ProductsPage = (props) => {
  const { shopItems } = props;
  const minPrice = useRef(0);
  const maxPrice = useRef(0);
  const searchText = useRef("");

  const { filterData, changeFilterValues } = useFilter();

  const filterHandler = () => {
    changeFilterValues({
      searchText: searchText.current.value || "",
      minPrice: minPrice.current.value || 0,
      maxPrice: maxPrice.current.value || null,
    });
  };
  if (!shopItems) return;
  const filteredShopItems = filterItems(shopItems, filterData);

  return (
    <>
      <Nav />
      <section id="productsPageOuter">
        <h1 className="productsPageOuter_cartTitle">Products</h1>
        <div className="productsPageOuter_productsPage">
          <div className="productsPage_filterSpace">
            <h1 className="filterSpace_title">Filter</h1>
            <div className="filterSpace_innerFilter">
              <label className="innerFilter_title" htmlFor="filter_input">
                Search:
              </label>
              <input
                ref={searchText}
                type="text"
                className="innerFilter_input"
                placeholder="Text..."
              />
            </div>
            <div className="filterSpace_innerFilter">
              <label className="innerFilter_title" htmlFor="">
                Price:
              </label>
              <input
                ref={minPrice}
                className="innerFilter_input"
                type="number"
                placeholder="min"
              />
              <input
                ref={maxPrice}
                className="innerFilter_input"
                type="number"
                placeholder="max"
              />
            </div>
            <div className="filterSpace_filterBtnSpace">
              <button
                className="filterBtnSpace_filterBtn"
                onClick={filterHandler}
              >
                Filter
              </button>
            </div>
          </div>
          <div className="productsPage_productsSpace">
            {filteredShopItems &&
              filteredShopItems.map((item, index) => (
                <ItemCard key={index} itemData={item} />
              ))}
            {filteredShopItems.length === 0 && (
              <h1 className="itemSpace_noItems">No items</h1>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductsPage;
