import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Container, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
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
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    // console.log(newUser);
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <Container>
        <h2 className="form-title">Register</h2>
        <Form className="form" onSubmit={this.onSubmit}>
          <Col>
            <FormGroup noValidate onSubmit={this.onSubmit}>
              <Label htmlFor="name">Name</Label>
              <Input
                onChange={this.onChange}
                value={this.state.name}
                error={errors.name}
                id="name"
                type="text"
                placeholder="name"
                className={classnames("", {
                  invalid: errors.name,
                })}
              />
              <span className="red-text">{errors.name}</span>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup noValidate onSubmit={this.onSubmit}>
              <Label htmlFor="email">Email</Label>
              <Input
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                id="email"
                type="email"
                placeholder="me@mail.com"
                className={classnames("", {
                  invalid: errors.email,
                })}
              />
            </FormGroup>
            <span className="red-text">{errors.email}</span>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                placeholder="********"
                className={classnames("", {
                  invalid: errors.password,
                })}
              />
            </FormGroup>
            <span className="red-text">{errors.password}</span>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="password2">Password Verification</Label>
              <Input
                onChange={this.onChange}
                value={this.state.password2}
                error={errors.password2}
                id="password2"
                type="password"
                placeholder="********"
                className={classnames("", {
                  invalid: errors.password2,
                })}
              />
            </FormGroup>
            <span className="red-text">{errors.password2}</span>
          </Col>
          <Button className="btn-signin" variant="dark" type="submit">
            Register
          </Button>
        </Form>
      </Container>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
