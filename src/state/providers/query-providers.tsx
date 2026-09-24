"use client";

import * as React from "react";
import {
  QueryClientProvider,
} from "@tanstack/react-query";

import { queryClient } from "../query/query-client";

interface QueryProviderProps {
  children: React.ReactNode;
}

export function QueryProvider({
  children,
}: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}