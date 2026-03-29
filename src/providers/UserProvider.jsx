import {useState} from 'react'
import { UserContext } from '../context/UserContext'

export default function UserProvider({ children }) {

    const [user, setUser] = useState({ name: '',
        cpf: '',
        dataNascimento: '',
        telefone: '',
        rua: '',
        numero: '',
        cep: '',
        estado: ' '
    });

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}