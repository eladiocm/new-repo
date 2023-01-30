import React from "react";
import "./SelectForm.scss";

const SelectForm = (props) => {
    return (
        <>
            <label>{props.label}</label>
            <div className="textareaForm">
                {props.icon}
                <select name="select">
                    {props.values.map((value, index) => (
                        <option value={value} key={index}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default SelectForm;
