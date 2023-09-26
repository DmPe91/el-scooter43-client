import React from "react";
import TypeBar from "./TypeBar";
import ConditionBar from "./ConditionBar";
import ProductList from "./ProductList";
import { Col, Container, Row } from "react-bootstrap";

const Shop = () => {
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <ConditionBar />
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
