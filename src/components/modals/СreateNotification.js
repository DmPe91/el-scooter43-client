import React, { useState } from "react";
import { ModalTitle } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CreateNotification = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <ModalTitle id="contained-modal-tittle-vcenter">
          Добавть новый тип
        </ModalTitle>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder={"Текст сообщения"}></Form.Control>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Закрыть</Button>
        <Button onClick={onHide}>Ответить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateNotification;
