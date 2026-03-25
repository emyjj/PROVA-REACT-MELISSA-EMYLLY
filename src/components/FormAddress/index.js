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
                <label>Rua</label>
                <input 
                    type="text" 
                    placeholder='rua' 
                    value={user.rua} 
                    onChange={(onChangeRua)} 
                />

                <label>Número</label>
                <input 
                    type='text' 
                    placeholder='numero' 
                    value={user.numero} 
                    onChange={(onChangeNumero)} 
                />

                <label>Cep</label>
                <input 
                    type='text' 
                    placeholder='cep' 
                    value={user.cep} 
                    onChange={(onChangeCep)} 
                />

                <label>Estado</label>
                <input 
                    type='text' 
                    placeholder='estado' 
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