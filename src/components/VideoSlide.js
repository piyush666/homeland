import React from "react";
import { Row, ResponsiveEmbed } from "react-bootstrap";
import Vid from "../images/Vid.mov";

const VideoSlide = () => {
  return (
    <Row style={{ backgroundColor: "black" }}>
      <ResponsiveEmbed aspectRatio="16by9">
        <video src={Vid} type="video/mov" autoPlay={true} loop={true} />
      </ResponsiveEmbed>
    </Row>
  );
};
export default VideoSlide;
