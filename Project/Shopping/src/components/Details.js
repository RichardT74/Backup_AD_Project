
import Product from './Product';
import Title from './Title';
import React, { Component } from "react";
import { connect } from 'react-redeux'
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {

  
  render() {
    return(
     
  
      // <div>
      //   <h2>{this.props.match.params.id}</h2>
      //   <h2>{this.props.match.params.title}</h2>
      //   <h2>{this.props.match.params.size}</h2>
      //   hi 
      // </div>

        <div className="container py-5">
          {/* title */}
          <div className="row">
            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
              <h1>Nike Air</h1>
            </div>
              {/* end of title */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img  />
                </div>
                {/* prdoduct info */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h1>model : max 2011</h1>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">Nike</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price : 300 <span>$</span>
                      
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product :
                  </p>
                  <p className="text-muted lead"> info text</p>
                  
                  
                  
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                  </div>


                </div>
              </div>
            </div>
            </div>
           
          );
        }}
  






// const ProductWrapper = styled.div`
//   .card {
//     border-color: transparent;
//     transition: all 1s linear;
//   }
//   .card-footer {
//     background: transparent;
//     border-top: transparent;
//     transition: all 1s linear;
//   }
//   &:hover {
//     .card {
//       border: 0.04rem solid rgba(0, 0, 0, 0.2);
//       box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
//     }
//     .card-footer {
//       background: rgba(247, 247, 247);
//     }
//   }
//   .img-container {
//     position: relative;
//     overflow: hidden;
//   }
//   .card-img-top {
//     transition: all 1s linear;
//   }
//   .img-container:hover .card-img-top {
//     transform: scale(1.2);
//   }
//   .cart-btn {
//     position: absolute;
//     bottom: 0;
//     right: 0;
//     padding: 0.2rem 0.4rem;
//     background: var(--lightBlue);
//     border: none;
//     color: var(--mainWhite);
//     font-size: 1.4rem;
//     border-radius: 0.5rem 0 0 0;
//     transform: translate(100%, 100%);
//     transition: all 1s ease-in-out;
//   }
//   .img-container:hover .cart-btn {
//     transform: translate(0, 0);
//   }
//   .cart-btn:hover {
//     color: var(--mainBlue);
//     cursor: pointer;
//   }
// `;