import Header from "./Header";
import VideoGameList from "./VideoGameList";

import "./VideoGame.css";
import { useState } from "react";

const VideoGame = () => {
  const [cart, setCart] = useState(VideoGameList);

  const handleCartStatus = (id) =>
    setCart(
      cart.map((value) =>
        value.id !== id ? value : { ...value, inCart: !value.inCart }
      )
    );

  console.log(cart);

  return (
    <>
      <Header />
      <div className="videogame-content">
        {cart.map(
          ({ id, title, src, releaseDate, price, quantity, inCart }, index) => (
            <div className="videogame">
              <img key={src} src={src} alt={title} />
              <div className="title-date">
                <p className="vg-title">{title}</p>
                <p className="vg-date">{releaseDate}</p>
              </div>
              <div>
                <p className="vg-price">${price}</p>
                <button
                  className="vg-console"
                  onClick={() => handleCartStatus(id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default VideoGame;
