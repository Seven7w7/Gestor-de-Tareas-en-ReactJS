import { useState } from "react";
import { Header } from "../../Layouts/Header/Header"
import { Main } from "../../Layouts/Main/Main"
import { v4 as uuidv4 } from 'uuid';
import {ContainerTasks} from '../../Layouts/ContainerTasks/ContainerTasks'
import { ItemTask } from "../../ItemTask/ItemTask";



const tsk = [
  { id: uuidv4(), title: 'Tarea de ejemplo 1', description: 'Descripción pendiente', status: false },
  { id: uuidv4(), title: 'Tarea de ejemplo 2', description: 'Descripción pendiente' , status: true},
  { id: uuidv4(), title: 'Tarea de ejemplo 3', description: 'Descripción pendiente' , status: true},
  { id: uuidv4(), title: 'Tarea de ejemplo 4', description: 'Descripción pendiente' , status: true},

];



export const Home = () => {

const [tasks,setTasks] = useState(tsk)

  return (
    <>
      <Header>
        <h1>Gestor de Tares</h1>

      </Header>

      <Main>
        <ContainerTasks> 
          {
          tasks.map( task => <ItemTask  idTask ={task.id} content={task.description} titleTask={task.title} />)
          }
        </ContainerTasks>

      </Main>
    </>
  )
}
