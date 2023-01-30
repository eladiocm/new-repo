import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import PersonIcon from "@mui/icons-material/Person";
import "./RestorePassword.scss";

const RestorePassword = (props) => {
    return (
        <div className="d-flex flex-column justify-content-between space">
            <div>
                <p className="text1">Recuperar contraseña</p>
                <p className="text2">Se enviará un código de recuperación</p>
            </div>
            <div>
                <Input
                    label="Correo Electrónico"
                    type="email"
                    icon={<PersonIcon />}
                    placeholder="Ingrese su correo electrónico"
                />
            </div>
            <div>
                <Button
                    text="Continuar"
                    styles="btn btn1"
                    onClick={props.next}
                />
                <Button text="Volver" styles="btn btn2" onClick={props.back} />
            </div>
        </div>
    );
};

export default RestorePassword;
