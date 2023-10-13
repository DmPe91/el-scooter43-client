import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { reviews } from "../http/authUserAPI";
import { Button, Container } from "react-bootstrap";

const OrdersBar = observer(() => {
  const { user, product } = useContext(Context);
  const [review, setReviews] = useState({});
  useEffect(() => {
    reviews().then((data) => {
      setReviews(data.rows);
    });
  }, []);
  console.log(review);
  return (
    <Container>
      <Row>
        <Card>
          <h2>
            Мы осуществляем не только продажу, но и ремонт электротранспорта, а
            также выкуп неисправного транспорта, оставляйте заявку на ремонт или
            звоните по телефону: 89005258461
          </h2>
          <Link to="/order">
            <Button>оставить заявку</Button>
          </Link>
        </Card>
        <Card>
          <h3>
            Почитайте отзывы довольных клиентов, если вы пользовались нашими
            услугами, оставте отзыв
          </h3>
          <Link to="/review">
            <Button>оставить отзыв</Button>
          </Link>
        </Card>
      </Row>
      <Row>
        <Col>
          {review.map((rev) => (
            <Col key={rev.id}>
              <Card>{rev.cause}</Card>
              <Card>{rev.description}</Card>
            </Col>
          ))}
        </Col>
      </Row>
    </Container>
  );
});

export default OrdersBar;
