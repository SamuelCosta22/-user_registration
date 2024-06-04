import './app.css'
import Trash from '../assets/lixeira-de-reciclagem.png'
import api from '../services/api'
import { useEffect, useState, useRef } from 'react'

function App() {
  useEffect(() => {
    getUsers()
  }, [])

  const [users, setUsers] = useState([])
  async function getUsers(){
    const usersFromAPI = await api.get('/users')
    setUsers(usersFromAPI.data)
  }

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function createUsers(){
    await api.post('/users', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })
    getUsers()
  }

  async function deleteUsers(id){
    await api.delete(`/users/${id}`)
    getUsers()
  }

  return(
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Nome de Usuário' name='name' type='text' ref={inputName} />
        <input placeholder='Idade' name='age' type='number' ref={inputAge} />
        <input placeholder='Email' name='email' type='email' ref={inputEmail} />
        <button type='button' onClick={createUsers} >Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} className='cards'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button onClick={() => deleteUsers(user.id)}><img src={Trash} alt="" /></button>
      </div>
      ))}
    </div>
  )
}

export default App