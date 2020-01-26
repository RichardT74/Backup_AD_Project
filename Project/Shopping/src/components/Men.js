import React, { Component } from "react";
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';  

export default class Men extends Component {

    render() {
      return ( 
           <React.Fragment>
    <div className="py-5">
    <div className="container">
        <Title name="Mens" title="Shoes" />
         <div className="row">
         <ProductConsumer>
                {value => {
                     return value.products.filter(product => {
                     return product.style === 'Men';
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