import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import { Dropdown, ModalTitle } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  createProduct,
  fetchCondition,
  fetchProducts,
  fetchTypes,
} from "../../http/productAPI";
import { observer } from "mobx-react-lite";

const CreateProduct = observer(({ show, onHide }) => {
  const { product } = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchTypes().then((data) => product.setTypes(data));
    fetchCondition().then((data) => product.setCondition(data));
  }, []);

  const addInfo = () => {
    setInfo([...info, { tittle: "", description: "", number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("img", file);
    formData.append("conditionId", product.selectedCondition.id);
    formData.append("typeId", product.selectedType.id);
    formData.append("info", JSON.stringify(info));
    console.log(file, name, `${price}`, formData);
    createProduct(formData).then((data) => onHide());
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
            <Dropdown.Toggle>
              {product.selectedType.name || "Выберите тип"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {product.types.map((type) => (
                <Dropdown.Item
                  key={type.id}
                  onClick={() => product.setSelectedType(type)}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {product.selectedCondition.name || "Выберите состояние"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {product.condition.map((condition) => (
                <Dropdown.Item
                  key={condition.id}
                  onClick={() => product.setSelectedCondition(condition)}
                >
                  {condition.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-3"
            placeholder="введите название устройства"
          ></Form.Control>
          <Form.Control
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-3"
            placeholder="введите цену"
            type="number"
          ></Form.Control>
          <Form.Control
            className="mt-3"
            type="file"
            onChange={selectFile}
          ></Form.Control>
          <hr />
          <Button onClick={addInfo}>Добавить новое свойство</Button>
          {info.map((i) => (
            <Row className="mt-4" key={i.number}>
              <Col md={4}>
                <Form.Control
                  placeholder="введите название свойства"
                  value={i.title}
                  onChange={(e) =>
                    changeInfo("tittle", e.target.value, i.number)
                  }
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  placeholder="введите описание"
                  value={i.description}
                  onChange={(e) =>
                    changeInfo("description", e.target.value, i.number)
                  }
                />
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
        <Button onClick={addDevice}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateProduct;
