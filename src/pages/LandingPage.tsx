import CarouselHome from "../components/CarouselHome/CarouselHome";
import CategorySelector from "../components/CategorySelector/CategorySelector";
import CategoryTask from "../components/CategoryTask/CategoryTask";
import { TaskService } from "../services/TaskService";
import { Task } from "../types/Task";
import { useState, useEffect } from "react";

const LandingPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]); //Estado para almacenar las tareas filtradas
  const [selectedCategory, setSelectedCategory] = useState<string>(""); //estado para la categoria seleccionada

  useEffect(() => {
    const fetchTasks = async () => {
      const taskData = await TaskService.getAllTasks();
      setTasks(taskData);
    };

    fetchTasks();
  }, []);

  //efecto apra filtrar las tareas cuando se selecciona una categoria
  useEffect(() => {
    if (selectedCategory) {
      const filtered = tasks.filter(
        (task) => task.estado.toUpperCase() === selectedCategory.toUpperCase()
      );
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks(tasks); //Si no hay categoria seleccionada, muestra todas las tareas
    }
  }, [selectedCategory, tasks]);

  return (
    <>
      <CarouselHome />
      <CategorySelector onSelectedCategory={setSelectedCategory} />
      <CategoryTask tasks={filteredTasks.length > 0 ? filteredTasks : tasks} />
    </>
  );
};

export default LandingPage;
