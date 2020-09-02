import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Comp from "../images/Comp.png";

const HomeFooter = () => {
  return (
    <Row className="justify-content-center altrow">
      <Col md={3}>
        <p style={{ fontSize: 30 }}>
          <Image src={Comp} style={{ height: "100px" }} />
          Pivotchain
        </p>
      </Col>
      <Col md={3}>
        <h5>Contact us</h5>
        <h6>phone:99438753495</h6>
        <h6>email:hwhfkfddfg@gmail.com</h6>
      </Col>
      <Col md={2}>
        <h5>Explore</h5>
        <h6>About us</h6>
        <h6>Careers</h6>
        <h6>Contact</h6>
      </Col>
      <Col md={2}>
        <h5>Get In Touch</h5>
        <h6>Faceboot</h6>
        <h6>Twitter</h6>
        <h6>LinkedIn</h6>
      </Col>
    </Row>
  );
};
export default HomeFooter;
