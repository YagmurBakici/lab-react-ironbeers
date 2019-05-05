import React, { Component } from "react";
// import Navbar from "./NavBar";

export default class newbeer extends Component {
  render() {
    return (
      <div>
        <h1>New Beer</h1>
      </div>
    );
  }
}

// import beersService from "../service/beersService";

// class newbeer extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {};

//     this.service = new beersService();
//   }

//   newBeer = e => {
//     e.preventDefault();
//     const body = {
//       name: e.target.name.value,
//       tagline: e.target.tagline.value,
//       description: e.target.description.value
//     };
//     this.service
//       .addBeer(body)
//       .then(info => console.log(info))
//       .catch(err => console.log(err));
//   };

//   render() {
//     return (
//       <main>
//         <nav>
//           <Navbar />
//         </nav>
//         <form onSubmit={this.newBeer}>
//           <label>
//             Name: <input type="text" name="name" />
//           </label>
//           <br />
//           <br />
//           <label>
//             Tagline: <input type="text" name="tagline" />
//           </label>
//           <br />
//           <br />
//           <label>
//             Description: <textarea name="description" />
//           </label>
//           <br />

//           <br />
//           <button type="submit">Add New</button>
//         </form>
//       </main>
//     );
//   }
// }

// export default newbeer;
