import { useState } from 'react'
import './App.css'
import TodoList from './Componentes/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='root'>
    <TodoList/>
    </div>
  )
}

export default App
