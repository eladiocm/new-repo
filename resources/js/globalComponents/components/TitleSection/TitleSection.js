import React from "react";
import "./TitleSection.scss";

function TitleSection(props) {
    return (
        <div>
            <div className="div-monit">
                <i className="div-icon" id="div-icon">
                    {props.icon}
                </i>
                <p className="label-mon">{props.titleNav}</p>
            </div>
        </div>
    );
}

export default TitleSection;
