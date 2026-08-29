export interface BuildHeadersOptions {
  token?: string;
  headers?: HeadersInit;
}

export function buildHeaders({
  token,
  headers,
}: BuildHeadersOptions): Headers {
  const result = new Headers(headers);

  result.set("Accept", "application/json");

  if (token) {
    result.set("Authorization", `Bearer ${token}`);
  }
  
  return result;
}