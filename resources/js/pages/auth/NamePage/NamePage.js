import React, { useEffect, useState, useRef } from "react";
import "./NamePage.scss";
import { NavLink } from "react-router-dom";
import NavBar from "../../../globalComponents/components/NavBar/NavBar";
import Table from "../../../globalComponents/components/Table/Table";
import ContentViewData from "../../../globalComponents/components/ContentViewData/ContentViewData";
import SlideMenu from "../../../globalComponents/components/SlideMenu/SlideMenu";
// import classNames from 'classnames';

const NamePage = ({ routes }) => {
    const [stateView, setStateView] = useState(1);
    return (
        <div className="pageContainer">
            <SlideMenu />
            <div className="content-info">
                <NavBar stateView={stateView} />
                <ContentViewData
                    stateView={stateView}
                    setStateView={setStateView}
                />
                <div className="foote">
                    <small>
                        Todos los derechos reservados 2022 © Mujer protegida |
                        GDX | Redes Vecinales de Seguridad por la Paz
                    </small>
                </div>
            </div>
        </div>
    );
};

export default NamePage;
