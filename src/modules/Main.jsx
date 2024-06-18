import { Routes, Route } from "react-router-dom";
import { Products } from "./Products";
import { Promo } from "./Promo";
import { Cart } from "./Cart";
import { Delivery } from "./Delivery";

export const Main = () => (
  <main className="main">
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Promo />
            <Products />
          </>
        }
      />
      <Route
        path="/cart"
        element={
          <>
            <Cart />
            <Delivery />
          </>
        }
      />
    </Routes>
  </main>
);
