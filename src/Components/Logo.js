import image from "../Images/vg-logo.png";

const Logo = () => {
  return (
    <div>
      <img className="logo" src={image} alt="logo"></img>
      <div className="available-now">
        <p>Summon Iconic Heroes</p>
        <button>Available Now</button>
      </div>
    </div>
  );
};

export default Logo;
