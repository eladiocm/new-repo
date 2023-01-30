import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Padlock from "../Padlock/Padlock";

const LoginView = ({ onClick }) => {
    return (
        <div className="d-flex flex-column justify-content-between space">
            <div>
                <Input
                    label="Correo Electrónico"
                    type="email"
                    icon={<PersonIcon />}
                    placeholder="Ingrese su correo electrónico"
                />
            </div>
            <div style={{ marginTop: "16px" }}>
                <Input
                    label="Contraseña"
                    type="password"
                    icon={<LockIcon />}
                    // icon={<Padlock />}
                    placeholder="Ingrese su contraseña"
                    icon2={<VisibilityIcon />}
                />
            </div>
            <div>
                <NavLink to="/auth/monitorizar" className="btn btn1">
                    Ingresar
                </NavLink>
                <Button
                    text="Recuperar Contraseña"
                    styles="btn btn2"
                    onClick={onClick}
                />
            </div>
        </div>
    );
};

export default LoginView;
