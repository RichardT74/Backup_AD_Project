
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
  
