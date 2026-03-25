import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Container } from './styless'
import Header from '../../components/Header'
import FormPersonal from '../../components/FormPersonal'
import DataUser from '../../components/DataUser'

export default function Personal() {
const { user } = useContext(UserContext)

    return (
    <Container>
        <Header title="Dados pessoais" />
        {/*c */}
        <FormPersonal></FormPersonal>
        <DataUser></DataUser>
        
    </Container>
    )
}
