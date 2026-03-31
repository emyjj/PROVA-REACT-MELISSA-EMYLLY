import Header from '../../components/Header'
import BackButton from '../../components/BackButton';
import DataUser from '../../components/DataUser';
import { Container } from './styless.jsx'



export default function Finish() {
  return (
    <main>
      <Header title="Cadastro finalizado!" />  

      <Container>
      <DataUser etapa="todos" />
      </Container>

      <div className="voltar">
        <BackButton />
      </div>

    </main>
    
  )
}
