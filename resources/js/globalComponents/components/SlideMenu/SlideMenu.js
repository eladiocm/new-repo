import React, { useState } from "react";
import "./SlideMenu.scss";
import ArrowRightSharpIcon from "@mui/icons-material/ArrowRightSharp";
import Imagen from "../../../img/assets/icons/gdx.png";
import Imagen2 from "../../../img/assets/icons/Logo.png";
import Imagen3 from "../../../img/assets/icons/mujerprotegida.png";
import Imagen4 from "../../../img/assets/icons/Icon.svg";
import M from "@mui/icons-material/VisibilityOutlined";
import Usuario from "@mui/icons-material/PersonOutlineOutlined";
import VideoC from "@mui/icons-material/VideoCameraBackOutlined";
import Preguntas from "@mui/icons-material/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Soporte from "@mui/icons-material/AnnouncementOutlined";
import Cerrar from "@mui/icons-material/DoNotDisturbOnOutlined";
import Reportes from "@mui/icons-material/SummarizeOutlined";
import EC from "@mui/icons-material/DoDisturbAltOutlined";
import Notificaciones from "@mui/icons-material/NotificationsOutlined";
import EM from "@mui/icons-material/AnnouncementOutlined";
import { NavLink } from "react-router-dom";

const SlideMenu = () => {
    const [dropdown, setdropdown] = useState(false);
    const [dropdown2, setdropdown2] = useState(false);
    return (
        <div className="slideMenu">
            <div>
                <div className="div-img1">
                    <img className="img1" src={Imagen} alt="Logo" />
                </div>
                <div className="div-img2">
                    <img className="img2" src={Imagen2} alt="log" />
                    <img className="img3" src={Imagen3} alt="log" />
                </div>
                <div className="div-panel">
                    <ul className="ul-slide">
                        <li
                            className={
                                dropdown ? "li-slide active" : "li-slide"
                            }
                            // style={{ backgroundColor: "#00b4d8" }}
                            onClick={() => {
                                setdropdown(!dropdown);
                                setdropdown2(false);
                            }}
                        >
                            <div className="li-slide-panel">
                                <i>
                                    <img src={Imagen4} alt="imagen"></img>
                                </i>
                                Panel de Control
                            </div>
                            <i className="flecha">
                                <ArrowRightSharpIcon />
                            </i>
                            <div
                                className="dropdown1"
                                style={{
                                    display: `${dropdown ? "block" : "none"}`,
                                }}
                            >
                                <ul>
                                    <li className="drop">
                                        <NavLink
                                            className={({ isActive }) =>
                                                isActive ? "active" : ""
                                            }
                                            to="/auth/monitorizar"
                                        >
                                            <M />
                                            Monitorista
                                        </NavLink>
                                    </li>
                                    <li className="drop">
                                        <NavLink to="/auth/#">
                                            <Reportes />
                                            Despachador
                                        </NavLink>
                                    </li>
                                    <li className="drop">
                                        <NavLink to="/auth/videos">
                                            <VideoC />
                                            Videos en Vivo
                                        </NavLink>
                                    </li>
                                    <li className="drop">
                                        <NavLink to="/auth/#">
                                            <EC />
                                            Emergencias Cerradas
                                        </NavLink>
                                    </li>
                                    <li className="drop">
                                        <NavLink to="/auth/#">
                                            <Notificaciones />
                                            Notificaciones
                                        </NavLink>
                                    </li>
                                    <li className="drop">
                                        <NavLink to="/auth/#">
                                            <EM />
                                            Emergencia Manual
                                        </NavLink>
                                    </li>
                                    <li className="drop">
                                        <NavLink to="/auth/#">
                                            <M />
                                            Unidades
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            className={
                                dropdown2 ? "li-slide active" : "li-slide"
                            }
                            onClick={() => {
                                setdropdown2(!dropdown2);
                                setdropdown(false);
                            }}
                        >
                            <div className="li-slide-panel">
                                <i>
                                    <SettingsOutlinedIcon />
                                </i>
                                Configuración
                            </div>
                            <i className="flecha">
                                <ArrowRightSharpIcon />
                            </i>
                            <div
                                className="dropdown1"
                                style={{
                                    display: `${dropdown2 ? "block" : "none"}`,
                                }}
                            >
                                <ul>
                                    <li className="drop">
                                        <NavLink to="/auth/#">
                                            <Reportes />
                                            Reportes
                                        </NavLink>
                                    </li>
                                    <li className="drop">
                                        <NavLink to="/auth/#">
                                            <M />
                                            Catálogos
                                        </NavLink>
                                    </li>
                                    <li className="drop">
                                        <NavLink to="/auth/#">
                                            <Usuario />
                                            Usuarios del Sistema
                                        </NavLink>
                                    </li>
                                    <li className="drop">
                                        <NavLink to="/auth/#">
                                            <VideoC />
                                            Redes Vecinales
                                        </NavLink>
                                    </li>
                                    <li className="drop">
                                        <NavLink to="/auth/#">
                                            <Preguntas />
                                            Preguntas Frecuentes
                                        </NavLink>
                                    </li>
                                    <li className="drop">
                                        <NavLink to="/auth/#">
                                            <Soporte />
                                            Soporte
                                        </NavLink>
                                    </li>
                                    <li className="drop">
                                        <NavLink to="/auth/legales">
                                            <M />
                                            Legales
                                        </NavLink>
                                    </li>
                                    <li className="drop">
                                        <NavLink to="/">
                                            <Cerrar />
                                            Cerrar Sesión
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    {/* <NavLink to="/auth/monitorizar" className="btn btn1">
                        Ingresar
                    </NavLink> */}
                </div>
            </div>
        </div>
    );
};

export default SlideMenu;
