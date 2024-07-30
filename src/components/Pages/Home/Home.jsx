import { useState } from "react";
import { Header } from "../../Layouts/Header/Header"
import { Main } from "../../Layouts/Main/Main"
import { v4 as uuidv4 } from 'uuid';


const tsk = [
  { id: uuidv4(), title: 'Tarea de ejemplo 1', description: 'Descripción pendiente', status: false },
  { id: uuidv4(), title: 'Tarea de ejemplo 2', description: 'Descripción pendiente' , status: true},
  { id: uuidv4(), title: 'Tarea de ejemplo 3', description: 'Descripción pendiente' , status: true},
];



export const Home = () => {

const [tasks,setTasks] = useState(tsk)

  return (
    <>
      <Header>
        <h1>Gestor de Tares</h1>

      </Header>

      <Main>
        <ul>

          {
            tasks.map(tasks => <li>{tasks.title}</li>)
          }

        </ul>

      </Main>
    </>
  )
}
