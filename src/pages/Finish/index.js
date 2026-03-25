import Header from '../../components/Header'
import './styless.css'
import BackButton from '../../components/BackButton';

export default function Finish() {
  return (
    <main>
      <Header title="Cadastro finalizado!" />  
      <>
      <div className="voltar">
        <BackButton />
      </div>
      </>
    </main>
    
  )
}
