import React from "react";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Context } from "../index";
import Header from "./Header";
import {
  Home,
  Basket,
  Login,
  Product,
  Registration,
  Review,
  Admin,
  Order,
} from "../pages";

const AppRouter = () => {
  const { user } = useContext(Context);
  console.log(user);
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/order" element={<Order />} />
        {user.isAuth && <Route path="/admin" element={<Admin />} />}
        {user.isAuth && <Route path="/basket" element={<Basket />} />}
        {user.isAuth && <Route path="/review" element={<Review />} />}
      </Routes>
    </>
  );
};

export default AppRouter;
