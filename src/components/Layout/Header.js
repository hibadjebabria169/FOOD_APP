import { Fragment } from "react";
import classes from "./Header.module.css";
import Headerimg from "../../assets/header.jpg";
import ButtonCart from "./ButtonCart";



const Header = (props) => {

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FOOD APP</h1>
        <ButtonCart onClick={props.onShowCart}/>

      </header>
      <div className={classes['main-image']}>
        <img src={Headerimg} alt="HeaderFood" />
      </div>
    </Fragment>
  );
};

export default Header;
