import React, { useContext, useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import { Card, Col, Container, Image, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { delete_basket_product, basket_user } from "../http/authUserAPI";

const BasketBar = observer(({ device }) => {
  const { product, user } = useContext(Context);

  const click = async () => {
    await delete_basket_product(device.id).then(() => {
      basket_user(user.user.id).then((data) => {
        user.setBasket(data);
      });
    });
    product.setTotalSum(product.totalSum - device.price);
  };

  return (
    <Card>
      <Row key={device.id}>
        <Col>
          <Image
            width={150}
            height={150}
            src={"https://el-scooter-backend.onrender.com/" + device.img}
          ></Image>
        </Col>
        <Col>{device.name}</Col>
        <Col>{device.price}</Col>
        <Col>
          <Button onClick={click}>Удалить</Button>
        </Col>
      </Row>
    </Card>
  );
});

export default BasketBar;
