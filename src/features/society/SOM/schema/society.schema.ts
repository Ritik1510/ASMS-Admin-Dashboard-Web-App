/**
** Zod gives us a way to validate the data we receive from the client. 
**/

import * as z from "zod";

export const societyFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  address: z.string().min(1, { message: "Address is required" }),
})

/** 
** some fields are commented out 
** because they are not required for the initial version of the society onboarding form.
**/

export const CreateSocietySchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  /*
  city: z.string().min(1, { message: "City is required" }), 
  state: z.string().min(1, { message: "State is required" }),
  pincode: z.string().min(1, { message: "Pincode is required" }),
  */
});

export const UpdateSocietySchema = z.object({
  name: z.string().min(1).optional(),
  /*
  address: z.string().min(1).optional(),
  city: z.string().min(1).optional(),
  state: z.string().min(1).optional(),
  pincode: z.string().min(1).optional(),
  */
});