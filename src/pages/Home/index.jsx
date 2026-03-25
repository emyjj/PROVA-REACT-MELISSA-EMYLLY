import { useState, useContext } from 'react';
import { Container } from './styless.jsx';
import { UserContext } from '../../context/UserContext.jsx';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';

function Home() {

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function onChangeName(event) {
    setUser({...user, name: event.target.value})
  }

  return (
    <Container>
      <Header title="Formulário de Cadastro" />
      <input type='text' onChange={onChangeName} value={user.name}/>
      
      {/* <h3>{user.name}</h3> */}
      <button onClick={() => navigate ('/personal') }>Continuar</button>
    </Container>
  );

}

export default Home;
