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

  const { filterData, changeFilterValues } = useFilter();

  const filterHandler = () => {
    changeFilterValues({
      minPrice: minPrice.current.value || 0,
      maxPrice: maxPrice.current.value || null,
    });
  };

  return (
    <>
      <Nav />
      <section id="productsPage">
        <div className="productsPage_filterSpace">
          <h1>Filter</h1>
          <div className="filterSpace_filter">
            <label className="filter_title" htmlFor="">
              Price:
            </label>
            <input
              ref={minPrice}
              className="filter_input"
              type="number"
              placeholder="min"
            />
            <input
              ref={maxPrice}
              className="filter_input"
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
        <div className="productsPage_products">
          {shopItems &&
            filterItems(shopItems, filterData).map((item, index) => (
              <ItemCard key={index} itemData={item} />
            ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductsPage;
