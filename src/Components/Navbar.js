import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/videogame">Video Games</Link>
      <Link to="/shoppingcart">Shopping Carts</Link>
    </>
  );
};

export default Navbar;
