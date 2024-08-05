import { useContext } from 'react';
import './FilterTasks.css';
import { tasksContext } from '../Context/Context';

export const FilterTasks = () => {
  const context = useContext(tasksContext);

  const handleFilters = (event) => {
    let currentOption = event.target.value;
    console.log(currentOption);

    if (currentOption === 'Pendientes') {
      context.setFilteredTasks(context.tasks.filter(task => !task.status));
    } else if (currentOption === 'Realizadas') {
      context.setFilteredTasks(context.tasks.filter(task => task.status));
    } else {
      context.setFilteredTasks(context.tasks);
    }
  } 

  return(
    <div className="container-filters">
  <label>Filtrar por</label>
  <select onChange={handleFilters}>
    <option value="todas" className="opt opt1">Todas</option>
    <option value="Pendientes" className="opt opt2">Pendientes</option>
    <html><option value="Realizadas" className="opt opt3">Realizadas</option></html>
  </select>
</div>
  )

}