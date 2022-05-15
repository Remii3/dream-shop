import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import ItemCard from "../components/UI/ItemCard";

import "../styles/scss/pagesStyle/productsPage.scss";

const ProductsPage = (props) => {
  const { shopItems } = props;

  return (
    <>
      <Nav />
      <section id="productsPage">
        <div className="productsPage_filterSpace">
          <div className="filterSpace_filter">
            <label className="filter_title" htmlFor="">
              Price
            </label>
            <input
              className="filter_minInput"
              type="number"
              placeholder="min"
            />
            <input
              className="filter_maxInput"
              type="number"
              placeholder="max"
            />
          </div>
          <button className="filterSpace_filterBtn">Filter</button>
        </div>
        <div className="productsPage_products">
          {shopItems && shopItems.map((item) => <ItemCard itemData={item} />)}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductsPage;
