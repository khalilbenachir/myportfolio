import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Main from "../../assets/2114086.png"

import "@fortawesome/fontawesome-free/css/all.min.css";

import "./aboutme.css";

const AboutMe = props => {
  return (
    <Container fluid={true}>
      <Row className="aboutme__main">
        <Col xs={12} md={5} className="aboutme__left">
          <Row className="aboutme__left-heading">
            <Col xs={12} md={12} className="heading-1">
              <span className="heading1-title">HI ,I’M BENACHIR KHALIL !</span>
              <span className="heading1-description">
                Developer
                <span className="heading1-sousdescription">
                  Web/Mobile & UI-UX Designer.
                </span>
              </span>
              <span className="heading1-paragraph">
                My goal is to translate your ideas into applications.
              </span>
              <div class="contact__logo">
                <a
                  class="btn"
                  href="https://www.linkedin.com/in/khalil-benachir-797228155/"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                <a
                  class="btn"
                  href="https://www.instagram.com/khalil_benachir/"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a class="btn" href="https://github.com/khalilbenachir">
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={7} className="aboutme__right">
        <img
            className="content_picture"
            src={Main}
            alt="main_picture"
          />
        </Col>
      </Row>
    </Container>
  );
};
export default AboutMe;
