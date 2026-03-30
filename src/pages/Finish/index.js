import Header from '../../components/Header'
import './styless.css'
import BackButton from '../../components/BackButton';
import DataUser from '../../components/DataUser';

export default function Finish() {
  return (
    <main>
      <Header title="Cadastro finalizado!" />  
      <>

      <DataUser></DataUser>
      <div className="voltar">
        <BackButton />
      </div>
      </>
    </main>
    
  )
}
