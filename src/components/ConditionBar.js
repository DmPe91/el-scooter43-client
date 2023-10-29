import React, { useContext, useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Spinner } from "react-bootstrap";
import { fetchCondition } from "../http/productAPI";

const ConditionBar = observer(() => {
  const { product } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCondition()
      .then((data) => product.setCondition(data))
      .finally(setLoading(false));
  }, []);

  if (loading) {
    return <Spinner animation={"grow"} />;
  }

  return (
    <Row className="d-flex" style={{ flexWrap: "nowrap", width: "20%" }}>
      {product.condition.map((condition) => (
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
