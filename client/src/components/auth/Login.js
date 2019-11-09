import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { loginUser } from "../../actions/authActions";

import { MDBContainer, MDBRow, MDBInput, MDBBtn } from 'mdbreact';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  // Redirects to dashboard if user tries to go login or register page after login.
  componentDidMount() {    
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

componentWillReceiveProps(nextProps) {
    // push user to dashboard when they login
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); 
    }
if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const userData = {
      email: this.state.email,
      password: this.state.password
    };
this.props.loginUser(userData); 
  };
render() {
    const { errors } = this.state;
return (
  <MDBContainer className="pt-4">
  <MDBRow className="mt-5" >
    <div  className="card login mx-auto py-5 px-3 z-depth-1"  style={{borderRadius: "15px 50px"}}>
             
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h1 className="mb-3">
                Login
              </h1>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <MDBInput
                label="Type your email"
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"                 
                />               
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col s12">
                <MDBInput
                 label="Type your password"
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"                 
                />
               
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="col s12 text-center" style={{ paddingLeft: "11.250px" }}>
                <MDBBtn
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  color="unique-color"
                  className="btn btn-large mx-auto unique-color-dark text-white waves-effect waves-light hoverable accent-3"
                >
                  Login
                </MDBBtn>
              </div>
            </form>
            </div>
            </MDBRow>
          </MDBContainer>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);