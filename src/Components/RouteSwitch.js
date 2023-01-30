import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import VideoGame from "./VideoGame";
import ShoppingCart from "./ShoppingCart";
import Navbar from "./Navbar";

const RouteSwitch = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/videogame" element={<VideoGame />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;
