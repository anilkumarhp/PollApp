import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";


import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

componentWillReceiveProps(nextProps) {
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
const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
this.props.registerUser(newUser, this.props.history); 
  };

render() {
    const { errors } = this.state;
return (
  <MDBContainer>
      <MDBRow>
        <MDBCol md="4" className="mt-4 mx-auto">
          <MDBCard className="mt-3"  style={{borderRadius: "15px 50px"}}>
            <MDBCardBody>
              <form noValidate onSubmit={this.onSubmit}>
                <p className="h2 py-2">Register</p>
                <p className="grey-text text-darken-1">
                Do you have an account? <Link to="/login">Login</Link>
              </p>
                <div className="grey-text px-2">
                  <MDBInput
                    label="Your name"                    
                    group
                    onChange={this.onChange}
                    value={this.state.name}
                    error={errors.name}
                    id="name"
                    type="text"
                    validate                   
                    success="right"
                    className="my-2"
                  /> 
                 
                  <MDBInput
                  label="Your email"     
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    type="email"
                    validate                   
                    success="right"
                    className="my-2"
                  />
                  <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
                  <MDBInput
                    label="Your password"                    
                    group
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    id="password"
                    type="password"
                    validate
                    success="right"
                    className="my-2"
                  />
                  <MDBInput
                    label="conform password"
                    onChange={this.onChange}
                    value={this.state.password2}
                    error={errors.password2}
                    id="password2"
                    type="password"
                    validate
                    className="my-2"
                  />
                </div>
                <div className="text-center py-4 mt-3">
                <MDBBtn
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                 
                }}
                type="submit"
                color="unique-color"
                className="btn btn-large mx-auto unique-color-dark text-white waves-effect waves-light hoverable accent-3"
              >
                Register
              </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));