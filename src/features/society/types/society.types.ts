import z from "zod";
import { societyFormSchema } from "../schema/society.schema";

export type SocietyOnboardingInput = z.infer<typeof societyFormSchema>;