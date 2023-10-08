import React, { useContext, useEffect, useState } from "react";
import BasketBar from "../components/BasketBar";
import Row from "react-bootstrap/Row";
import { Card, Col, Container, Image, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { fetchProducts } from "../http/productAPI";
import { check, basket_user, delete_basket_product } from "../http/authUserAPI";
import { Spinner } from "react-bootstrap";

export const Basket = observer(() => {
  const { user, product } = useContext(Context);

  return (
    <Container>
      {user.basket.basketproduct?.map((el) => (
        <BasketBar key={el.id} device={el} />
      ))}

      <Row>
        <Col>{product.totalSum} рублей</Col>
      </Row>
    </Container>
  );
});
