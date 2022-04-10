import { useContext, useEffect, useState } from "react";
import CartIcon from "../../Cart/CartIcon";
import CartContext from "../../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighligthed, setBtnIsHighligted] = useState(false);

  const cartCtx = useContext(CartContext);

  //object destructuring
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighligthed ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighligted(true);

    //it is best practice for calling cleanup function when you use useEffect hook
    const timer = setTimeout(() => {
      setBtnIsHighligted(false); //because if we don't clear this state it will work for only one time.
    }, 300); //300 because duration of bump animation

    return () => {
      clearTimeout(timer);
    };
  }, [items]); // with object destructuring we only use items for dependency

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
