import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartShown, setCartShown] = useState(false);
  const showcartHanlder = () => {
    setCartShown(true);
  };
  const hidecartHandler = () => {
    setCartShown(false);
  };
  return (
    <CartProvider>
      <Header onShowCart={showcartHanlder}/>
      <Meals />
      <main>
        {cartShown && <Cart onHide={hidecartHandler}/>}
      </main>
    </CartProvider>
  );
}

export default App;
