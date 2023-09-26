import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
  const { product } = useContext(Context);

  return (
    <ListGroup>
      {product.types.map((type) => (
        <ListGroup.Item
          active={type.id === product.selectedType.id}
          style={{ cursor: "pointer" }}
          key={type.id}
          onClick={() => product.setSelectedType(type)}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
