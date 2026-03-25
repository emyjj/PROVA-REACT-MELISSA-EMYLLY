import { useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import './styless.css';

function DataUser(){
    const { user, setUser } = useContext(UserContext);
    return(
        <div className="containerDataUser">
            <h1>Dados Pessoais:</h1>
            <h3>nome: {user.name}</h3>
            <h3>cpf: {user.cpf}</h3>
            <h3>data nascimento: {user.dataNascimento}</h3>
            <h3>telefone: {user.telefone}</h3>
            <h3>logradouro: {user.rua}, {user.numero}</h3>
            <h3>cep {user.cep}</h3>
            <h3>estado {user.estado}</h3>
        </div>
    );
}

export default DataUser