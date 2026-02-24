import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
});

export type Contact = z.infer<typeof contactSchema>;
