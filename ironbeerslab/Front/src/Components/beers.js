import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class AllBeers extends Component {
  state = {
    beers: []
  };
  // after all the elements of the page is rendered correctly, this componantDidMount method is called
  componentDidMount() {
    axios.get("https://ironbeer-api.herokuapp.com/beers/all").then(response => {
      this.setState({
        beers: response.data
      });
    });
  }
  // COMPONENTDIDAMOUNT: Adından da anlaşılacağı gibi, sayfanın tüm elemanları doğru bir şekilde oluşturulduktan sonra bu metoda çağrılır.
  // İşaretleme sayfada ayarlandıktan sonra, bu tekniği Bir external API'den veri almak için React tarafından çağrılır veya JSX öğelerine ihtiyaç duyan bazı benzersiz işlemler gerçekleştirir.

  render() {
    return (
      <div>
        {/*LINK TO HOME*/}
        <Link to="/">Home</Link>
        <br />
        <br />

        <form>
          <label>Search: </label>
          <input onChange={e => this.searchQueryHandler(e)} />
        </form>
        <br />
        <br />

        {this.state.beers.map((e, idx) => {
          return (
            <div key={idx} className="beerBox">
              <img src={e.image_url} width="3%" alt={e.name} />
              <Link to={`beers/${e._id}`}>{e.name}</Link> - {e.tagline}
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllBeers;
