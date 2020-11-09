import React from "react";
import classes from "./Input.module.css";
import propTypes from "prop-types";

function Input(props) {
  return (
    <div className={classes["input-group"]}>
      <input
        className={classes["form-control"]}
        type={props.type}
        name={props.name}
        id="{props.id"
        required="required"
        placeholder="user name"
      />
      <label>{props.label}</label>
    </div>
  );
}
Input.prototype = {
  type: propTypes.string,
  name: propTypes.string,
  id: propTypes.string,
  required: propTypes.string,
  placeholder: propTypes.string,
  label: propTypes.string,
};
export default Input;
