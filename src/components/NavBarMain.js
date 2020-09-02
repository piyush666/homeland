import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Comp from "../images/Comp.png";

export default function NavBarMain() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="p-4" style={{backgroundColor:'#0f152e'}}>
      <Navbar.Brand href="/">
        <Image src={Comp} style={{ height: "50px" }} />
        PivotChain
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="mr-4" as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link className="mr-4" as={Link} to="/products">
            Products
          </Nav.Link>
          <Nav.Link className="mr-4" as={Link} to="/careers">
            Careers
          </Nav.Link>
          <Nav.Link className="mr-4" as={Link} to="/about">
            About us
          </Nav.Link>
          <Nav.Link className="mr-4" as={Link} to="/contact">
            Contacts
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
