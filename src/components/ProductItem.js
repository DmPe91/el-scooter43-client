import React, { useContext } from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { add_basket_product } from "../http/authUserAPI";
import { useNavigate } from "react-router-dom";

const ProductItem = observer(({ product }) => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const click = async () => {
    if (user.isAuth === "NO_USER") {
      navigate("/registration");
    } else {
      let data;
      data = await add_basket_product(user.basket.id, product.id);
    }
  };
  return (
    <Col md={3} className={"mt-3"}>
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image
          width={150}
          height={150}
          src={process.env.REACT_APP_API_URL + product.img}
        />
        <div>{product.name} </div>
        <div>{product.price} рублей</div>
        <Link to={"/product" + "/" + product.id}>
          <Button>Узнать больше</Button>
        </Link>
        <Button onClick={click}>Купить</Button>
      </Card>
    </Col>
  );
});

export default ProductItem;
