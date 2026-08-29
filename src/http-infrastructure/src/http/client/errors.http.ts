export class HttpError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message);
    this.name = "HttpError";
  }
}

export function throwHttpError(response: Response): never {
  /** 
   * TODO: 
   * Add more detailed error handling based on response status codes and 
   * response body if needed 
   */
  throw new HttpError(
    `HTTP request failed with status ${response.status}`,
    response.status,
  );
}