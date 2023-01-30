import React, { useState } from "react";
import CardContainer from "../CardContainer/CardContainer";
import "./PrivacyPolicy.scss";

const PrivacyPolicy = ({ setStateView }) => {
    const [state, setState] = useState(false);
    React.useEffect(() => {
        setStateView(4);
    }, []);
    const poliHandler = () => {
        setState(false);
        setStateView(4);
    };
    const terHandler = () => {
        setState(true);
        setStateView(5);
    };
    return (
        <div className="d-flex flex-column">
            <CardContainer>
                <div className="privacy-policy-card-1">
                    <button onClick={poliHandler}>
                        Políticas de privacidad
                    </button>
                    <button onClick={terHandler}>Términos y condiciones</button>
                </div>
            </CardContainer>
            <div style={{ marginTop: "34px" }}>
                <CardContainer>
                    <div className="privacy-policy-card-2 d-flex flex-column">
                        {state ? (
                            <h2>Términos y condiciones</h2>
                        ) : (
                            <h2>Políticas de privacidad</h2>
                        )}
                        <div className="d-flex flex-column">
                            <label htmlFor="">Título</label>
                            <input type="text" placeholder="Ingrese título" />
                        </div>
                        <textarea name="" id=""></textarea>
                        <div className="d-flex justify-content-end">
                            <button className="privacy-policy-save">
                                Guardar
                            </button>
                        </div>
                    </div>
                </CardContainer>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
