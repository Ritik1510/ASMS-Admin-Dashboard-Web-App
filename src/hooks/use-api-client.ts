"use client";

import { createHttpClient } from "@/http-infrastructure/src/http/client/createHttpClient.http";
import { useAuth } from "@clerk/nextjs";
import { useMemo } from "react";

/**
 * Obtain the client-side authentication capability 
 * from the React/Clerk context and 
 * inject it into the generic HTTP client. 
 * it knows: React, Clerk, useAuth(), client-side getToken
 */

export function useApiClient() {
  const { getToken } = useAuth();

  return useMemo(
    () => createHttpClient(getToken),
    [getToken]
  );
}