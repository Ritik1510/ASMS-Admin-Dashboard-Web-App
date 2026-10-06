"use server" 
/** To make this a server action, so that the api can be executed on the server */
/** More Context: docs/society-onboarding-model/server-action-for-SOM.D.md*/

import { systemServerApi } from "@/http-infrastructure/src/accessors/system/system-server.accessors"
import { SocietyOnboardingInput } from "../types/society.types"

export const bootstrapSocietyAction = async (input: SocietyOnboardingInput) => {
  return systemServerApi.request("/api/v1/societies/bootstrap", {
    method: "POST", 
    body: input, // TODO: create proper pipeline from society form + zod to here 
  })
}