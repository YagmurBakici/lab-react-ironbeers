import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
// import Navbar from "./Navbar";
// In reactjs its Link and not link. and you need to install react-roter-dom
// Router component is what makes the connection between browser location and the react application. It doesn't render anything visible on your page.
// It just exposes API to interact with location changes of the browser
// Route is much simple to explain. It just renders some UI when a location matches the route’s path

const Home = () => {
  return (
    <nav>
      <Link to="/all-beers">
        <img
          src="https://www.beerhawk.co.uk/media/catalog/product/b/e/beliglan___beer_case.png"
          width="300px"
          alt="All beers"
        />

        <h1> All Beers</h1>
      </Link>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
        Incidunt provident adipisci earum molestiae quos excepturi.
      </p>
      <Link to="/beers/random">
        <img
          src="https://assets3.thrillist.com/v1/image/1680956/size/tmg-article_default_mobile.jpg"
          width="300px"
          alt="Random beers"
        />
        <h1> Random Beers</h1>
      </Link>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
        Incidunt provident adipisci earum molestiae quos excepturi.
      </p>
      <Link to="/beer/one">
        <img
          src="https://www.beyondbeer.de/media/image/30/b3/a0/paket_geschenkpaket_einsteiger_600x600.jpg"
          width="300px"
          alt="One beer"
        />
        <h1> One Beer</h1>
      </Link>
    </nav>
  );
};

export default Home;
