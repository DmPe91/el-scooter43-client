import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import Row from "react-bootstrap/Row";

import { observer } from "mobx-react-lite";
import { Context } from "..";

const ProductList = observer(() => {
  const { product } = useContext(Context);

  return (
    <Row className="d-flex">
      {product.product.map((prod) => (
        <ProductItem key={prod.id} product={prod} />
      ))}
    </Row>
  );
});

export default ProductList;
