import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label className={classes.label} htmlFor={props.input.id}>
        {props.label}
      </label>
      <input
        {...props.input} //bu neden yazılıyor not cikar
      />
    </div>
  );
};

export default Input;