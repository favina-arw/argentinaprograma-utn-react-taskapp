import { Task } from "../../types/Task";
import { useEffect, useState } from "react";
import CategorySelector from "../CategorySelector/CategorySelector";
import CategoryTask from "../CategoryTask/CategoryTask";
import { TaskService } from "../../services/TaskService";

const Category = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    const fetchTasks = async () => {
      const taskData = await TaskService.getAllTasks();
      setTasks(taskData);
    };
    fetchTasks();
  }, []);

  const filteredTask = selectedCategory
    ? tasks.filter(
        (task) =>
          task.estado.toLocaleUpperCase() ===
          selectedCategory.toLocaleUpperCase()
      )
    : tasks;

  return (
    <div className="constainer mt-5 ">
      <CategorySelector onSelectedCategory={setSelectedCategory} />
      <CategoryTask tasks={filteredTask} />
    </div>
  );
};

export default Category;
