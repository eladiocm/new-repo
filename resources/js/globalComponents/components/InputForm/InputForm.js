import React from "react";
import "./InputForm.scss";

function InputForm(props) {
    return (
        <>
            <label>{props.label}</label>
            <div className="inputForm">
                {props.icon}
                <input type={props.type} placeholder={props.placeholder} />
            </div>
        </>
    );
}

export default InputForm;
