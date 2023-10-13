import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
  const { product } = useContext(Context);

  return (
    <>
      <style type="text/css">{`
       .list-group-item {
        background: #2F4F4F;
       color: white !important;
       }
      
      }`}</style>
      <ListGroup>
        {product.types.map((type) => (
          <ListGroup.Item
            active={type.id === product.selectedType.id}
            style={{ cursor: "pointer" }}
            key={type.id}
            onClick={() => product.setSelectedType(type)}
            className="list-group-item  list-group-item-light"
          >
            {type.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
});

export default TypeBar;
