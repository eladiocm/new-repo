import React from "react";
import "./NavBar.scss";
import NotificationsTwoToneIcon from "@mui/icons-material/NotificationsTwoTone";
import TitleSection from "../TitleSection/TitleSection";
import NavBarTime from "../NavBarTime/NavBarTime";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

function NavBar({ stateView }) {
    const text = `${
        (stateView == 1 && "Monitorista") ||
        (stateView == 2 && "Monitorista - Ver emergencia 11205") ||
        (stateView == 3 && "Vídeos en vivo") ||
        (stateView == 4 && "Políticas de privacidad") ||
        (stateView == 5 && "Términos y condiciones")
    }`;
    return (
        <div className="content-navBar">
            <TitleSection titleNav={text} icon={<VisibilityOutlinedIcon />} />
            <div className="div-time">
                <NavBarTime />
                <div className="div-notification">
                    <i className="notify">
                        <NotificationsTwoToneIcon />
                    </i>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
