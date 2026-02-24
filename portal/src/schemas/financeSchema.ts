import { z } from "zod";

export const financeSchema = z.object({
  description: z.string().min(3, "Descrição deve ter pelo menos 3 caracteres"),
  amount: z.number(),
});

export type Finance = z.infer<typeof financeSchema>;
