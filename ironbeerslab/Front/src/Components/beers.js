import React, { Component } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import { getAllBeers } from "../api/apiHandler";
//burda süslü parentez kullanıyoruz çünkü apiHandler sayfasında export default şeklinde

class AllBeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }
  // after all the elements of the page is rendered correctly, this componantDidMount method is called
  componentDidMount() {
    getAllBeers()
      .then(response => {
        //axios.get("https://ironbeer-api.herokuapp.com/beers/all").then(response => {
        // şeklindede yazabilirdik ama apihandlerda zaten belirledik
        console.log(response);
        this.setState({ beers: response.data });
        // });
      })
      .catch(err => console.log(err));
  }
  // COMPONENTDIDAMOUNT: Adından da anlaşılacağı gibi, sayfanın tüm elemanları doğru bir şekilde oluşturulduktan sonra bu metoda çağrılır.
  // İşaretleme sayfada ayarlandıktan sonra, bu tekniği Bir external API'den veri almak için React tarafından çağrılır veya JSX öğelerine ihtiyaç duyan bazı benzersiz işlemler gerçekleştirir.

  render() {
    return (
      <React.Fragment>
        <h1 className="title">I'm in the All Beer API </h1>
        <ul>
          {this.state.beers.map((beer, index) => (
            <li key={index}>
              <h4 className="title">{beer.name}</h4>
              <Link to={`/beer/${beer._id}`}>
                <img
                  src={beer.image_url}
                  alt={`${beer.name} : ${beer.tagline}`}
                />
              </Link>

              <cite>{beer.contributed_by}</cite>
            </li>
          ))}
        </ul>
        ;
      </React.Fragment>
    );
  }
}

export default AllBeers;
