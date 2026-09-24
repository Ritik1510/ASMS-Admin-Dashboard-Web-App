"use client";

import { useQuery } from "@tanstack/react-query";
import { usersQueryKeys } from "../queryKeys/query-keys";
import { useApiClient } from "@/hooks/use-api-client";
import { HttpError } from "@/http-infrastructure/src/http/client/errors.http";
import { ApiEnvelope, UserResponse } from "../types/types.users";

export function useCurrentUserQuery() {
  const api = useApiClient(); /** client side access, it helps to bind the auth to the execution */
  return useQuery<UserResponse, HttpError>({
    queryKey: usersQueryKeys.current(),
    queryFn: async () => {
      const res = await api.request<ApiEnvelope<UserResponse>>("/api/v1/users/me");
      return res.data;
    },
  });
}