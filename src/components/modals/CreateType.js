import React, { useState } from "react";
import { ModalTitle } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { createType } from "../../http/productAPI";

const CreateType = ({ show, onHide }) => {
  const [value, setValue] = useState("");

  const addType = () => {
    createType({ name: value }).then((data) => {
      setValue("");
      onHide();
    });
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
          <Form.Control
            placeholder={"Введите название типа"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></Form.Control>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Закрыть</Button>
        <Button onClick={addType}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;
