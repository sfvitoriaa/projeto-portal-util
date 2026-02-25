import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../schemas/contactSchema";
import type { Contact } from "../schemas/contactSchema";
import { useState } from "react";

export default function ConnectHub() {
  const { register, handleSubmit, reset } = useForm<Contact>({
    resolver: zodResolver(contactSchema),
  });

  const [contacts, setContacts] = useState<Contact[]>([]);

  const onSubmit = (data: Contact) => {
    setContacts([...contacts, data]);
    reset();
  };

  const removeContact = (index: number) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  const salvarNoLocalStorage = () => {
    const portalData = JSON.parse(localStorage.getItem("portalData") || "{}");
    portalData.contacts = contacts;
    localStorage.setItem("portalData", JSON.stringify(portalData));
    alert("Contatos salvos com sucesso!");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Contatos</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 max-w-sm">
        <input {...register("name")} placeholder="Nome Completo" className="border p-2" />
        <input {...register("email")} placeholder="Email" className="border p-2" />
        <input {...register("phone")} placeholder="Telefone" className="border p-2" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2">Adicionar</button>
        <button type="button" onClick={salvarNoLocalStorage} className="bg-gray-600 text-white px-4 py-2">
          Salvar
        </button>
      </form>
      <ul className="mt-4">
        {contacts.map((c, i) => (
          <li key={i} className="border-b py-2 flex justify-between">
            {c.name} - {c.email} - {c.phone}
            <button onClick={() => removeContact(i)} className="text-red-600">Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
