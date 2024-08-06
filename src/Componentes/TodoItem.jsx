import React from "react";

function TodoItem({ tarea, index, tareaCompletada, eliminarTarea}) {
  return (
    
        <li>
            
            <span style={{textDecoration: tarea.completada ? 'line-through' : 'none'}}>
                {tarea.texto}
            </span>
            <button onClick={() => tareaCompletada(index)}>
                {tarea.completada ? 'Desmarcar' : 'Completar'}
            </button>
            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
        </li>
    
  );
}

export default TodoItem;
