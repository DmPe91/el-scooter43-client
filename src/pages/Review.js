import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { observer } from "mobx-react-lite";
import React, { useState, useContext } from "react";
import { Context } from "..";
import { create_review } from "../http/authUserAPI";
import { useNavigate } from "react-router-dom";

export const Review = observer(() => {
  const { user, product } = useContext(Context);
  const [cause, setCause] = useState(" ");
  const [description, setDescription] = useState(" ");
  let navigate = useNavigate();
  const click = async () => {
    await create_review(cause, description);
    navigate("/");
    alert("Ваша отзыв успешно отправлен.После модерации, он будет опубликован");
  };
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
            Оставте свой отзыв
          </h2>
          <Form.Control
            className="mt-3"
            placeholder="Введите ваше имя"
            style={{ color: "#2F4F4F" }}
            value={cause}
            onChange={(e) => {
              setCause(e.target.value);
            }}
          />
          <Form.Control
            className="mt-3"
            placeholder="Отзыв"
            style={{ color: "#2F4F4F" }}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          <Button
            variant={"outline-success"}
            className="mt-3 align-self-end button"
            onClick={click}
          >
            Отправить отзыв
          </Button>
        </Card>
      </Container>
    </>
  );
});
