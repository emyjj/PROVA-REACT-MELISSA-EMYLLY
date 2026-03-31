import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Container } from './styless'
import Header from '../../components/Header'
import FormPersonal from '../../components/FormPersonal'
import DataUser from '../../components/DataUser'
import BackButton from '../../components/BackButton'; // 👈 IMPORT

export default function Personal() {
const { user } = useContext(UserContext)

    return (
        <div>
            <Header title='Dados Pessoais' />

            <Container>
                <FormPersonal/>
                <DataUser/>
            </Container>
        </div>
    )
}