import React, { Component } from "react";

export default class Default extends Component 
{
    render() {
        return (
            <div>
                <h3>page not found</h3>
            </div>
        )
    }
}


// import React, { Component } from "react";

// export default class Default extends Component 
// {
// state = {
//     loading: true,

//   };

//   async componentDidMount() {
//     const url = "http://localhost:3001/storeProducts";
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//     // this.setState({ storeProducts: data.results[0], loading: false });
//   }

//   render() {
//       return  (
//           <div>
//               <h3>TestApi</h3>
//           </div>
//       )
//     }
// }