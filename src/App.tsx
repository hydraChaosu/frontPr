import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import NotFound from "./views/NotFound";
import { UserView } from "./views/UserView";
import { RegisterView } from "./views/RegisterView";
import { LoginView } from "./views/LoginView";
import { BasketView } from "./views/BasketView";
import { SingleProductView } from "./views/SingleProductView";
import { ShopView } from "./views/ShopView";
import { useAppSelector } from "./redux/types";

function App() {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ShopView />} />
        {/*<Route path='/shop/:id' element={<SingleProductView/>}/>*/}

        <Route path="/basket" element={<BasketView />} />

        {isLoggedIn || <Route path="/login" element={<LoginView />} />}
        {isLoggedIn || <Route path="/register" element={<RegisterView />} />}

        {!isLoggedIn || <Route path="/user" element={<UserView />} />}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
