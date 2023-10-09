import React, { useContext } from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { add_basket_product, basket_user } from "../http/authUserAPI";
import { useNavigate } from "react-router-dom";
import {
  fetchTypes,
  fetchCondition,
  fetchProducts,
  delete_product,
} from "../http/productAPI";

const ProductItem = observer(({ prod }) => {
  const { user, product } = useContext(Context);
  const navigate = useNavigate();
  const click = async () => {
    if (user.isAuth === "NO_USER") {
      navigate("/registration");
    } else {
      await add_basket_product(user.basket.id, prod.id);
      let basket = await basket_user(user.user.id);
      user.setBasket(basket);
      product.setTotalSum(product.totalSum + prod.price);
    }
  };
  const delete_device = async () => {
    delete_product(prod.id).then(() => {
      fetchTypes().then((data) => product.setTypes(data));
      fetchCondition().then((data) => product.setCondition(data));
      fetchProducts(null, null, 1, 3).then((data) => {
        product.setProduct(data.rows);
        product.setTotalCount(data.count);
      });
    });
  };
  return (
    <Col md={3} className={"mt-3"}>
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image
          width={150}
          height={150}
          src={process.env.REACT_APP_API_URL + prod.img}
        />
        <div>{prod.name} </div>
        <div>{prod.price} рублей</div>
        <Link to={"/product" + "/" + prod.id}>
          <Button>Узнать больше</Button>
        </Link>
        <Button onClick={click}>Купить</Button>
        {user.isAuth === "ADMIN" && (
          <Button onClick={delete_device}>Удалить товар</Button>
        )}
      </Card>
    </Col>
  );
});

export default ProductItem;
