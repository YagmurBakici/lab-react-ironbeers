import React from "react";
import { getOneBeer } from "../api/apiHandler";

export default class OneBeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beerId: this.props.match.params.id,
      beer: {}
    };
    // console.log(props);
  }

  componentDiMount() {
    console.log(this.beerId);

    getOneBeer(this.beerId)
      .then(res => {
        console.log(res.data);
        this.setState({ beer: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { beer } = this.state;
    return (
      <div>
        <p>hellooo i am single beer</p>
        <h1>{beer.name}</h1>
        <img src={beer.image_url} alt={`${beer.name} : ${beer.tagline}`} />
      </div>
    );
  }
}
