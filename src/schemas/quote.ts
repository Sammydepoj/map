import { z } from "zod";

export const QuotesFormSchema = () => {
  return z.object({
    quoteRfqNumber: z
      .string({ required_error: "Rfq number is required" })
      .nonempty({ message: "Rfq number can nt be empty" }),
    quoteTitle: z
      .string({ required_error: "Title is required" })
      .nonempty({ message: "Title can nt be empty" }),
    quoteDepartment: z.string({ required_error: "Department is required" }),
    quoteEdd: z.string({
      required_error: "Expected delivery date is required",
    }),
    items: z
      .array(
        z.object({
          itemName: z
            .string({
              required_error: "Name price is required",
            })
            .min(1, { message: "Name price is too short" }),
          variant: z
            .string({
              required_error: "Variant is required",
            })
            .min(1, { message: "Variant is too short" }),
          quantity: z
            .string({ required_error: "Quantity is required" })
            .min(1, { message: "Quantity is too short" }),
          price: z
            .number({ required_error: "Price is required" })
            .min(1, { message: "Price is too short" }),
          edd: z
            .string({ required_error: "Expected delivery date is required" })
            .min(1, { message: "Expected delivery date is too short" }),
          amount: z
            .number({ required_error: "Amount is required" })
            .min(1, { message: "Amount is too short" }),
        })
      )
      .default([]),
  });
};
