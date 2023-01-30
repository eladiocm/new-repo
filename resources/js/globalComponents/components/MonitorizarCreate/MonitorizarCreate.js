import React, { useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";
import "./MonitorizarCreate.scss";
import Input from "../Input/Input";
import InputForm from "../InputForm/InputForm";
import Mapa from "../../../img/assets/Mapa-3.png";
import { NavLink } from "react-router-dom";
import TextareaForm from "../TextareaForm/TextareaForm";
import SelectForm from "../SelectForm/SelectForm";
import SectionForm from "../SectionForm/SectionForm";
import RoomIcon from "@mui/icons-material/Room";
import Cards from "../Cards/Cards";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const data = [
    {
        nameCards: "Datos generales",
        sections: [
            {
                nameSections: "Usuario",
                iconSction: <PersonIcon />,
                cantItemForm: [
                    {
                        label: "Nombre",
                        itemForm: "input",
                        type: "text",
                        valor: [],
                        placeholder: "Nombre",
                    },
                    {
                        label: "Fecha de nacimiento",
                        itemForm: "input",
                        type: "text",
                        valor: [],
                        placeholder: "Fecha de nacimiento",
                    },
                    {
                        label: "Celular",
                        itemForm: "input",
                        type: "text",
                        valor: [],
                        placeholder: "Celular",
                    },
                    {
                        label: "Teléfono",
                        itemForm: "input",
                        type: "text",
                        valor: [],
                        placeholder: "Teléfono",
                    },
                    {
                        label: "Email",
                        itemForm: "input",
                        type: "email",
                        valor: [],
                        placeholder: "Email",
                    },
                    {
                        label: "Genero",
                        itemForm: "select",
                        type: "",
                        valor: ["Femenino", "Masculino"],
                        placeholder: "",
                    },
                ],
            },
            {
                nameSections: "Domicilio",
                iconSction: <RoomIcon />,
                cantItemForm: [
                    {
                        label: "Calle",
                        itemForm: "input",
                        type: "text",
                        valor: [],
                        placeholder: "Calle",
                    },
                    {
                        label: "Número",
                        itemForm: "input",
                        type: "text",
                        valor: [],
                        placeholder: "Número",
                    },
                    {
                        label: "Colonia",
                        itemForm: "input",
                        type: "text",
                        valor: [],
                        placeholder: "Colonia",
                    },
                    {
                        label: "C.P.",
                        itemForm: "input",
                        type: "text",
                        valor: [],
                        placeholder: "C.P.",
                    },
                    {
                        label: "Estado",
                        itemForm: "input",
                        type: "text",
                        valor: [],
                        placeholder: "Estado",
                    },
                    {
                        label: "Delegacion o municipio",
                        itemForm: "input",
                        type: "text",
                        valor: [],
                        placeholder: "Dlegacion o municipio",
                    },
                ],
            },
        ],
    },
    {
        nameCards: "Lugar de emergencia",
        sections: [
            {
                nameSections: "Lugar de emergencia",
                iconSction: <RoomIcon />,
                cantItemForm: [
                    {
                        label: "Calle",
                        itemForm: "input",
                        type: "text",
                        valor: [],
                        placeholder: "Calle",
                    },
                    {
                        label: "Número",
                        itemForm: "input",
                        type: "text",
                        valor: [],
                        placeholder: "Número",
                    },
                    {
                        label: "Colonia",
                        itemForm: "input",
                        type: "text",
                        valor: [],
                        placeholder: "Colonia",
                    },
                    {
                        label: "C.P.",
                        itemForm: "input",
                        type: "text",
                        valor: [],
                        placeholder: "C.P.",
                    },
                    {
                        label: "País",
                        itemForm: "input",
                        type: "text",
                        valor: [],
                        placeholder: "País",
                    },
                    {
                        label: "Estado",
                        itemForm: "input",
                        type: "text",
                        valor: [],
                        placeholder: "Estado",
                    },
                    {
                        label: "Delegación o municipio",
                        itemForm: "input",
                        type: "text",
                        valor: [],
                        placeholder: "Nombre",
                    },
                    {
                        label: "Comentarios",
                        itemForm: "textarea",
                        type: "",
                        valor: [],
                        placeholder: "Comentarios",
                    },
                ],
            },
        ],
    },
];

const MonitorizarCreate = ({ stateView, setStateView }) => {
    useEffect(() => {
        setStateView(2);
    }, []);
    return (
        <div className="monitorizarCreatePage">
            <NavLink to="/auth/monitorizar" className="btnBack">
                <ArrowBackIosNewIcon />
            </NavLink>
            <div className="monitorizarCreate">
                <Cards title={data[0].nameCards}>
                    <SectionForm
                        nombre={data[0].sections[0].nameSections}
                        icon={data[0].sections[0].iconSction}
                        data={data[0].sections[0].cantItemForm}
                    />
                    <SectionForm
                        nombre={data[0].sections[1].nameSections}
                        icon={data[0].sections[1].iconSction}
                        data={data[0].sections[1].cantItemForm}
                    />
                </Cards>

                <Cards title={data[1].nameCards}>
                    <SectionForm
                        nombre={data[1].sections[0].nameSections}
                        icon={data[1].sections[0].iconSction}
                        data={data[1].sections[0].cantItemForm}
                    />
                    <NavLink
                        to=""
                        className="btnAsignarEmergencia"
                        style={{ marginTop: "50px" }}
                    >
                        Asignar a despachados
                    </NavLink>
                </Cards>
            </div>

            <div className="cardForm">
                <div className="titleCard">
                    <h3>Cuadrante</h3>
                </div>
                <div className="cardMapa"></div>
            </div>

            <div className="cardForm">
                <div className="titleCard">
                    <h3>Informacion de la emergencia</h3>
                </div>
                <div className="cardInfoEmergencia contentCard">
                    <div className="space-column">
                        <div>
                            <SelectForm
                                style={{ marginBottom: "20px" }}
                                label="Incidencias"
                                values={[
                                    "Tipo de incidencia",
                                    "701 - Improcedentes",
                                    "Asistencia 501 - Proyección",
                                ]}
                            />
                        </div>
                        <div>
                            <TextareaForm
                                label="Descripción de la emergencia"
                                placeholder="Descripción de la emergencia ..."
                            />
                        </div>
                    </div>

                    <div className="btnAsigDesp space-column">
                        <div>
                            <SelectForm
                                label="Subincidencia"
                                values={["subincidencia"]}
                            />
                        </div>
                        <div>
                            <TextareaForm
                                label="Notas de monitorista"
                                placeholder="Notas de monitorista"
                            />
                        </div>
                        <NavLink to="" className="btnAsignarEmergencia">
                            Asignar a despachados
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonitorizarCreate;
