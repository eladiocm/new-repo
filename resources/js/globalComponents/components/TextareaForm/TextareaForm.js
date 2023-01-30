import React from "react";
import "./TextareaForm.scss";

const TextareaForm = (props) => {
    return (
        <>
            <label>{props.label}</label>
            <div className="textAreaForm">
                {props.icon}
                <textarea placeholder={props.placeholder} />
            </div>
        </>
    );
};

export default TextareaForm;
