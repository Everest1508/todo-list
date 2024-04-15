"use client"
import Image from "next/image";
import AddTask from "./components/AddTask";
import { Boxes } from "./components/background";
import Task from "./components/TodoList";
import { HoverBorderGradient } from "./components/Title";
import { Meteors } from "./components/Shower";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto mt-4 overflow-hidden">
      <div className="text-center justify-center my-5 flex flex-col gap-4">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Simple TODO List</h1>
        <h6 className="mb-4 text-md leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Task List</h6>
      </div>
<Meteors number={20} />
      <div className="overflow-hidden">
        <Boxes />
      </div>
      <Task />
    </main>
  );
}
