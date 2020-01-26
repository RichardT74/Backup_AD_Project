import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
export default class Navbar extends Component {
  render() {
    return (
      <Nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">

     

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              This Season
            </Link>
          </li>

          <li className="nav-item ml-5">
            <Link to="/women" className="nav-link">
              Women
            </Link>
          </li>

          <li className="nav-item ml-5">
            <Link to="/men" className="nav-link">
              Men
            </Link>
          </li>

          <li className="nav-item ml-5">
            <Link to="/kids" className="nav-link">
              Kids
            </Link>
          </li>

          <li className="nav-item ml-5">
            <Link to="/returns" className="nav-link">
                Returns Page
            </Link>
          </li>

        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus " />
            </span>
            my cart
          </ButtonContainer>
        </Link>

      </Nav>
    );
  }
}

const Nav = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;