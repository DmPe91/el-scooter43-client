import React from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <Col md={3} className={"mt-3"}>
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image width={150} height={150} src={product.img} />
        <div>{product.name} </div>
        <div>{product.price} рублей</div>
        <Link to={"/product" + "/" + product.id}>
          <Button>Узнать больше</Button>
          <Button>Купить</Button>
        </Link>
      </Card>
    </Col>
  );
};

export default ProductItem;
