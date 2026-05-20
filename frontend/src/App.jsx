import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route
        path="/checkout"
        element={<CheckoutPage />}
      />

      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/cart"
        element={<CartPage />}
      />

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/register"
        element={<RegisterPage />}
      />

    </Routes>
  );
}
export default App;