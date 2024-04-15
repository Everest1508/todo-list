// AddTask.tsx
import React, { useState } from "react";
import { HiPlus } from 'react-icons/hi';
import Task from "./TodoList";

interface AddTaskProps {
  onAddTask: (newTask: Task) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskName.trim() === "") {
    return;
  }
    const newTask = { name: taskName, status: taskStatus, dueDate: taskDueDate };
    onAddTask(newTask);
    setTaskName("");
    setTaskStatus("");
    setTaskDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="fixed bottom-4 right-4 flex items-end space-x-1">
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="rounded-l-full border border-gray-400 py-2 px-4 outline-none focus:border-blue-500"
      />
      <select
        value={taskStatus}
        onChange={(e) => setTaskStatus(e.target.value)}
        className="border border-gray-400 py-[10px] px-4 outline-none focus:border-blue-500"
      >
        <option value="">Select Status</option>
        <option value="In Progress">In Progress</option>
        <option value="Pending">Pending</option>
        <option value="Not Started">Not Started</option>
      </select>
      <input
        type="date"
        value={taskDueDate}
        onChange={(e) => setTaskDueDate(e.target.value)}
        className="border border-gray-400 py-2 px-4 outline-none focus:border-blue-500"
      />
      <button type="submit" className="btn btn-primary rounded-full p-3 shadow-lg ml-2">
        <HiPlus className="h-6 w-6 text-white" />
      </button>
    </form>
  );
};

export default AddTask;
