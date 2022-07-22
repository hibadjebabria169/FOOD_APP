import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div >
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}></span>
        </div>
      </div>
    
    </li>
  );
};

export default CartItem;