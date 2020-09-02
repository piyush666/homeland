import React from "react";
import HomeFooter from "./HomeFooter";
import { Container } from "react-bootstrap";
import DashBoard from "./DashBoard";

export default function About() {
  return (
    <Container fluid>
      <DashBoard />
      <HomeFooter />
    </Container>
  );
}
