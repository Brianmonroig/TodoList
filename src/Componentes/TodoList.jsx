import React, {useState} from 'react'
import TodoItem from './TodoItem'


function TodoList() {
    const [tareas, setTareas] = useState([
        { texto: 'Estudiar React', completada: false },
        { texto: 'Aprender Aleman', completada: false },
        { texto: 'Crear Contenido', completada: false },
        { texto: 'Cuidar Mayra', completada: false },
    ])
    const [input, setInput] = useState('')
    const [completada, setCompletada] = useState(0)



    const manejarTarea = (e) =>{
        setInput(e.target.value)
    }

    const agregarTarea = () =>{
        if(input.trim()!== ''){
            setTareas([...tareas, {texto: input, completada: false}])
            setInput('')
        }
    }

    const tareaCompletada = (index) => {
        setTareas(tareas.map((tarea,i)=>
        i === index ? {...tarea, completada: !tarea.completada} : tarea
        ))
    }

    const eliminarTarea = (index) =>{
        setTareas(tareas.filter((_, i)=> i !== index))
    }

  return (
    <div>
        <input type="text"
        value={input}
        onChange={manejarTarea}
        />
        <button onClick={agregarTarea}>Agregar Tarea</button>
        <ul>
            {tareas.map((tarea, index)=>(
               <TodoItem
               key={index}
               tarea={tarea}
               index={index}
               tareaCompletada={tareaCompletada}
               eliminarTarea={eliminarTarea}
               />
            ))}
        </ul>
      
    </div>
  )
}

export default TodoList
