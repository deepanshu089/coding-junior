import * as z from "zod";

export const addUserFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  street: z.string().min(3, "Street address must be at least 3 characters."),
  city: z.string().min(2, "City must be at least 2 characters."),
  zipcode: z.string().min(5, "ZIP code must be at least 5 characters."),
});