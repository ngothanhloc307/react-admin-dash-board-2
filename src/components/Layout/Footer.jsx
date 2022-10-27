import React from "react";
import { Container, Row, Col } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid={true}>
        <Row>
          <Col md={6}>{new Date().getFullYear()} ©NGOLOC.</Col>
          <Col md={6}>
            <div className="text-sm-end d-none d-sm-block">
              Made with love 🦓
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
