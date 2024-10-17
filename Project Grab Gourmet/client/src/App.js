

import HomePage from "./pages/HomePage";
import LoginComponent from "./pages/LoginComponent";
import RegisterComponent from "./pages/RegisterComponent";
import MainMenu from "./pages/MainMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Restaurants from "./pages/Restaurants";
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminMenu from "./pages/AdminMenu";
import AdminDish from "./pages/AdminDish";
import AdminRes from "./pages/AdminRes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<RegisterComponent/>}/>
          <Route path="/menu" element={<MainMenu />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/adlogin" element={<AdminLogin/>} />
          <Route path="/admenu" element={<AdminMenu />} />
          <Route path="/addish" element={<AdminDish />} />
          <Route path="/adres" element={<AdminRes />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
