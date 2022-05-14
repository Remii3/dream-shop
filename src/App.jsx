import WelcomeScreen from "./components/layout/WelcomeScreen";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
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
    <div>
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
        <Route path="/cart" element={<ProductsPage />} />
      </Routes>
    </div>
  );
};

export default App;
