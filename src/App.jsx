import { useState } from 'react'
import './App.css'
import UserCard from './components/UserCard.jsx'


function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [users, setUsers] = useState([])
  const [sex, setSex] = useState([])

  function handleSubmit(event) {
    event.preventDefault()

    const newUser = {
      id: Date.now(),
      name,
      email,
      age,
      sex
    }

    setUsers([...users, newUser])
    setName('')
    setEmail('')
    setAge('')
    setSex('')
  }

  return (
    <div className='app'>
      <h1>Cadastro de Usuários</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder='Nome'
          type='text'
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <input
          placeholder='E-mail'
          type='email'
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <input
          placeholder='Idade'
          type='number'
          value={age}
          onChange={event => setAge(event.target.value)}
        />

        <label>Sexo:</label>

        <select value={sex} onChange={(e) => setSex(e.target.value)}>
          <option value="">Selecione</option>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
          <option value="outro">Outro</option>
        </select>
        <p>Sexo Selecionado: {sex}</p>


        <button type='submit'>Cadastrar</button>
      </form>

      <div className='user-list'>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />

        ))}
      </div>
    </div>
  )
}

export default App
