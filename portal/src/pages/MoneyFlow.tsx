import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { financeSchema } from "../schemas/financeSchema";
import type { Finance } from "../schemas/financeSchema";
import { useState } from "react";

type FinanceWithType = Finance & { type: "entrada" | "saida" };

export default function MoneyFlow() {
  const { register, handleSubmit, reset } = useForm<FinanceWithType>({
    resolver: zodResolver(financeSchema),
  });

  const [transactions, setTransactions] = useState<FinanceWithType[]>([]);

  const onSubmit = (data: FinanceWithType) => {
    if (data.amount <= 0) {
      alert("O valor deve ser maior que zero!");
      return;
    }
    setTransactions([...transactions, data]);
    reset();
  };

  const removeTransaction = (index: number) => {
    setTransactions(transactions.filter((_, i) => i !== index));
  };

  const salvarNoLocalStorage = () => {
    const portalData = JSON.parse(localStorage.getItem("portalData") || "{}");
    portalData.transactions = transactions;
    localStorage.setItem("portalData", JSON.stringify(portalData));
    alert("Transações salvas com sucesso!");
  };

  // cálculo do saldo considerando entrada (+) e saída (-)
  const total = transactions.reduce((acc, t) => {
    return t.type === "entrada" ? acc + t.amount : acc - t.amount;
  }, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Finanças</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 mb-4">
        <input {...register("description")} placeholder="Descrição" className="border p-2" />
        <input type="number" step="0.01" {...register("amount", { valueAsNumber: true })} placeholder="Valor" className="border p-2" />
        <select {...register("type")} className="border p-2">
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </select>
        <button type="submit" className="bg-purple-600 text-white px-4 py-2">Adicionar</button>
        <button type="button" onClick={salvarNoLocalStorage} className="bg-gray-600 text-white px-4 py-2">
          Salvar
        </button>
      </form>
      <h3 className="font-bold">Saldo: R$ {total.toFixed(2)}</h3>
      <ul>
        {transactions.map((t, i) => (
          <li key={i} className="border-b py-2 flex justify-between">
            {t.description} - R$ {t.amount.toFixed(2)} ({t.type})
            <button onClick={() => removeTransaction(i)} className="text-red-600">Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
