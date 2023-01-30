import { useState } from "react";

import VideoGameInfo from "./VideoGameInfo";

const VideoGameData = () => {
  const [games, setGames] = useState(VideoGameInfo);

  const handleCartStatus = (id) =>
    setGames(
      games.map((value) =>
        value.id !== id ? value : { ...value, inCart: !value.inCart }
      )
    );

  console.log(games);

  return (
    <>
      <div className="videogame-content">
        {games.map(({ id, title, src, releaseDate, price }, index) => (
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
        ))}
      </div>
    </>
  );
};

export default VideoGameData;
