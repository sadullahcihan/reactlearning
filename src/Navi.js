import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav } from "reactstrap";
import CartSummary from "./CartSummary";
import { Link } from "react-router-dom";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <nav className="me-auto" navbar>
            <NavbarBrand href="/">Northwind App</NavbarBrand>
          </nav>
          <CartSummary
            removeFromCart={this.props.removeFromCart}
            cart={this.props.cart}
          ></CartSummary>
          {/* <Link
            //removeFromCart={this.props.removeFromCart}
            //cart={this.props.cart}
            to="/cart"
          >
            Cart
          </Link> */}
        </Navbar>
      </div>
    );
  }
}
