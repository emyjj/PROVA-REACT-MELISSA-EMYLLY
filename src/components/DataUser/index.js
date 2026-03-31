import { useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import './styless.css';
import { UseState } from 'react';

function DataUser({etapa}) {
    const { user, setUser } = useContext(UserContext);
    return(
        <div className="containerDataUser">
            <h1>DADOS PESSOAIS</h1>

            {(etapa === 1 || etapa === 'todos' ) && (
            <>
            
            <h3>CPF: {user.cpf}</h3>
            <h3>Data de Nascimento: {user.dataNascimento}</h3>
            <h3>Telefone: {user.telefone}</h3>
            </>
            )}

            {(etapa === 2 || etapa === 'todos') && (
            <>
            <h3>Logradouro: {user.rua}, {user.numero}</h3>
            <h3>Cep: {user.cep}</h3>
            <h3>Estado: {user.estado}</h3>
            </>
            )}

        </div>
    );
}

export default DataUser