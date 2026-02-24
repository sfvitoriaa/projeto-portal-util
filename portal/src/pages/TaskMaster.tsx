import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "../schemas/taskSchema";
import type { Task } from "../schemas/taskSchema";
import { useState, useEffect } from "react";

export default function TaskMaster() {
  const { register, handleSubmit, reset } = useForm<Task>({
    resolver: zodResolver(taskSchema),
  });

  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const onSubmit = (data: Task) => {
    setTasks([...tasks, data]);
    reset();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">TaskMaster</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 mb-4">
        <input {...register("title")} placeholder="Título" className="border p-2" />
        <select {...register("category")} className="border p-2">
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Urgente">Urgente</option>
        </select>
        <button type="submit" className="bg-green-600 text-white px-4 py-2">Adicionar</button>
      </form>
      <ul>
        {tasks.map((task, i) => (
          <li key={i} className="border-b py-2">
            {task.title} - <span className="italic">{task.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
