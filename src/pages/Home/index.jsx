import { useState, useContext } from 'react';
import { Container, Title, Input, Button } from './styless.jsx';
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
      <div>
        <Title>FORMULÁRIO DE CADASTRO</Title>
      </div>
      <Input type='text' onChange={onChangeName} value={user.name} placeholder='Digite seu nome' />
      
      {/* <h3>{user.name}</h3> */}
      <Button onClick={() => navigate ('/personal') }>Continuar</Button>
    </Container>
  );

}

export default Home;
