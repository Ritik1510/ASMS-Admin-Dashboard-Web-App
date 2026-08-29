import { useApiClient } from "@/hooks/use-api-client";

/**
 * ---- this is not working ----,
 * accessor for client facing actions, 
 * hooks cant not be rendered from the outside of functional component
 */
export const systemApi = useApiClient();