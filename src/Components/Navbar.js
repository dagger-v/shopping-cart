import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/videogame">Video Games</Link>
        <Link to="/shoppingcart">Shopping Carts</Link>
      </div>
    </>
  );
};

export default Navbar;
