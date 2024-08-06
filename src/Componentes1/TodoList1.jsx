import React, { useState } from 'react';
import TodoItem from './TodoItem1';
import '../App.css'

function TodoList() {
  const [input, setInput] = useState('');
  const [tareas, setTareas] = useState([
    { texto: 'Lavar al perro', completada: false },
    { texto: 'Estudiar React', completada: false },
    { texto: 'Ejercicios visualización', completada: false },
    { texto: 'Cuidar a Mayra', completada: false }
  ]);
  const [filtro, setFiltro] = useState('all');

  const manejarInput = (e) => {
    setInput(e.target.value);
  };

  const agregarTarea = () => {
    if (input.trim() !== '') {
      setTareas([...tareas, { texto: input, completada: false }]);
      setInput('');
    }
  };

  const eliminarTarea = (index) => {
    setTareas(tareas.filter((_, i) => i !== index));
  };

  const filtrarTareas = () => {
    if (filtro === 'completed') {
      return tareas.filter(tarea => tarea.completada);
    } else if (filtro === 'incomplete') {
      return tareas.filter(tarea => !tarea.completada);
    } else {
      return tareas;
    }
  };

  const toggleCompletada = (index) => {
    setTareas(tareas.map((tarea, i) =>
      i === index ? { ...tarea, completada: !tarea.completada } : tarea
    ));
  };

  return (
    <div>
      <input 
        type='text'
        value={input} 
        onChange={manejarInput}
      /> 
      <button onClick={agregarTarea}>Agregar Tarea</button>
      <button onClick={() => setFiltro('all')}>Todas</button>
      <button onClick={() => setFiltro('completed')}>Completadas</button>
      <button onClick={() => setFiltro('incomplete')}>Incompletas</button>
      <ul>
        {filtrarTareas().map((tarea, index) => (
          <TodoItem 
            key={index} 
            tarea={tarea} 
            index={index} 
            eliminarTarea={eliminarTarea} 
            toggleCompletada={toggleCompletada} 
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

// TodoItem.js

