import VideoGameInfo from "./VideoGameInfo";
import "./ShoppingCart.css";
import pikachu from "../Images/vg-game-sad.png";

const ShoppingCartData = () => {
  return (
    <>
      {VideoGameInfo.some((v) => v.inCart) ? (
        <div className="videogame-content">
          {VideoGameInfo.filter((v) => v.inCart).map(
            ({ title, src, releaseDate, price }, index) => (
              <div className="videogame">
                <img key={src} src={src} alt={title} />
                <div className="title-date">
                  <p className="vg-title">{title}</p>
                  <p className="vg-date">{releaseDate}</p>
                </div>
                <div>
                  <p className="vg-price">${price}</p>
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

export default ShoppingCartData;
