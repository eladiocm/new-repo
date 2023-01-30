import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./NewPassword.scss";

const NewPassword = (props) => {
    return (
        <div className="d-flex flex-column justify-content-between space">
            <div>
                <p className="new-pass-text1">Nueva contraseña</p>
                <p className="new-pass-text2">Introduzca su nueva contraseña</p>
            </div>
            <div>
                <Input
                    label="Nueva Contraseña"
                    type="password"
                    icon={<LockIcon />}
                    placeholder="Ingrese su contraseña"
                    icon2={<VisibilityIcon />}
                />
            </div>
            <div style={{ marginTop: "20px" }}>
                <Input
                    label="Confirmar Contraseña"
                    type="password"
                    icon={<LockIcon />}
                    placeholder="Ingrese su contraseña"
                    icon2={<VisibilityIcon />}
                />
            </div>

            <Button text="Guardar" styles="btn btn1" onClick={props.next} />
        </div>
    );
};

export default NewPassword;
