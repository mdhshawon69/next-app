import React from "react";
import Link from "next/dist/client/link";
import classes from "./Button.module.css";

const Button = (props) => {
  if (props.link) {
    return (
      <div>
        <Link href={props.link}>
          <a className={classes.btn}>{props.children}</a>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <button type="button" className={classes.btn} onClick={props.onClick}>
          {props.children}
        </button>
      </div>
    );
  }
};

export default Button;
