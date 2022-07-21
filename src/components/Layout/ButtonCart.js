import classes from "./ButtonCart.module.css";
import CartContext from "../../store/contextCart";
import { useContext } from "react";

const ButtonCart = (props) => {
  const ctx = useContext(CartContext);
  const nbr = ctx.items.length;
  
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>Your Cart</span>
      <span className={classes.badge}>{nbr}</span>
    </button>
  );
};

export default ButtonCart;
