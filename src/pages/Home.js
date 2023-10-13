import React, { useEffect, useContext } from "react";
import { Context } from "..";
import Shop from "../components/Shop";
import OrdersBar from "../components/OrdersBar";

export const Home = () => {
  return (
    <>
      <Shop mt={3} />
      <OrdersBar />
    </>
  );
};
