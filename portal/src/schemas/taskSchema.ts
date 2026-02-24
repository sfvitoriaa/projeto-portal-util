import { z } from "zod";

export const taskSchema = z.object({
  title: z.string().min(5, "Título deve ter pelo menos 5 caracteres"),
  category: z.enum(["Trabalho", "Pessoal", "Urgente"]),
});

export type Task = z.infer<typeof taskSchema>;
