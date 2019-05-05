import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import Navbar from "./Navbar";
// In reactjs its Link and not link. and you need to install react-roter-dom
// Router component is what makes the connection between browser location and the react application. It doesn't render anything visible on your page.
// It just exposes API to interact with location changes of the browser
// Route is much simple to explain. It just renders some UI when a location matches the route’s path

const Home = () => {
  return (
    <Router>
      <Link to="/beers/all">
        <img
          src="https://fotostrasse.com/wp-content/uploads/2019/02/Lager-Lager_Our-Favorite-Craft-Beer-Bar-in-Kreuzkolln_02.jpg"
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
      <Link to="/beers/new">
        <img
          src="https://www.beyondbeer.de/media/image/30/b3/a0/paket_geschenkpaket_einsteiger_600x600.jpg"
          width="300px"
          alt="New beers"
        />
        <h1> New Beer</h1>
      </Link>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
        Incidunt provident adipisci earum molestiae quos excepturi.
      </p>
    </Router>
  );
};

export default Home;
