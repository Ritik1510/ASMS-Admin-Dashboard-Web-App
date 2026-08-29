import { AccessTokenProvider } from "@/http-infrastructure/src/auth/accessTokenProvider/AccessTokenProvider.auth";
import { request, RequestConfig } from "./request.http";

/**
 * It binds shared request dependencies/configuration to the generic request()
 * operation and exposes the resulting request interface. 
 * 
 * The HTTP client does not acquire tokens itself. 
 * It receives the token provider as a dependency.
 */

export function createHttpClient(
  tokenProvider?: AccessTokenProvider,
) {
  return {
    request: <T>(
      path: string,
      config: RequestConfig = {},
    ) => {
      return request<T>(path, {
        ...config,
        tokenProvider,
      });
    },
  };
}