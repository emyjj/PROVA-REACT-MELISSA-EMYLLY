import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Container } from './styless.jsx'
import Header from '../../components/Header'
import FormAddress from '../../components/FormAddress'

export default function Address() {
const { user } = useContext(UserContext)

    return (
    <Container>
        <Header title="Endereço Residencial" />
        {/*<h3>{user.name}</h3> */}
        <FormAddress></FormAddress>
    </Container>
    )

    
}
