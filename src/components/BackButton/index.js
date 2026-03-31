import React from "react";
import { useNavigate } from "react-router-dom";
import './styless.css';
import {button} from './styless.css';
import voltarIcon from './assets/voltar.png';

export default function VoltarPagina() {
    const navigate = useNavigate();


    const handleVoltar = () => {
        navigate(-1);
    };

    return (
        <div style={{ padding: "20px" }}>
        <button onClick={handleVoltar}>
                <img 
                    src={voltarIcon} 
                    alt="Ícone" 
                    style={{ width: '20px'}} 
                />
        </button>
        </div>
    );

}
