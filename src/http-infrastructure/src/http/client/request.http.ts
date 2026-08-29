// request.ts

import { fetchClient } from "./fetch-client.http";
import { buildHeaders } from "./headers.http";
import { buildQueryString, type QueryParams } from "./query.http";
import { parseResponse } from "./response.http";
import { throwHttpError } from "./errors.http";
import { AccessTokenProvider } from "@/http-infrastructure/src/auth/accessTokenProvider/AccessTokenProvider.auth";

export interface RequestConfig {
  /* intentinally not supporting DELETE for now, as it is not used in the project */
  method?: "GET" | "POST" | "PUT" | "PATCH" /*| "DELETE"*/; 
  query?: QueryParams;
  headers?: HeadersInit;
  body?: unknown;
  tokenProvider?: AccessTokenProvider; // token provider
}

export async function request<T>(
  path: string,
  config: RequestConfig = {},
): Promise<T> {
  const {
    method = "GET",
    query,
    headers,
    body,
    tokenProvider,
  } = config;

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

  /**
   * Resolve the API endpoint by combining the configured base URL
   * with the request-specific path.
  */
  const baseUrl = `${API_BASE_URL}${path}`;

  /* Append the request query parameters to the endpoint URL. */
  const requestUrl = buildQueryString(baseUrl, query);

  /* Resolve the access token when an authentication provider is available.*/
  const token = tokenProvider
    ? await tokenProvider()
    : null;

  /** 
   * Build the final request headers, including authentication
   * and any request-specific headers.
  */
  const requestHeaders = buildHeaders({
    token: token ?? undefined,
    headers,
  });

  /* Serialize the request payload as JSON when a body is provided. */
  const requestBody =
    body === undefined
      ? undefined
      : JSON.stringify(body);

  /* Execute the HTTP request through the transport layer. */
  const response = await fetchClient(requestUrl, {
    method,
    headers: requestHeaders,
    body: requestBody,
  });

  /* Convert non-2xx responses into standardized HTTP errors. */
  if (!response.ok) {
    throwHttpError(response);
  }

  /* Parse the successful response into the expected application type. */
  return parseResponse<T>(response);
}