import { useState, useEffect } from "react";

export default function Listagem() {
  const [portalData, setPortalData] = useState<any>({
    tasks: [],
    contacts: [],
    transactions: []
  });

  useEffect(() => {
    const saved = localStorage.getItem("portalData");
    if (saved) {
      setPortalData(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Listagem Geral</h2>

      {/* Tarefas */}
      <h3 className="text-xl font-semibold mt-4">Tarefas</h3>
      {portalData.tasks && portalData.tasks.length > 0 ? (
        <ul>
          {portalData.tasks.map((t: any, i: number) => (
            <li key={i}>{t.title} - {t.category}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Nenhuma tarefa salva.</p>
      )}

      {/* Contatos */}
      <h3 className="text-xl font-semibold mt-6">Contatos</h3>
      {portalData.contacts && portalData.contacts.length > 0 ? (
        <ul>
          {portalData.contacts.map((c: any, i: number) => (
            <li key={i}>{c.name} - {c.email} - {c.phone}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Nenhum contato salvo.</p>
      )}

      {/* Transações */}
      <h3 className="text-xl font-semibold mt-6">Transações</h3>
      {portalData.transactions && portalData.transactions.length > 0 ? (
        <ul>
          {portalData.transactions.map((tr: any, i: number) => (
            <li key={i}>{tr.description} - R$ {tr.amount}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Nenhuma transação salva.</p>
      )}
    </div>
  );
}
