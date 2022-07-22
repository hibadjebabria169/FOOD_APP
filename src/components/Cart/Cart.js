import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/contextCart";
import CartItem from './CartItem/CartItem';

const Cart = (props) => {
  const ctxx = useContext(CartContext);
  const totalAmount = `$${ctxx.totalAmount.toFixed(2)}`;
  const hasItems = ctxx.items.length > 0;


  const cartItems = (
    <ul className={classes['cart-items']}>
      {ctxx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
         
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onHide}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHide}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
