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
          <h1>Filter</h1>
          <div className="filterSpace_filter">
            <label className="filter_title" htmlFor="">
              Price:
            </label>
            <input className="filter_input" type="number" placeholder="min" />
            <input className="filter_input" type="number" placeholder="max" />
          </div>
          <div className="filterSpace_filterBtnSpace">
            <button className="filterBtnSpace_filterBtn">Filter</button>
          </div>
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
