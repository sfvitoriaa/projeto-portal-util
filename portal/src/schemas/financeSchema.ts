import { z } from "zod";

export const financeSchema = z.object({
  description: z.string().min(3, "Descrição deve ter pelo menos 3 caracteres"),
  amount: z.number().positive("O valor deve ser maior que zero"),
  type: z.enum(["entrada", "saida"], "Informe se é entrada ou saída"),
});

export type Finance = z.infer<typeof financeSchema>;
