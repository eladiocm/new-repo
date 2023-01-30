import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Monitorizar from "../../globalComponents/components/Monitorizar/Monitorizar";

import NamePageAuth from "../auth/NamePage/NamePage";
import NamePage from "../guest/NamePage/NamePage";

const GlobalRouter = () => {
    const [routes, setRoutes] = useState(
        JSON.parse(
            document.getElementsByName("routeApi")[0].getAttribute("content")
        )
    );

    return (
        <>
            <Router>
                <div
                    className={
                        "app-admin-wrap layout-sidebar-vertical sidebar-full"
                    }
                >
                    <div
                        className={
                            "main-content-wrap mobile-menu-content bg-off-white m-0 p-0"
                        }
                    >
                        <Routes>
                            <Route
                                exact
                                path="/"
                                element={<NamePage routes={routes} />}
                            ></Route>
                            {/* <Route
                                exact
                                path="/auth"
                                element={<NamePageAuth routes={routes} />}
                            ></Route> */}
                            <Route
                                exact
                                path="/auth/*"
                                element={<NamePageAuth routes={routes} />}
                            ></Route>
                        </Routes>
                    </div>
                </div>
            </Router>
        </>
    );
};

export default GlobalRouter;

if (document.getElementById("reactRouter")) {
    ReactDOM.render(<GlobalRouter />, document.getElementById("reactRouter"));
}
