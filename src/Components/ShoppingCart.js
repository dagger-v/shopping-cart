import Header from "./Header";
import VideoGameList from "./VideoGameList";

import "./ShoppingCart.css";
import pikachu from "../Images/vg-game-sad.png";

const ShoppingCart = () => {
  return (
    <>
      <Header />
      {VideoGameList.some((v) => v.inCart) ? (
        <div className="videogame-content">
          {VideoGameList.filter((v) => v.inCart).map(
            (
              { id, title, src, releaseDate, price, quantity, inCart },
              index
            ) => (
              <div className="videogame">
                <img key={src} src={src} alt={title} />
                <div className="title-date">
                  <p className="title">{title}</p>
                  <p className="date">{releaseDate}</p>
                </div>
                <div>
                  <p className="price">${price}</p>
                  <button className="console">Add to Cart</button>
                </div>
              </div>
            )
          )}
        </div>
      ) : (
        <div>
          <h1 className="sc-empty-title">Your Shopping Cart Is Empty!</h1>;
          <div className="shopping-cart-image">
            <img src={pikachu} alt={pikachu}></img>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCart;
