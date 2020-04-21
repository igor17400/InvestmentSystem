import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import "./Login.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
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

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    // console.log(userData);
    this.props.loginUser(userData); // since we handle the
    // redirect within our component, we don't need to pass
    // in this.props.history as a parameter
  };

  render() {
    const { errors } = this.state;

    return (
      <Container>
        <h2 className="form-title">Log In</h2>
        <Form className="form" onSubmit={this.onSubmit}>
          <Col>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                id="email"
                type="email"
                placeholder="myemail@email.com"
                className={classnames("", {
                  invalid: errors.email || errors.emailnotfound,
                })}
              />
            </FormGroup>
            <span className="red-text">
              {errors.email}
              {errors.emailnotfound}
            </span>
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
                  invalid: errors.password || errors.passwordincorrect,
                })}
              />
            </FormGroup>
            <span className="red-text">
              {errors.password}
              {errors.passwordincorrect}
            </span>
          </Col>
          <Button className="btn-signup" variant="dark" type="submit">
            Log in
          </Button>
        </Form>
      </Container>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Login);
