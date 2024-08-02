import { useState } from "react";
import { Header } from "../../Layouts/Header/Header";
import { Main } from "../../Layouts/Main/Main";
import {ContainerTasks} from '../../Layouts/ContainerTasks/ContainerTasks';
import { ItemTask } from "../../ItemTask/ItemTask";






export const Home = () => {


  return (
    <>
      <Header>
        <h1>Gestor de Tares</h1>

      </Header>

      <Main>
        <ContainerTasks> 
          {
          context.filteredTasks.map( task => <ItemTask  idTask ={task.id} content={task.description} titleTask={task.title} />)
          }
        </ContainerTasks>

      </Main>
    </>
  )
}
