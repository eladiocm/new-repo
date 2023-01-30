import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import InputForm from "../InputForm/InputForm";
import SelectForm from "../SelectForm/SelectForm";
import TextareaForm from "../TextareaForm/TextareaForm";

const SectionForm = (props) => {
    return (
        <section style={{ marginBottom: "10px" }}>
            <div className="title-section">
                <h4>
                    {props.nombre}
                    <span>{props.icon}</span>
                </h4>
            </div>
            {props.data.map((item, index) => (
                <div style={{ marginBottom: "20px" }} key={index}>
                    {item.itemForm === "input" && (
                        <InputForm
                            label={item.label}
                            type={item.type}
                            icon={props.icon}
                            key={index}
                            placeholder={item.placeholder}
                        />
                    )}
                    {item.itemForm === "textarea" && (
                        <TextareaForm
                            label={item.label}
                            placeholder={item.placeholder}
                            icon={props.icon}
                            key={index}
                        />
                    )}
                    {item.itemForm === "select" && (
                        <SelectForm
                            label={item.label}
                            icon={props.icon}
                            values={item.valor}
                            key={index}
                        />
                    )}
                </div>
            ))}
        </section>
    );
};

export default SectionForm;
