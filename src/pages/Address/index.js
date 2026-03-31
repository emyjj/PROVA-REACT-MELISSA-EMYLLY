import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Container } from './styless.jsx'
import Header from '../../components/Header'
import FormAddress from '../../components/FormAddress'
import DataUser from '../../components/DataUser'

export default function Address() {
const { user } = useContext(UserContext)

    return (
        <div>
        <Header title="Endereço Residencial" />

            <Container>
                <FormAddress/>

                <DataUser etapa={1}/>
                
            </Container>
        </div>
    )

    
}
