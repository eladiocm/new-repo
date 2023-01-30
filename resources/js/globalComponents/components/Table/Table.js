import React, { useState } from "react";
import "./Table.scss";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import RowTable from "../RowTable/RowTable";
import Pagination from "./Pagination";

const Table = ({
    data = null,
    columns = null,
    hover = true,
    striped = true,
}) => {
    const [page, setPage] = useState(1);
    const [porPage, setPorPage] = useState(5);
    const maxRow = data.length / porPage;

    return (
        <div className="tableInfo">
            <div className="tableTitle">
                <h4>Lista de Emergencias</h4>
                <div className="tableSearch">
                    <SearchTwoToneIcon />
                    <input type="text" placeholder="Buscar emergencia" />
                </div>
            </div>
            <table className="tableEmergencia">
                <thead className="tableHead">
                    <tr>
                        {columns &&
                            columns.map((head, index) => (
                                <th key={index}>{head.header}</th>
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data
                            .slice(
                                (page - 1) * porPage,
                                (page - 1) * porPage + porPage
                            )
                            .map((row, index2) => (
                                <RowTable
                                    striped={striped}
                                    columns={columns}
                                    row={row}
                                    key={index2}
                                />
                            ))}
                </tbody>
            </table>
            {data ? null : <p>No Row to show :</p>}
            <div className="tablePagination">
                <p>Mostarndo 1 a 8 de {data.length} registros</p>
                {/* <div className="tableCantPage">
                    <KeyboardArrowLeftTwoToneIcon />
                    <div
                        style={{
                            borderRadius: "50px",
                            width: "30px",
                            height: "30px",
                            background: "#00b4d8",
                        }}
                        className="d-flex justify-content-center align-items-center"
                    >
                        1
                    </div>
                    <div
                        style={{
                            borderRadius: "50px",
                            width: "30px",
                            height: "30px",
                            background: "#00b4d8",
                        }}
                        className="d-flex justify-content-center align-items-center"
                    >
                        1
                    </div>
                    <ChevronRightTwoToneIcon />
                </div> */}
                <Pagination page={page} setPage={setPage} maxRow={maxRow} />
            </div>
        </div>
    );
};

export default Table;
