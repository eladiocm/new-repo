import React, { useState } from "react";
import "./Input.scss";
const Input = (props) => {
    const [isFocus, setIsFocus] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const focusHandler = () => {
        setIsFocus(true);
    };
    const blurHandler = () => {
        setIsFocus(false);
    };
    const typeHandler = () => {
        isSelected ? setIsSelected(false) : setIsSelected(true);
    };
    return (
        <>
            <label className="input-label">{props.label}</label>
            <div className="input-styles">
                <div className="input-content">
                    <div className="input-i">
                        <i
                            className={`${
                                isFocus ? "input-icon active" : "input-icon"
                            }`}
                        >
                            {props.icon}
                        </i>
                        <input
                            onFocus={focusHandler}
                            onBlur={blurHandler}
                            type={`${isSelected ? "text" : props.type}`}
                            placeholder={props.placeholder}
                        />
                    </div>
                    <i
                        className={`${
                            isSelected ? "input-icon active" : "input-icon"
                        } pointer`}
                        onClick={typeHandler}
                    >
                        {props.icon2}
                    </i>
                </div>
            </div>
        </>
    );
};

export default Input;
