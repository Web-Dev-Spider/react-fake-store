import React from "react";
import Container from "react-bootstrap/Container";

function Header() {
  return (
    <Container fluid className="bg-primary text-white py-3 text-center">
      <h3 className="py-0 my-0">Fake Store</h3>
      <p className="my-0">Your one-stop shop for demo products</p>
    </Container>
  );
}

export default Header;
