import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { financeSchema } from "../schemas/financeSchema";
import type { Finance } from "../schemas/financeSchema";
import { useState } from "react";

export default function MoneyFlow() {
  const { register, handleSubmit, reset } = useForm<Finance>({
    resolver: zodResolver(financeSchema),
  });

  const [transactions, setTransactions] = useState<Finance[]>([]);

  const onSubmit = (data: Finance) => {
    setTransactions([...transactions, data]);
    reset();
  };

  const total = transactions.reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">MoneyFlow</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 mb-4">
        <input {...register("description")} placeholder="Descrição" className="border p-2" />
        <input type="number" step="0.01" {...register("amount", { valueAsNumber: true })} placeholder="Valor" className="border p-2" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2">Adicionar</button>
      </form>
      <h3 className="font-bold">Saldo: R$ {total.toFixed(2)}</h3>
      <ul>
        {transactions.map((t, i) => (
          <li key={i} className="border-b py-2">
            {t.description} - R$ {t.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}
