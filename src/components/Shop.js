import React, { useContext, useEffect, useState } from "react";
import TypeBar from "./TypeBar";
import ConditionBar from "./ConditionBar";
import ProductList from "./ProductList";
import { Context } from "..";
import { Col, Container, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { fetchTypes, fetchCondition, fetchProducts } from "../http/productAPI";
import Pages from "./Pagination";
import { Spinner } from "react-bootstrap";

const Shop = observer(() => {
  const { product } = useContext(Context);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchTypes().then((data) => product.setTypes(data));
    fetchCondition().then((data) => product.setCondition(data));
    fetchProducts(null, null, 1, 8)
      .then((data) => {
        product.setProduct(data.rows);
        product.setTotalCount(data.count);
      })
      .finally(() => setLoading(false));
  }, []);
  useEffect(() => {
    fetchProducts(
      product.selectedType.id,
      product.selectedCondition.id,
      product.page,
      8
    ).then((data) => {
      product.setProduct(data.rows);
      product.setTotalCount(data.count);
    });
  }, [product.page, product.selectedType, product.selectedCondition]);

  if (loading) {
    return <Spinner animation={"grow"} />;
  }

  return (
    <Container style={{ borderBottom: "3px solid #2F4F4F" }}>
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
