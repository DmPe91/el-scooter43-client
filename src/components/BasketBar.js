import React, { useContext, useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import { Card, Col, Container, Image, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "..";

const BasketBar = observer(({ device }) => {
  const { product } = useContext(Context);
  let res;
  device = product.product.forEach((el) => {
    if (el.id === device.productId) {
      res = el;
    }
  });
  console.log(res);
  return (
    <Card>
      <Row key={res.id}>
        <Col>
          <Image
            width={150}
            height={150}
            src={process.env.REACT_APP_API_URL + res.img}
          ></Image>
        </Col>
        <Col>{res.name}</Col>
        <Col>{res.price}</Col>
        <Col>
          <Button>Удалить</Button>
        </Col>
      </Row>
    </Card>
  );
});

export default BasketBar;
