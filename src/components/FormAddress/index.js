import { useState } from 'react'; // Removido o 'use' que causava erro
import './styless.css';
import { useNavigate } from 'react-router-dom';
import BackButton from '../BackButton';
import DataUser from '../DataUser';
import { UserContext } from '../../context/UserContext';
import { UseState, useContext } from 'react';

function Formulario() {
    const { user, setUser } = useContext(UserContext);
    const [rua, setRua] = useState(UserContext);
    const [numero, setNumero] = useState(UserContext);
    const [cep, setCep] = useState(UserContext);
    const [estado, setEstado] = useState(UserContext);
    const navigate = useNavigate();

    function salvarFormulario(event) {
        event.preventDefault();
        console.log({ rua, numero, cep, estado });
    }

    function onChangeRua(event) {
        setUser({...user, rua: event.target.value})
    }

    function onChangeNumero(event) {
        setUser({...user, numero: event.target.value})
    }

    function onChangeCep(event) {
        setUser({...user, cep: event.target.value})
    }

    function onChangeEstado(event) {
        setUser({...user, estado: event.target.value})
    }

    return (
        <div className="container-formulario">
            <form className="container-form" onSubmit={salvarFormulario}>

                <input 
                    type="text" 
                    placeholder='Rua' 
                    value={user.rua} 
                    onChange={(onChangeRua)} 
                />


                <input 
                    type='text' 
                    placeholder='Número' 
                    value={user.numero} 
                    onChange={(onChangeNumero)} 
                />


                <input 
                    type='text' 
                    placeholder='Cep' 
                    value={user.cep} 
                    onChange={(onChangeCep)} 
                />

 
                <input 
                    type='text' 
                    placeholder='Estado' 
                    value={user.estado} 
                    onChange={(onChangeEstado)} 
                />
                
                <button type="submit" onClick={() => navigate('/finish')}>
                    Finalizar
                </button>
            </form>

            <div className="voltar">
                <BackButton />
            </div>

            <div>
                <DataUser></DataUser>
            </div>
        </div>
    );
}

export default Formulario;