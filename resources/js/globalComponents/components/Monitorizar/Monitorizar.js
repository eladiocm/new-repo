import React, { useEffect } from "react";
import BarNotification from "../BarNotification/BarNotification";
import Table from "../Table/Table";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { Tooltip } from "@mui/material";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import NavBar from "../NavBar/NavBar";

function Monitorizar({ stateView, setStateView }) {
    useEffect(() => {
        setStateView(1);
    }, []);
    const BootstrapTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} arrow classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.arrow}`]: {
            color: theme.palette.common.black,
        },
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.common.black,
        },
    }));

    const columns = [
        { field: "folio", header: "Folio" },
        { field: "fecha", header: "Fecha de notificacion" },
        { field: "time", header: "Tiempo" },
        { field: "usuario", header: "Usuarios" },
        { field: "detalles", header: "Detalles" },
        { field: "status", header: "Estatus" },
        { field: "actions", header: "Acciones" },
    ];
    const data = [
        {
            folio: "11235",
            fecha: "26/02/22 09:32:03",
            time: "06:03:00",
            usuario: "Mayme Alvarez",
            detalles: "nviuenrivunheiurnvienvrioen  rvnier ver igiue ",
            status: "entrante",
            actions: (
                <span>
                    <BootstrapTooltip title="Ver" placement="top">
                        <VisibilityTwoToneIcon style={{ marginRight: "5px" }} />
                    </BootstrapTooltip>
                    <BootstrapTooltip title="Eliminar" placement="top">
                        <DeleteTwoToneIcon />
                    </BootstrapTooltip>
                </span>
            ),
        },
        {
            folio: "11235",
            fecha: "26/02/22 09:32:03",
            time: "06:03:00",
            usuario: "Mayme Alvarez",
            detalles: "nviuenrivunheiurnvienvrioen  rvnier ver igiue ",
            status: "entrante",
            actions: (
                <span>
                    <BootstrapTooltip title="Ver" placement="top">
                        <VisibilityTwoToneIcon style={{ marginRight: "5px" }} />
                    </BootstrapTooltip>
                    <BootstrapTooltip title="Eliminar" placement="top">
                        <DeleteTwoToneIcon />
                    </BootstrapTooltip>
                </span>
            ),
        },
        {
            folio: "11235",
            fecha: "26/02/22 09:32:03",
            time: "06:03:00",
            usuario: "Mayme Alvarez",
            detalles: "nviuenrivunheiurnvienvrioen  rvnier ver igiue ",
            status: "enproceso",
            actions: (
                <span>
                    <BootstrapTooltip title="Ver" placement="top">
                        <VisibilityTwoToneIcon style={{ marginRight: "5px" }} />
                    </BootstrapTooltip>
                    <BootstrapTooltip title="Eliminar" placement="top">
                        <DeleteTwoToneIcon />
                    </BootstrapTooltip>
                </span>
            ),
        },
        {
            folio: "11235",
            fecha: "26/02/22 09:32:03",
            time: "06:03:00",
            usuario: "Mayme Alvarez",
            detalles: "nviuenrivunheiurnvienvrioen  rvnier ver igiue ",
            status: "cercana",
            actions: (
                <span>
                    <BootstrapTooltip title="Ver" placement="top">
                        <VisibilityTwoToneIcon style={{ marginRight: "5px" }} />
                    </BootstrapTooltip>
                    <BootstrapTooltip title="Eliminar" placement="top">
                        <DeleteTwoToneIcon />
                    </BootstrapTooltip>
                </span>
            ),
        },
        {
            folio: "11235",
            fecha: "26/02/22 09:32:03",
            time: "06:03:00",
            usuario: "Mayme Alvarez",
            detalles: "nviuenrivunheiurnvienvrioen  rvnier ver igiue ",
            status: "completadas",
            actions: (
                <span>
                    <BootstrapTooltip title="Ver" placement="top">
                        <VisibilityTwoToneIcon style={{ marginRight: "5px" }} />
                    </BootstrapTooltip>
                    <BootstrapTooltip title="Eliminar" placement="top">
                        <DeleteTwoToneIcon />
                    </BootstrapTooltip>
                </span>
            ),
        },
    ];
    return (
        <div>
            <BarNotification />

            <Table data={data} columns={columns} hover={true} striped={true} />
        </div>
    );
}

export default Monitorizar;
