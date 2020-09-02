import React from "react";
import { Container } from "react-bootstrap";
import VideoSlide from "./VideoSlide";
import RavenIntro from "./RavenIntro";
import Events from "./Events";
import Features from "./Features";
import DashBoard from "./DashBoard";
import LastCarousel from "./LastCarousel";
import RavenGraph from "./RavenGraph";
import HomeFooter from "./HomeFooter";

export default function Home() {
  return (
    <Container fluid>
      <VideoSlide />
      <RavenIntro />
      <Events />
      <Features />
      <DashBoard />
      <LastCarousel />
      <RavenGraph />
      <HomeFooter />
    </Container>
  );
}
