import React, { useState } from "react";

const RowTable = (props) => {
    const [rowTable, setrowTable] = useState();

    return (
        <tr
            className={` ${props.striped && "striped"} ${
                rowTable === "entrante" && "rowRed"
            }`}
        >
            {props.columns.map((col, index3) => (
                <td key={index3}>
                    {props.row[col.field] === "entrante" && (
                        <div className="status entrante">Entrante</div>
                    )}

                    {props.row[col.field] === "enproceso" && (
                        <div className="status en-proceso">En proceso</div>
                    )}
                    {props.row[col.field] === "cercana" && (
                        <div className="status cercana">Cercana</div>
                    )}
                    {props.row[col.field] === "completadas" && (
                        <div className="status completadas">Comprobadas</div>
                    )}
                    {props.row[col.field] != "completadas" &&
                        props.row[col.field] != "entrante" &&
                        props.row[col.field] != "enproceso" &&
                        props.row[col.field] != "cercana" &&
                        props.row[col.field]}

                    {/* {row[col.field]} */}
                </td>
            ))}
        </tr>
    );
};

export default RowTable;
