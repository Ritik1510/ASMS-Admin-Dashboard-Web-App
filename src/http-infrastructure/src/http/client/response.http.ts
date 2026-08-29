/**
 * Deserialize a successful HTTP response into the expected application type.
 *
 * A 204 No Content response has no response body, so it is returned as
 * `undefined`. All other responses are parsed as JSON.
*/

export async function parseResponse<T>(
  response: Response,
): Promise<T> {
  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}