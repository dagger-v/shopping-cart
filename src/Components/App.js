import Header from "./Header";
import image from "../Images/vg-logo.png";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <img className="logo" src={image} alt="logo"></img>
        <div className="available-now">
          <p>Summon Iconic Heroes</p>
          <button>Available Now</button>
        </div>
      </div>
      <div>
        <h1 className="featured-text">Featured</h1>
      </div>
      <div className="featured-content">
        <div className="featured"></div>
        <div className="featured"></div>
        <div className="featured"></div>
        <div className="featured"></div>
        <div className="featured"></div>
      </div>
    </>
  );
}

export default App;
