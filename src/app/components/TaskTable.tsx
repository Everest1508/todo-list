// TaskTable.tsx
import React from "react";

interface Task {
  name: string;
  status: string;
  dueDate: string;
}

interface TaskTableProps {
  tasks: Task[];
  onDeleteTask: (index: number) => void;
  onToggleStatus: (index: number) => void;
}

const TaskTable: React.FC<TaskTableProps> = ({ tasks, onDeleteTask, onToggleStatus }) => {
  return (
    <div className="relative overflow-x-auto rounded-md">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Task</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Due Date</th>
            <th className="px-6 py-3">Actions</th> {/* New column for actions */}
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr
              key={index}
              className={
                index % 2 === 0
                  ? "bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  : "bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700"
              }
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {task.name}
              </th>
              <td className="px-6 py-4 cursor-pointer" onClick={() => onToggleStatus(index)}>
                {task.status}
              </td>
              <td className="px-6 py-4">{task.dueDate}</td>
              <td className="px-6 py-4">
                <button className="text-blue-600 hover:underline" onClick={() => onDeleteTask(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
