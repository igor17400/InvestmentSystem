import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

import "./Landing.css";
import stocks_image from "./images/stocks.jpg";
import bond_image from "./images/bonds3.jpg";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid jumbotron-title">
          <div className="container">
            <h1 className="display-4">Splash Investment System</h1>
            <p className="lead">
              This is a platform to understand your profile using your bank
              account.
            </p>
            <p className="lead">
              We generate recommendations for which kind of investments you
              should get involved and which investments platforms are better
              suited for your kind of profile.
            </p>
          </div>
        </div>
        <Container>
          <Row>
            <Col>
              <div className="jumbotron jumbotron-fluid jumbotron-subtitle">
                <div className="container">
                  <h1>Investments Types</h1>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="jumbotron jumbotron-fluid jumbotron-subtitle-stocks">
                <div className="container">
                  <h1 className="h1-stocks">Stocks</h1>
                  <img
                    alt=""
                    src={stocks_image}
                    width="180"
                    height="180"
                    className="d-inline-block"
                  />{" "}
                </div>
              </div>
            </Col>
            <Col>
              <div className="jumbotron jumbotron-fluid jumbotron-subtitle-bonds">
                <div className="container">
                  <h1 className="h1-bonds">Bonds</h1>
                  <img
                    alt=""
                    src={bond_image}
                    width="180"
                    height="180"
                    className="d-inline-block bond-image"
                  />{" "}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Landing;
