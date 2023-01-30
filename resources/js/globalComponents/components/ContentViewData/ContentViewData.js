import React from "react";
import ReactDOM from "react-dom";
// import { NavLink, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Monitorizar from "../Monitorizar/Monitorizar";
import MonitorizarCreate from "../MonitorizarCreate/MonitorizarCreate";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import SimpleAcordion from "../SimpleAcordion/SimpleAcordion";

const ContentViewData = ({ stateView, setStateView }) => {
    return (
        <div
            style={{
                padding: "30px 80px",
                background: "#21325e",
                overflowY: "scroll",
            }}
        >
            <Routes>
                <Route
                    exact
                    path="/monitorizar"
                    element={
                        <Monitorizar
                            stateView={stateView}
                            setStateView={setStateView}
                        />
                    }
                ></Route>
                <Route
                    exact
                    path="/monitorizar/create"
                    element={
                        <MonitorizarCreate
                            stateView={stateView}
                            setStateView={setStateView}
                        />
                    }
                ></Route>
                <Route
                    exact
                    path="/videos"
                    element={
                        <SimpleAcordion
                            stateView={stateView}
                            setStateView={setStateView}
                        />
                    }
                ></Route>
                <Route
                    exact
                    path="/legales"
                    element={
                        <PrivacyPolicy
                            stateView={stateView}
                            setStateView={setStateView}
                        />
                    }
                ></Route>
            </Routes>

            {/* <Monitorizar /> */}
            {/* <MonitorizarCreate /> */}
            {/* <SimpleAcordion /> */}
        </div>
    );
};

export default ContentViewData;
