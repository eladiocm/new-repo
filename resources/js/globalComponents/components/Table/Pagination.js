import React from "react";
import ChevronRightTwoToneIcon from "@mui/icons-material/ChevronRightTwoTone";
import KeyboardArrowLeftTwoToneIcon from "@mui/icons-material/KeyboardArrowLeftTwoTone";
import NumberPage from "./NumberPage";

const Pagination = ({ page, setPage, maxRow }) => {
    const nextPage = () => {
        if (page < maxRow) {
            setPage(page + 1);
        }
    };
    const previewPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div className="tableCantPage">
            <KeyboardArrowLeftTwoToneIcon onClick={previewPage} />

            <NumberPage numPage="1" active="page-active" />
            <NumberPage numPage="2" active="page-no-active" />
            <NumberPage numPage="3" active="page-no-active" />
            <NumberPage numPage="4" active="page-no-active" />

            <ChevronRightTwoToneIcon onClick={nextPage} />
        </div>
    );
};

export default Pagination;
