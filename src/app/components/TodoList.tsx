// Task.tsx
import React, { useState } from "react";
import TaskTable from "./TaskTable";
import AddTask from "./AddTask";

interface Task {
  name: string;
  status: string;
  dueDate: string;
}

const Task: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { name: "Complete project proposal", status: "Completed", dueDate: "2024-04-20" },
    { name: "Review code for deployment", status: "Not Completed", dueDate: "2024-04-25" },
    { name: "Prepare presentation slides", status: "Completed", dueDate: "2024-04-30" },
  ]);

const addTask = (newTask: Task) => {
setTasks([...tasks, newTask]);
};

const toggleStatus = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = updatedTasks[index].status === "Completed" ? "Not Completed" : "Completed";
    setTasks(updatedTasks);
};

const deleteTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
};

  return (
    <div className="z-20">
      <TaskTable tasks={tasks} onDeleteTask={deleteTask} onToggleStatus={toggleStatus} />
      <AddTask onAddTask={addTask} />
    </div>
  );
};

export default Task;
