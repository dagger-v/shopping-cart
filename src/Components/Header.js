import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <a className="active" href="/">
        Home
      </a>
      <a href="/videogame">Video Games</a>
      <a href="/shoppingcart">Shopping Cart</a>
      <div className="search-container">
        <form action="/action_page.php">
          <input type="text" placeholder="Search..." name="search" />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
