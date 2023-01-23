const Header = () => {
  return (
    <div class="header">
      <a class="active" href="/">
        Home
      </a>
      <a href="/videogame">Video Games</a>
      <a href="/shoppingcart">Shopping Cart</a>
      <div class="search-container">
        <form action="/action_page.php">
          <input type="text" placeholder="Search..." name="search" />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
