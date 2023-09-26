import React, { useContext } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Context } from "..";
import Button from "react-bootstrap/Button";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const Header = observer(() => {
  const { user } = useContext(Context);
  return (
    <>
      <style type="text/css">{`
      body{
        font-family: Comic Sans MS, Сomic Sans, cursive !important;
        color:#2F4F4F !important; 
      }
      .logo{
        margin-top: 40px;
        text-align: center;

      .menu{
        font-weight: bolder;
      }
      .menu:hover {
       background: #2F4F4F;
       color: white !important;
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
        }`}</style>
      <Container style={{ borderBottom: "3px solid #2F4F4F" }}>
        <Row>
          <Col xs={2} className="mt-2">
            <Image src="../logo/logo2.jpg" width="200px" height="200px" />
          </Col>

          <Col xs={7} className="logo">
            <Row>
              <h1>SCOOTER43</h1>
            </Row>
            <Row>
              <h2>магазин и сервис ремонта электротранспорта</h2>
            </Row>
            <Row className="ml-4">
              <Col>
                <Nav className="" style={{ marginLeft: "15px" }}>
                  <Nav.Link
                    href="/"
                    className="menu"
                    style={{ color: "#2F4F4F" }}
                  >
                    Магазин
                  </Nav.Link>
                  <Nav.Link
                    href="/order"
                    className="menu"
                    style={{ color: "#2F4F4F" }}
                  >
                    Ремонт
                  </Nav.Link>
                  <Nav.Link
                    href="/review"
                    className="menu"
                    style={{ color: "#2F4F4F" }}
                  >
                    Отзывы
                  </Nav.Link>
                </Nav>
              </Col>
              <Col>
                {user.isAuth === "NO_USER" ? (
                  <Nav>
                    <Link to="/login">
                      <Button variant={"outline-light"} className="button">
                        Авторизация
                      </Button>
                    </Link>
                    <Link to="/registration">
                      <Button variant={"outline-light"} className="button">
                        Регистрация
                      </Button>
                    </Link>
                  </Nav>
                ) : user.isAuth === "ADMIN" ? (
                  <Nav>
                    <Link to="/admin">
                      <Button variant={"outline-light"} className="button">
                        АдминПанель
                      </Button>
                    </Link>
                    <Link>
                      <Button variant={"outline-light"} className="button">
                        Выйти
                      </Button>
                    </Link>
                  </Nav>
                ) : (
                  <Nav>
                    <Link to="/basket">
                      <Button variant={"outline-light"} className="button">
                        Корзина
                      </Button>
                    </Link>
                    <Link>
                      <Button variant={"outline-light"} className="button">
                        Выйти
                      </Button>
                    </Link>
                  </Nav>
                )}
              </Col>
            </Row>
          </Col>
          <Col xs={2}>
            <Image src="../logo/logo1.jpg" width="250px" height="250px" />
          </Col>
        </Row>
      </Container>
    </>
  );
});

export default Header;
