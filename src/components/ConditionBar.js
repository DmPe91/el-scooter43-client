import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const ConditionBar = observer(() => {
  const { product } = useContext(Context);
  return (
    <Row className="d-flex" style={{ flexWrap: "nowrap", width: "20%" }}>
      {product.condition?.map((condition) => (
        <Card
          key={condition.id}
          className="p-2"
          style={{ margin: "5px", textAlign: "center" }}
          onClick={() => product.setSelectedCondition(condition)}
          border={
            condition.id === product.selectedCondition.id ? "dark" : "light"
          }
        >
          {condition.name}
        </Card>
      ))}
    </Row>
  );
});

export default ConditionBar;
