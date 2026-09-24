export interface BuildHeadersOptions {
  token?: string;
  headers?: HeadersInit;
}

export function buildHeaders({
  token,
  headers,
}: BuildHeadersOptions): Headers {
  const result = new Headers(headers);

  /** 'content-type: ' means “The body I am sending is JSON.” */
  /** and 'accept: ' means “I want the server's response to be JSON.” */
  result.set("content-type", "application/json"); 

  if (token) {
    result.set("Authorization", `Bearer ${token}`);
  }
  
  return result;
}