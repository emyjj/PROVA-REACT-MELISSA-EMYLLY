import React from "react";
import { useNavigate } from "react-router-dom";

export default function VoltarPagina() {
    const navigate = useNavigate();


    const handleVoltar = () => {
        navigate(-1);
    };

    return (
        <div style={{ padding: "20px" }}>
        <button onClick={handleVoltar}>
            Voltar
        </button>
        </div>
    );

}
