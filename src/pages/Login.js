import React from "react";
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

export const Login = () => {
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
            Авторизуйтесь
          </h2>
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш email..."
            style={{ color: "#2F4F4F" }}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш пароль..."
            type="password"
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
