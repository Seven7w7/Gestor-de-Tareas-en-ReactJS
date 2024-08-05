import { useContext, useRef, useState } from 'react';
import { taskContext } from '../Context/Context';
import { v4 as uuidv4 } from 'uuid';
import './NewTask.css'


export const NewTask = () => {

  const context = useContext(taskContext)

  const [titleTask,setTitleTask] = useState('')
  const [descriptionTask, setDescriptionTask] = useState('')

  const txtTitle = useRef('')
  const txtDescripcion = useRef('')

  const handleTitleTask = (event) => setTitleTask (event.target.value)
  const handleDescripcionTask = (event) => setDescriptionTask(event.target.value)

  const handleCreateTask = (event) => {
    event.preventDefault()
    const newTask = {
      id: uuidv4(),
      title: titleTask,
      description: descriptionTask,
      status: false
    }

    context.setTasks([...context.tasks,newTask])
    context.setFilteredTasks([...context.tasks,newTask])

    txtTitle.current.value = ''
    txtDescripcion.current.value = ''
    
  }
  return (
    <form className='frm-task'>
    <fieldset>
      <label >Título de la tarea</label>
      <input ref={txtTitle} onChange={handleTitleTask} id='txt-title' placeholder='Ej:Aseo ambiente' type='text' />
    </fieldset>
    <fieldset>
      <label >Descripción de la tarea</label>
      <input ref={txtDescripcion} onChange={handleDescripcionTask} id='txt-description' placeholder='Ej:Realizar aseo del ambiente' type='text' maxLength={100}/>
    </fieldset>
    <button onClick={handleCreateTask} className='btn-new-task'>Crear nueva tarea</button>
    </form>


  
  )
}
