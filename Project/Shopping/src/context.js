import React, { Component } from 'react';
const ProductContext = React.createContext();


class ProductProvider extends Component {
    state ={
        products: [],
    
    };

    async componentDidMount() {
        const url = 'http://localhost:3001/storeProducts'
        const response = await fetch(url);
        const products = await response.json();
        this.setState(()=>{
            return { 
                products: products, 

            }
        })
    }
    

    
    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
          return { product: product };
        });
      };


      getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
      };

      handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
          return { product: product };
        });
      };

    addToCart = () =>{
        console.log("hello form add to cart")
    };

    


    render() {
        return (
            <ProductContext.Provider 
            value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
            }}>
                {this.props.children}  
            </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer};