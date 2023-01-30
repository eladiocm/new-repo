import React from "react";
import "./CardContainer.scss";

const CardContainer = (props) => {
    return <div className="card-container">{props.children}</div>;
};

export default CardContainer;
