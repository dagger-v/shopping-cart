import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import VideoGame from "./VideoGame";
import ShoppingCart from "./ShoppingCart";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/videogame" element={<VideoGame />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
