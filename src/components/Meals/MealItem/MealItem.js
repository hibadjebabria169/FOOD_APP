import classes from "./Mealitem.module.css";
import MealItemForm from "./MealForm";
import { useContext } from "react";
import CartContext from "../../../store/contextCart";

const MealItem = (props) => {
 const  crtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addCart = amount => {
    crtx.addItem({
      id : props.id,
      name : props.name,
      amount :amount,
      price : props.price,

    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <div> {props.name}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm label="Amount" onAdd={addCart}/>
      </div>
    </li>
  );
};

export default MealItem;
