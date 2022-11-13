import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">APP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/add">ADD</Nav.Link>
            <Nav.Link href="/edit">EDIT</Nav.Link>
            <Nav.Link href="/delete">DELETE</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
