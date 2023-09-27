import React, { useContext, useEffect } from "react";
import TypeBar from "./TypeBar";
import ConditionBar from "./ConditionBar";
import ProductList from "./ProductList";
import { Context } from "..";
import { Col, Container, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { fetchTypes, fetchCondition, fetchProducts } from "../http/productAPI";

const Shop = observer(() => {
  const { product } = useContext(Context);
  useEffect(() => {
    fetchTypes().then((data) => product.setTypes(data));
    fetchCondition().then((data) => product.setCondition(data));
    fetchProducts().then((data) => product.setProduct(data.rows));
  }, []);
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
});

export default Shop;
