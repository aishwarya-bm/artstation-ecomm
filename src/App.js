import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginPage, Home, Wishlist, Productlist, Cart, ErrorPage, Profile, Product } from "./pages/";
import MockAPI from "./mockman/MockmanTest";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RequiresAuth } from "./components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/apitest" element={<MockAPI />}></Route>
        <Route path="/signup" element={<LoginPage />}></Route>
        <Route path="/" element={<Home />}></Route>

        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }></Route>
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }></Route>
        <Route path="/productlist/:category" element={<Productlist />}></Route>
        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }></Route>
        <Route path="/productlist" element={<Productlist />}></Route>
        <Route path="/product/:productId" element={<Product />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
