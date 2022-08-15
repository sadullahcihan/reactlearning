import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
} from "reactstrap";
import CartSummary from "./CartSummary";

export default class Navi extends Component{
  render() {
    return (
      <div>
        <Navbar >
          <Nav className="me-auto" navbar>
            <NavbarBrand href="/">Northwind DB</NavbarBrand>
          </Nav>
          <CartSummary removeFromCart= {this.props.removeFromCart}  cart = {this.props.cart}/>
        </Navbar>
      </div>
    );
  }
}
