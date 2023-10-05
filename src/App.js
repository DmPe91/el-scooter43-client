import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { check, basket_user } from "./http/authUserAPI";

const App = observer(() => {
  const { user } = useContext(Context);
  console.log(user.isAuth);
  useEffect(() => {
    check().then(async (data) => {
      if (data.id) {
        let basket = await basket_user(data.id);
        user.setBasket(basket);
        console.log(user.basket.id);
        user.setUser(data);
        user.setIsAuth(data.role);
      } else {
        user.setIsAuth("NO_USER");
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <AppRouter />;
    </BrowserRouter>
  );
});

export default App;
