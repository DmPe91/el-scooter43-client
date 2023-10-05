import React, { useContext, useEffect } from "react";
import TypeBar from "./TypeBar";
import ConditionBar from "./ConditionBar";
import ProductList from "./ProductList";
import { Context } from "..";
import { Col, Container, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { fetchTypes, fetchCondition, fetchProducts } from "../http/productAPI";
import Pages from "./Pagination";

const Shop = observer(() => {
  const { product } = useContext(Context);
  useEffect(() => {
    fetchTypes().then((data) => product.setTypes(data));
    fetchCondition().then((data) => product.setCondition(data));
    fetchProducts(null, null, 1, 3).then((data) => {
      product.setProduct(data.rows);
      product.setTotalCount(data.count);
    });
  }, []);
  useEffect(() => {
    fetchProducts(
      product.selectedType.id,
      product.selectedCondition.id,
      product.page,
      5
    ).then((data) => {
      product.setProduct(data.rows);
      product.setTotalCount(data.count);
    });
  }, [product.page, product.selectedType, product.selectedCondition]);
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <ConditionBar />
          <ProductList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
