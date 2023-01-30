import FeaturedGames from "./FeaturedGames";

const Featured = () => {
  console.log(FeaturedGames);

  return (
    <>
      <div>
        <h1 className="featured-text">Featured Games</h1>
      </div>
      <div className="featured-content">
        {FeaturedGames.map(({ title, src }, index) => (
          <div className="featured">
            <img key={src} src={src} alt={title} />
            <p>{title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Featured;
