import GreenFurniture from "./components/GreenFurniture";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Sofas from "./components/Sofas";
import Footer from "./components/Footer";
import CartPage from "./components/CartPage";
import ProductView from "./components/ProductView";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Homepage />
                <Sofas />
                <GreenFurniture />
              </>
            }
          />
          <Route path="/product" element={<ProductView />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
