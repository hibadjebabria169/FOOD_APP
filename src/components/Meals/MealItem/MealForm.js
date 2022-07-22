import Input from "../../UI/Input";
import classes from "./MealForm.module.css";
import { useRef } from "react";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const submit = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNbr = +enteredAmount;

    if (enteredAmount.trim().length === 0) {
      return;
    }

    props.onAdd(enteredAmountNbr);
  };

  return (
    <form className={classes.form} onSubmit={submit}>
      <Input
      ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          step: "1",
          defaultValue: "1",
          min:"0"
        }}
      />
      <button> Add</button>
      
    </form>
  );
};

export default MealItemForm;
