import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "../schemas/taskSchema";
import type { Task } from "../schemas/taskSchema";
import { useState } from "react";

export default function TaskMaster() {
  const { register, handleSubmit, reset } = useForm<Task>({
    resolver: zodResolver(taskSchema),
  });

  const [tasks, setTasks] = useState<Task[]>([]);

  const onSubmit = (data: Task) => {
    setTasks([...tasks, data]);
    reset();
  };

  const removeTask = (index: number) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const salvarNoLocalStorage = () => {
    const portalData = JSON.parse(localStorage.getItem("portalData") || "{}");
    portalData.tasks = tasks;
    localStorage.setItem("portalData", JSON.stringify(portalData));
    alert("Tarefas salvas com sucesso!");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Tarefas</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 mb-4">
        <input {...register("title")} placeholder="Título" className="border p-2" />
        <select {...register("category")} className="border p-2">
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Urgente">Urgente</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">Adicionar</button>
        <button
          type="button"
          onClick={salvarNoLocalStorage}
          className="bg-gray-600 text-white px-4 py-2"
        >
          Salvar
        </button>
      </form>
      <ul>
        {tasks.map((task, i) => (
          <li key={i} className="border-b py-2 flex justify-between">
            {task.title} - <span className="italic">{task.category}</span>
            <button onClick={() => removeTask(i)} className="text-red-600">Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
