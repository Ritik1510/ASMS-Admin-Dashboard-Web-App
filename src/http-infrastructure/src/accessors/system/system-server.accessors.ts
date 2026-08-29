import { clerkServerTokenProvider } from "../../auth/accessTokenProvider/clerk/server/server.client";
import { createHttpClient } from "../../http/client/createHttpClient.http";

/**
 * for server facing actions, like for SSR Components  
 */
export const systemServerApi = createHttpClient(
  clerkServerTokenProvider
);
