import { useQuery } from "@tanstack/react-query";
import { useApiClient } from "@/hooks/use-api-client";

export const healthQueryKeys = {
  all: ["health"] as const,
  backend: () => [...healthQueryKeys.all, "backend"] as const,
};

interface HealthResponse {
  status: "ok";
  service: string;
  version: string;
  environment: "development" | "production";
  timestamp: string;
}

interface BackendHealth {
  status: "ok";
  service: string;
  version: string;
  environment: string;
  timestamp: string;
}

export function useBackendHealthQuery() {
  const api = useApiClient();
  return useQuery({
    queryKey: healthQueryKeys.backend(),
    queryFn: async () => {
      const res = await api.request<BackendHealth>("/api/v1/healthcheck/");
      return res
    },
  });
}