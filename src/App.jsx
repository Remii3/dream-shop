import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import WelcomeScreen from "./components/layout/WelcomeScreen";
import CartPage from "./pages/CartPage";
import DetailsPage from "./pages/DetailsPage";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";

const App = () => {
  const [shopItems, setShopItems] = useState(null);

  const importShopItems = async () => {
    const response = await fetch(
      "https://dream-shop-b0c55-default-rtdb.europe-west1.firebasedatabase.app/items.json"
    );
    const data = await response.json();
    setShopItems(data.dreams);
  };

  useEffect(() => {
    importShopItems();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <WelcomeScreen />
              <MainPage shopItems={shopItems} />
            </>
          }
        />
        <Route
          path="/products"
          element={<ProductsPage shopItems={shopItems} />}
        />
        <Route path="/products/:productId" element={<DetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </>
  );
};

export default App;
