import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Details from "./components/Details"; 
import Cart from "./components/Cart";
import ProductList from './components/ProductList';
import Default from "./components/Default";
import Returns from "./components/Returns";
import Women from "./components/Women";
import Men from "./components/Men";
import Kids from "./components/Kids";




class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/cart" component={Cart} />
          <Route path="/returns" component={Returns} />
          <Route path="/women" component={Women} />
          <Route path="/men" component={Men} /> 
          <Route path="/kids" component={Kids} />
          <Route exact path="/details/:id/" component={Details} />
          <Route component={Default} />
          
          
          
        </Switch>
      </React.Fragment>
    );

  }
}
  

export default App;
