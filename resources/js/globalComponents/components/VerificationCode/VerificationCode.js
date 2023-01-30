import React from "react";
import Button from "../Button/Button";
import "./VerificationCode.scss";

const VerificationCode = (props) => {
    return (
        <div
            style={{ width: "300px" }}
            className="d-flex flex-column justify-content-between space"
        >
            <p className="verif-text">Ingresar código de verificación</p>
            <div className="d-flex justify-content-between">
                <input className="verif-input" type="text" />
                <input className="verif-input" type="text" />
                <input className="verif-input" type="text" />
                <input className="verif-input" type="text" />
                <input className="verif-input" type="text" />
                <input className="verif-input" type="text" />
                {/* <input
                    style={{
                        marginBottom: "10px",
                        width: "45px",
                        height: "45px",
                    }}
                    type="text"
                />
                <input
                    style={{
                        marginBottom: "10px",
                        width: "45px",
                        height: "45px",
                    }}
                    type="text"
                />
                <input
                    style={{
                        marginBottom: "10px",
                        width: "45px",
                        height: "45px",
                    }}
                    type="text"
                />
                <input
                    style={{
                        marginBottom: "10px",
                        width: "45px",
                        height: "45px",
                    }}
                    type="text"
                />
                <input
                    style={{
                        marginBottom: "10px",
                        width: "45px",
                        height: "45px",
                    }}
                    type="text"
                /> */}
            </div>
            <Button text="Continuar" styles="btn btn1" onClick={props.next} />
            <Button text="Cancelar" styles="btn btn2" onClick={props.back} />
        </div>
    );
};

export default VerificationCode;
