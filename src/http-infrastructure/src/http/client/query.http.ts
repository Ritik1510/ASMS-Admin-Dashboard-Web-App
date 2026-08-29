export type QueryParams = Record<
  string,
  string | number | boolean | null | undefined
>;

/**
 * buildQueryString() is a small HTTP-infrastructure utility 
 * whose job is to take a URL and a structured query object, 
 * then produce the final URL with properly encoded query parameters.
*/

export function buildQueryString(
  url: string,
  query?: QueryParams,
): string {
  if (!query) {
    return url;
  }

  const params = new URLSearchParams();

  /** 
   * Iterate over each query parameter 
   * so it can be validated and serialized 
   * into the final URL query string. 
  */
  for (const [key, value] of Object.entries(query)) {
    console.log(": ", Object.entries(query))
    if (value !== undefined && value !== null) {
      params.set(key, String(value));
    }
  }

  const queryString = params.toString();

  if (!queryString) {
    return url;
  }

  return `${url}${url.includes("?") ? "&" : "?"}${queryString}`;
}