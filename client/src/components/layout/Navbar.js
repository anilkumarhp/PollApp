import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar id="navbar-container" color="unique-color-dark" className="px-5 z-depth-1" dark expand="md">
        <MDBNavbarBrand id="navbar-brand">
          <MDBNavLink to="#!" className="text-white font-weight-bold"><i class="fas fa-poll"></i> Poll App</MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav className="w-100">
            
            <MDBNavItem className="ml-auto">
              <MDBNavLink to="#!">Guest</MDBNavLink>
            </MDBNavItem>
            
          </MDBNavbarNav>          
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;