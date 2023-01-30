import React from "react";
import { Link } from "react-router-dom";
import CardsNotifications from "../CardsNotifications/CardsNotifications";
import "./BarNotification.scss";

const BarNotification = () => {
    return (
        <div className="bar-notification">
            <CardsNotifications
                notificationsNumber="1"
                textNotification="Emergencias entrantes"
                classNumber="danger"
                classText="dangerText"
                animation="animacion"
            />
            <CardsNotifications
                notificationsNumber="8"
                textNotification="En proceso de atención"
                classNumber="wait"
                classText="waitText"
            />
            <CardsNotifications
                notificationsNumber="1"
                textNotification="Emergencias cercanas"
                classNumber="warnin"
                classText="warninText"
            />
            <div>
                <Link
                    to="/auth/monitorizar/create"
                    className="btnAddEmergencia"
                >
                    +
                </Link>
            </div>
        </div>
    );
};

export default BarNotification;
