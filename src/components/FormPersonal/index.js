import { useState } from 'react';
import './styless.css';
import { useNavigate } from 'react-router-dom'
import BackButton from '../BackButton';
import DataUser from '../DataUser';
import { UserContext } from '../../context/UserContext';
import { UseState, useContext } from 'react';



function Formulario() {

    const { user, setUser } = useContext(UserContext);
    
    const navigate = useNavigate();
    

    function salvarFormulario(event) {
        event.preventDefault();

    }

    function onChangeCpf(event) {
        setUser({...user, cpf: event.target.value})
    }

    function onChangeDataNascimento(event) {
        setUser({...user, dataNascimento: event.target.value})
    }

    function onChangeTelefone(event) {
        setUser({...user, telefone: event.target.value})
    }

    

    return(
        <div className="container-formulario">
            <form className="container-form" onSubmit={salvarFormulario}>
            <input type="text" placeholder='CPF' value={user.cpf}  onChange={(onChangeCpf)} ></input>

            <input type='date' placeholder='Data de Nascimento' value={user.dataNascimento}  onChange={(onChangeDataNascimento)} ></input>

            <input type="text" placeholder='Telefone' value={user.telefone}  onChange={(onChangeTelefone)} ></input>
            
            <button onClick={() => navigate ('/address') }>Continuar</button>
        </form>

        <div className="voltar">
        <BackButton />
        </div>
        </div>
    )
}

export default Formulario;
