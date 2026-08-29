// check discussions: docs/http_infra/TokenSecurity/WhyTokenProvider.D.md

/** 
 * Token provider contract. 
 * Defines a function that asynchronously returns an access token. */
export type AccessTokenProvider = () => Promise<string | null>; 

let tokenProvider: AccessTokenProvider | null = null;

/* register a token provider function that returns a Promise<string | null> */
export function setTokenProvider(
  provider: AccessTokenProvider,
): void {
  tokenProvider = provider;
}

/** 
 * Acquires the access token through the registered provider. 
 * Returns null when no provider has been registered. 
 */
export async function getToken(): Promise<string | null> {
  if (!tokenProvider) {
    return null;
  }

  return tokenProvider();
}