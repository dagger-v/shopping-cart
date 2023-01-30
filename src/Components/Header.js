import "./Header.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
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
