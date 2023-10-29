import React, { useEffect, useContext } from "react";
import { Context } from "..";
import Shop from "../components/Shop";
import OrdersBar from "../components/OrdersBar";
import { observer } from "mobx-react-lite";

export const Home = observer(() => {
  return (
    <>
      <Shop mt={3} />
      <OrdersBar />
    </>
  );
});
