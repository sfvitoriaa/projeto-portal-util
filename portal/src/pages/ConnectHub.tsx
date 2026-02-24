import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../schemas/contactSchema";
import type { Contact } from "../schemas/contactSchema";

export default function ConnectHub() {
  const { register, handleSubmit, reset } = useForm<Contact>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: Contact) => {
    alert(`Contato salvo: ${data.name} - ${data.email}`);
    reset();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">ConnectHub</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 max-w-sm">
        <input {...register("name")} placeholder="Nome" className="border p-2" />
        <input {...register("email")} placeholder="Email" className="border p-2" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2">Salvar</button>
      </form>
    </div>
  );
}
