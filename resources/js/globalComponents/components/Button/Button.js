import React from "react";
import "./Button.scss";

const Button = (props) => {
    return (
        <button onClick={props.onClick} className={props.styles}>
            {props.text}
        </button>
    );
};

export default Button;
