import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { check, basket_user } from "./http/authUserAPI";

const App = observer(() => {
  const { user, product } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      check()
        .then(async (data) => {
          let basket = await basket_user(data.id);
          user.setBasket(basket);
          if (user.basket.basketproduct.length > 0) {
            user.basket.basketproduct.forEach((el) => {
              product.setTotalSum(product.totalSum + el.price);
            });
          }
          user.setUser(data);
          user.setIsAuth(data.role);
        })
        .catch((e) => {
          alert("Сессия закончилоась ввойдите заново");
          localStorage.removeItem("token");
        });
    }
  }, []);

  return (
    <BrowserRouter>
      <AppRouter />;
    </BrowserRouter>
  );
});

export default App;
