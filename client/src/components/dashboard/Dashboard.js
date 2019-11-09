import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import { MDBBtn } from 'mdbreact';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align mx-auto border text-center">
            <h4>
              <h2 className="display-2">Welcome, {user.name.split(" ")[0]}</h2>
              <p className="flow-text grey-text text-darken-1">
                Check out all the polls                
              </p>
            </h4>            
            <MDBBtn
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  color="unique-color"
                  onClick={this.onLogoutClick}
                  className="btn btn-large mx-auto unique-color-dark text-white waves-effect waves-light hoverable accent-3"
                >
                  Logot
                </MDBBtn>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);