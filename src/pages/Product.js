import React, { useState, useContext } from "react";

import { useParams } from "react-router-dom";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

export const Product = observer(() => {
  const { product } = useContext(Context);
  let { id } = useParams();

  const [productId, setProductId] = useState({});

  return (
    <Container>
      {product.product.forEach((pr) => {
        if (pr.id === id) {
          setProductId(pr);
        }
      })}
    </Container>
  );
});
