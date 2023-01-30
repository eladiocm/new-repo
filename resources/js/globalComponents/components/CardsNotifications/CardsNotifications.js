import React, { useState } from "react";
import "./CardsNotifications.scss";

const CardsNotifications = (props) => {
    const [notification, setnotification] = useState([]);
    return (
        <div className={`${props.animation} cardNotification`}>
            <div
                className={`${props.classNumber} notificationNumber d-flex justify-content-center align-items-center`}
            >
                {props.notificationsNumber}
            </div>
            <div
                className={`${props.classText} textNotification ${props.animation}`}
            >
                {props.textNotification}
            </div>
        </div>
    );
};

export default CardsNotifications;
