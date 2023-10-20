import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { reviews } from "../http/authUserAPI";
import { Button, Container } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const OrdersBar = observer(() => {
  const { user, product } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [review, setReviews] = useState({});
  useEffect(() => {
    reviews()
      .then((data) => {
        setReviews(data.rows);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner animation={"grow"} />;
  }

  return (
    <Container className="mt-2">
      <Row style={{ borderBottom: "3px solid #2F4F4F" }}>
        <Col className="col-3">
          <Image src="../logo/remont.png" width="225px" height="225px" />
        </Col>
        <Col className="col-9">
          <h2>
            Сломался электротранспорт? Оставляйте заявку на ремонт или звоните
            по телефону: 89005258461.Наши мастера приедут и починят ваш
            транспорт!
          </h2>
          <Link to="/order">
            <Button style={{ background: "#2F4F4F" }}>оставить заявку</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        {review.map((rev) => (
          <Card
            key={rev.id}
            style={{ border: "3px solid #2F4F4F" }}
            className="col-2 m-3"
          >
            <Card.Text>{rev.description}</Card.Text>
            <Card.Title>{rev.cause}</Card.Title>
          </Card>
        ))}

        <h3>
          Пользовались нашими услугами? Напишите отзыв, мы его обязательно
          опубликуем
        </h3>
        <Link to="/review">
          <Button style={{ background: "#2F4F4F" }}>оставить отзыв</Button>
        </Link>
      </Row>
    </Container>
  );
});

export default OrdersBar;
