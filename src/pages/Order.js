import React from "react";
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

export const Order = () => {
  return (
    <>
      <style type="text/css">
        {`body{
        font-family: Comic Sans MS, Сomic Sans, cursive !important;
        color:#2F4F4F !important; 
      }
      .button{
        background: #2F4F4F;
        color: white !important;
        font-weight: bolder;
        margin-left: 10px;
      }
      .button:hover{
        background:white;
        border: 2px solid #2F4F4F;
        color:#2F4F4F !important;
      }
      `}
      </style>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: window.innerHeight - 54 }}
      >
        <Card style={{ width: 600 }} className="p-5">
          <h2 className="m-auto" style={{ color: "#2F4F4F" }}>
            Заявка на ремонт
          </h2>
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш телефон"
            style={{ color: "#2F4F4F" }}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш адрес(по желанию)"
            style={{ color: "#2F4F4F" }}
          />
          <Form.Control
            className="mt-3"
            placeholder="Тема"
            style={{ color: "#2F4F4F" }}
          />
          <Form.Control
            className="mt-3"
            placeholder="Описание"
            style={{ color: "#2F4F4F" }}
          />
          <Button
            variant={"outline-success"}
            className="mt-3 align-self-end button"
          >
            Войдите
          </Button>
        </Card>
      </Container>
    </>
  );
};
