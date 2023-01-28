import FeaturedGames from "./FeaturedGames";

const Featured = () => {
  console.log(FeaturedGames);

  return (
    <>
      {FeaturedGames.map(({ title, src }, index) => (
        <div className="featured">
          <img key={src} src={src} alt={title} />
          <p>{title}</p>
        </div>
      ))}
    </>
  );
};

export default Featured;
