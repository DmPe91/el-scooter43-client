import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { check } from "./http/authUserAPI";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(data);
        user.setIsAuth(data.role);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <BrowserRouter>
      <AppRouter />;
    </BrowserRouter>
  );
});

export default App;
