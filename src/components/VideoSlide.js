import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import cctv from "../images/cctv.gif";

const VideoSlide = () => {
  return (
    <Row style={{ backgroundColor: "black" }}>
      <Row>
        {[1, 2, 3].map((item) => (
          <Col
            style={{ paddingRight: "0px", paddingLeft: "0px" }}
            className="mr-2"
            key={item}
          >
            <Image src={cctv} fluid></Image>
          </Col>
        ))}
      </Row>
      <Row>
        {[1, 2, 3].map((item) => (
          <Col
            style={{ paddingRight: "0px", paddingLeft: "0px" }}
            className="mt-2 mr-2"
            key={item}
          >
            <Image src={cctv} fluid></Image>
          </Col>
        ))}
      </Row>
    </Row>
  );
};
export default VideoSlide;
