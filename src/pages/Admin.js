import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import CreateProduct from "../components/modals/CreateProduct";
import CreateType from "../components/modals/CreateType";
import CreateNotification from "../components/modals/СreateNotification";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

export const Admin = observer(() => {
  const [typeVisible, setTypeVisisble] = useState(false);
  const [productVisible, setProductVisisble] = useState(false);
  const [notificationVisible, setNotificationVisisble] = useState(false);
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Заказы</Accordion.Header>
          <Accordion.Body>Это заказы</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Озывы</Accordion.Header>
          <Accordion.Body>Это отзывы</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Заявки</Accordion.Header>
          <Accordion.Body>Это заявки</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Добавить товар</Accordion.Header>
          <Accordion.Body>
            <Button onClick={() => setProductVisisble(true)}>
              Добавить товар
            </Button>
            <Button onClick={() => setTypeVisisble(true)}>Добавить тип</Button>
            <Button>Удалить товар</Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <CreateNotification
        show={notificationVisible}
        onHide={() => setNotificationVisisble(false)}
      />
      <CreateProduct
        show={productVisible}
        onHide={() => setProductVisisble(false)}
      />
      <CreateType show={typeVisible} onHide={() => setTypeVisisble(false)} />
    </>
  );
});
