import React, { useState, useContext, useEffect } from "react";
import { Context } from "..";
import { fetchTypes, delete_type } from "../http/productAPI";
import {
  baskets,
  delete_basket,
  moderation_review,
  orders,
  reviews,
  delete_order,
  delete_review,
} from "../http/authUserAPI";
import { observer } from "mobx-react-lite";
import CreateProduct from "../components/modals/CreateProduct";
import CreateType from "../components/modals/CreateType";
import CreateNotification from "../components/modals/СreateNotification";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import { Spinner } from "react-bootstrap";

export const Admin = observer(() => {
  const { user, product } = useContext(Context);
  const [typeVisible, setTypeVisisble] = useState(false);
  const [productVisible, setProductVisisble] = useState(false);
  const [notificationVisible, setNotificationVisisble] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    baskets().then((data) => user.setBaskets(data));
    reviews().then((data) => user.setReviews(data));
    fetchTypes().then((data) => product.setTypes(data));
    orders()
      .then((data) => user.setOrders(data))
      .finally(() => setLoading(false));
  }, []);
  const click_deletebasket = (id) => {
    delete_basket(id).then(() => {
      baskets().then((data) => user.setBaskets(data));
    });
  };
  const click_moderation = (id) => {
    moderation_review(id).then(() => {
      reviews().then((data) => user.setReviews(data));
    });
  };
  const click_deletereview = (id) => {
    delete_review(id).then(() => {
      reviews().then((data) => user.setReviews(data));
    });
  };
  const click_deleteorder = (id) => {
    delete_order(id).then(() => {
      orders().then((data) => user.setOrders(data));
    });
  };

  const click_deletetype = (id) => {
    delete_type(id).then(() => {
      fetchTypes().then((data) => product.setTypes(data));
    });
  };

  if (loading) {
    return <Spinner animation={"grow"} />;
  }
  console.log(user.reviews);

  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Заказы</Accordion.Header>
          <Accordion.Body>
            {user.baskets.rows.map((basket) => (
              <Row key={basket.id}>
                {basket.basketproduct.map((bp) => (
                  <Row>
                    <Col>{bp.name}</Col>
                    <Col>{bp.price}</Col>
                  </Row>
                ))}
                <Button onClick={() => click_deletebasket(basket.id)}>
                  Удалить заказ
                </Button>
              </Row>
            ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Отзывы</Accordion.Header>
          <Accordion.Body>
            {user.reviews.rows.map((review) => (
              <Row key={review.id}>
                <Col>{review.cause}</Col>
                <Col>{review.description}</Col>
                <Col>
                  {review.moderation === true ? (
                    "Опубликовано"
                  ) : (
                    <Button onClick={() => click_moderation(review.id)}>
                      Опубликовать
                    </Button>
                  )}
                </Col>
                <Col>
                  <Button
                    onClick={() => {
                      click_deletereview(review.id);
                    }}
                  >
                    Удалить отзыв
                  </Button>
                </Col>
              </Row>
            ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Заявки на ремонт</Accordion.Header>
          <Accordion.Body>
            {user.orders.rows.map((order) => (
              <Row key={order.id}>
                <Col>{order.cause}</Col>
                <Col>{order.description}</Col>
                <Col>{order.place}</Col>
                <Col>{order.contact}</Col>
                <Col>
                  <Button onClick={() => click_deleteorder(order.id)}>
                    Удалить заявку
                  </Button>
                </Col>
              </Row>
            ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Удалить типы товаров</Accordion.Header>
          <Accordion.Body>
            {product.types.map((type) => (
              <Row key={type.id}>
                <Col>{type.name}</Col>
                <Col>
                  <Button onClick={() => click_deletetype(type.id)}>
                    Удалить тип
                  </Button>
                </Col>
              </Row>
            ))}
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>Добавить товар и тип</Accordion.Header>
          <Accordion.Body>
            <Button onClick={() => setProductVisisble(true)}>
              Добавить товар
            </Button>
            <Button onClick={() => setTypeVisisble(true)}>Добавить тип</Button>
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
