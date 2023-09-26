import React, { useContext, useState } from "react";
import { Context } from "../../index";
import { Dropdown, ModalTitle } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CreateProduct = ({ show, onHide }) => {
  const { product } = useContext(Context);
  const [info, setInfo] = useState([]);
  const addInfo = () => {
    setInfo([...info, { tittle: "", description: "", number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <ModalTitle id="contained-modal-tittle-vcenter">
          Добавть новый тип
        </ModalTitle>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
            <Dropdown.Menu>
              {product.types.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>Выберите состояние</Dropdown.Toggle>
            <Dropdown.Menu>
              {product.condition.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className="mt-3"
            placeholder="введите название устройства"
          ></Form.Control>
          <Form.Control
            className="mt-3"
            placeholder="введите цену"
            type="number"
          ></Form.Control>
          <Form.Control className="mt-3" type="file"></Form.Control>
          <hr />
          <Button onClick={addInfo}>Добавить новое свойство</Button>
          {info.map((i) => (
            <Row className="mt-4" key={i.number}>
              <Col md={4}>
                <Form.Control placeholder="введите название" />
              </Col>
              <Col md={4}>
                <Form.Control placeholder="введите описание" />
              </Col>
              <Col md={4}>
                <Button onClick={() => removeInfo(i.number)}>Удалить</Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Закрыть</Button>
        <Button onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateProduct;
