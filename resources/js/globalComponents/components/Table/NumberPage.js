import React from "react";

const NumberPage = (props) => {
    return <div className={`number-page ${props.active}`}>{props.numPage}</div>;
};

export default NumberPage;
