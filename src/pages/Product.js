import React, { useState, useContext, useEffect } from "react";
import { fetchProduct } from "../http/productAPI";
import { useParams } from "react-router-dom";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { add_basket_product } from "../http/authUserAPI";
import { useNavigate } from "react-router-dom";

export const Product = observer(() => {
  const [device, setDevice] = useState({ info: [] });
  const { product, user } = useContext(Context);
  let { id } = useParams();
  useEffect(() => {
    fetchProduct(id).then((data) => setDevice(data));
  }, []);

  const navigate = useNavigate();
  const click = async () => {
    if (user.isAuth === "NO_USER") {
      navigate("/registration");
    } else {
      let data;
      data = await add_basket_product(user.basket.id, device.id);
    }
  };
  console.log(device);
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + device.img}
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>От: {device.price} руб.</h3>
            <Button variant={"outline-dark"} onClick={click}>
              Добавить в корзину
            </Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики</h1>
        {device.info.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {info.tittle}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
});
