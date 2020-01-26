import React, { Component } from "react";
import Product from './Product';
import Title from './Title';

import {ProductConsumer} from '../context';  

export default class Kids extends Component {

    render() {
      return ( 
           <React.Fragment>
    <div className="py-5">
    <div className="container">
        <Title name="Kids" title="shoes" />
         <div className="row">
         <ProductConsumer>
                {value => {
                     return value.products.filter(product => {
                     return product.style === 'Kids';
                 }).map(product => {
      return <Product key={product.id} product={product} />;
    });
  }}
</ProductConsumer>
        </div>
    </div>
    </div>
    </React.Fragment>
        );
    }
}

