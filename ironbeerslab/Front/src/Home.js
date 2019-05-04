import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
// In reactjs its Link and not link. and you need to install react-roter-dom

export default class Home extends Component {
  render() {
    return (
      <div>
        <Link href="/allbeers">
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
        <Link to="/randombeers">
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
        <Link to="/newbeers">
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
      </div>
    );
  }
}
