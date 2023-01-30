import React from "react";
import "./Cards.scss";

const Cards = (props) => {
    return (
        <div className="cardForm cardBottomRadius">
            <div className="titleCard">
                <h3>{props.title}</h3>
            </div>
            <div className="contentCard">{props.children}</div>
        </div>
    );
};

export default Cards;
