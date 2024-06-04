import './app.css'
import Trash from '../assets/lixeira-de-reciclagem.png'

function App() {
  const users = [
    {
      id: '12121234',
      name: 'Samuel',
      age: 22,
      email: 'samuel@gmail.com'
    },
    {
      id: '21324343',
      name: 'Iasmin',
      age: 23,
      email: 'iasmin@gmail.com'
    },
    {
      id: '123',
      name: 'Teste',
      age: 24,
      email: 'teste@gmail.com'
    }
  ]

  return(
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Nome de Usuário' name='name' type='text' />
        <input placeholder='Idade' name='age' type='number' />
        <input placeholder='Email' name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} className='cards'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button><img src={Trash} alt="" /></button>
      </div>
      ))}
    </div>
  )
}

export default App