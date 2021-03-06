import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label className={classes.label} htmlFor={props.input.id}>
        {props.label}
      </label>
      <input
        ref={ref}
        {...props.input} //bu neden yazılıyor not cikar
      />
    </div>
  );
});

export default Input;
