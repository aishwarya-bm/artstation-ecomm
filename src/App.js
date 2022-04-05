import { Route, Routes } from "react-router-dom";
import "./App.css";
import {LandingPage,Home,Wishlist,Productlist,Cart} from "./pages/";
import MockAPI from "./mockman/MockmanTest";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">      
    <Routes>
     <Route path="/apitest" element={<MockAPI/>}></Route>
     <Route path="/signup" element={<LandingPage /> }></Route> 
     <Route path="/" element={<Home />}></Route>
     <Route path="/cart" element={<Cart/>}></Route>
     <Route path="/wishlist" element={<Wishlist />}></Route>
     <Route path="/productlist/:category" element={<Productlist/>}></Route>
    <Route path="/productlist" element={<Productlist/>}></Route>
    </Routes>
    <ToastContainer/>
    </div>
  );
}

export default App;
