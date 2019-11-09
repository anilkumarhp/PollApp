import React, { Component } from "react";


import { MDBContainer, MDBRow, MDBNavLink, MDBCol } from 'mdbreact';

class Landing extends Component {
  render() {
    return (
      <MDBContainer className="my-5 h-100">
  <MDBRow className="my-5">
    <MDBCol md="8" className="mx-auto my-5 text-center">
            <h4>
              <h2 className="app-title mb-4">POLL APP</h2>
              <hr />
              <span className="mt-3">Welcome Guest</span>
            </h4>
            <p className="flow-text grey-text text-darken-1">
              To continue as guest click on <b>Guest</b> at top right.
            </p>
            <br />
            <div className="col justify-content-center waves-effect d-flex">
              <MDBNavLink
                to="/register"
                style={{
                  width: "160px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light  z-depth-1 hoverable unique-color-dark text-white accent-3"
              >
                Register
              </MDBNavLink>
           &nbsp;
              <MDBNavLink
                to="/login"
                style={{
                  width: "160px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect black-text"
              >
                Log In
              </MDBNavLink>
            </div>
            </MDBCol>
            </MDBRow>
          </MDBContainer>
    );
  }
}
export default Landing;