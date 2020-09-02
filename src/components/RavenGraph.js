import React from "react";
import { Row, Image } from "react-bootstrap";
import fig from "../images/fig.png";

const RavenGraph = () => {
  return (
    <Row >
      <Image src={fig} style={{ width: "100%", height: "100%" }} />
    </Row>
  );
};
export default RavenGraph;
