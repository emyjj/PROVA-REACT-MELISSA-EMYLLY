import './styless.css'
import { useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext';

export default function Header({ title }) {
  const { user, setUser } = useContext(UserContext);

  function onChangeName(event) {
    setUser({name: event.target.value})
  }
  return (
    <header className="page-header">
      <h1>{title}</h1>
      <h1>{user.name}</h1>
    </header>
  )
}
