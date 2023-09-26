import React, { useContext, useState } from "react";

import Row from "react-bootstrap/Row";
import { Card, Col, Container, Image, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "..";

export const Basket = observer(() => {
  const [price, setPrice] = useState(Number);
  const { product } = useContext(Context);
  return (
    <Container>
      {product.product.map((prod) => (
        <Card>
          <Row key={prod.id}>
            <Col>
              <Image width={150} height={150} src={prod.img}></Image>
            </Col>
            <Col>{prod.name}</Col>
            <Col>{prod.price}</Col>
            <Col>
              <Button>Удалить</Button>
            </Col>
          </Row>
        </Card>
      ))}
      <Row>
        <Col>{}</Col>
      </Row>
    </Container>
  );
});
