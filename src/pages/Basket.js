import React, { useContext, useState } from "react";
import BasketBar from "../components/BasketBar";
import Row from "react-bootstrap/Row";
import { Card, Col, Container, Image, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "..";

export const Basket = observer(() => {
  const { user, product } = useContext(Context);
  const [price, setPrice] = useState(Number);
  let res = 0;
  user.basket.basketproduct.forEach((el) => {
    for (let i = 0; i < product.product.length; i++) {
      if (el.productId === product.product[i].id) {
        res = res + product.product[i].price;
      }
    }
  });
  return (
    <Container>
      {user.basket.basketproduct.map((el) => (
        <BasketBar key={el.id} device={el} />
      ))}

      <Row>
        <Col>{res} рублей</Col>
      </Row>
    </Container>
  );
});
