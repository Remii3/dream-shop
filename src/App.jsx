import WelcomeScreen from "./components/layout/WelcomeScreen";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <WelcomeScreen />
              <MainPage />
            </>
          }
        />

        <Route path="/:itemId" element={<ProductsPage />} />
      </Routes>
    </div>
  );
};

export default App;
