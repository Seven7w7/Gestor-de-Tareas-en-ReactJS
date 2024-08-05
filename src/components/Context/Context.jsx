import { createContext , useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const taskContext = createContext()


const tsk = [
  { id: uuidv4(), title: 'Tarea de ejemplo 1', description: 'Descripción pendiente', status: false },
  { id: uuidv4(), title: 'Tarea de ejemplo 2', description: 'Descripción pendiente' , status: true},
  { id: uuidv4(), title: 'Tarea de ejemplo 3', description: 'Descripción pendiente' , status: false},
  { id: uuidv4(), title: 'Tarea de ejemplo 4', description: 'Descripción pendiente' , status: true},

];

export const TasksProvider = ({ children }) => {

  const [tasks,setTasks] = useState(tsk)
  const [filteredTasks,setFilteredTasks] = useState(tsk)

  const updateTaskStatus = ( taskId , newStatus) => {
    setTasks(prevTasks => prevTasks.map(task => task.id === taskId ? {...task, status: newStatus} : task)
   );
  }



  return (
<taskContext.Provider value={{tasks , setTasks,filteredTasks,setFilteredTasks,updateTaskStatus}}>
  
{children}

</taskContext.Provider>

  )  
}


