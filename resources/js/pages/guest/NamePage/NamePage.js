import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../globalComponents/components/Button/Button";
import LoginView from "../../../globalComponents/components/LoginView/LoginView";
import NewPassword from "../../../globalComponents/components/NewPassword/NewPassword";
import RestorePassword from "../../../globalComponents/components/RestorePassword/RestorePassword";
import VerificationCode from "../../../globalComponents/components/VerificationCode/VerificationCode";
import "./NamePage.scss";
// import "./styles.scss";

const NamePage = ({ routes }) => {
    const [loginView, setLoginView] = useState(true);
    const [resPass, setResPass] = useState(false);
    const [verPass, setVerPass] = useState(false);
    const [newPass, setNewPass] = useState(false);

    const resPassHandler = () => {
        setResPass(true);
        setLoginView(false);
    };
    const backHandler = () => {
        setResPass(false);
        setLoginView(true);
    };
    const verPassHandler = () => {
        setVerPass(true);
        setResPass(false);
    };
    const cancelHandler = () => {
        setResPass(true);
        setVerPass(false);
    };
    const newPassHandler = () => {
        setNewPass(true);
        setVerPass(false);
    };
    const saveHandler = () => {
        setLoginView(true);
        setNewPass(false);
    };

    return (
        <>
            <div className="vh-100 w-100 d-inline-block d-flex justify-content-center align-items-center bg">
                {loginView && <LoginView onClick={resPassHandler} />}
                {resPass && (
                    <RestorePassword next={verPassHandler} back={backHandler} />
                )}
                {verPass && (
                    <VerificationCode
                        next={newPassHandler}
                        back={cancelHandler}
                    />
                )}
                {newPass && <NewPassword next={saveHandler} />}
            </div>
            <div className="footer">
                <p style={{ marginBottom: "0" }}>
                    Todos los derechos reservados 2022 © Mujer protegida | GDX |
                    Redes Vecinales de Seguridad por la Paz
                </p>
            </div>
        </>
    );
};

export default NamePage;
