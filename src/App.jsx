import { useState } from 'react'
import './index.css'

const App = ()=> {

  const [tarefas, setTarefas] = useState([''])
  const [campo, setCampo] = useState('')

  const handleAdd = ()=> {
    if(campo === ''){
      alert('Você precisa digitar alguma coisa...');
      return;
    }

    setTarefas([...tarefas, campo])
    setCampo('')
  }

  const handleInput = (e)=> {
    setCampo(e.target.value)
  }

  const handleRefresh = (e)=> {
    e.preventDefault()
    window.location.reload()
  }

  return(
    <div className='container'>
      <h3>Escreva na lista...</h3>

      <ul className='lista'>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

      <button onClick={handleRefresh} className='refresh-button'>Limpar</button>
      <input type="text" value={campo} onChange={handleInput} placeholder='Faça aqui suas anotações...' />
      <button type='button' onClick={handleAdd}>Adicionar</button>

    </div>
  )
}

export default App