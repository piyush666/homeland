import React from "react";
import HomeFooter from "./HomeFooter";
import Features from "./Features";
import { Container } from "react-bootstrap";

export default function Products() {
  return (
    <Container fluid>
      <Features />
      <HomeFooter />
    </Container>
  );
}
