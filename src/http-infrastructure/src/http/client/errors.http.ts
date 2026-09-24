export class HttpError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly details?: HttpErrorPayload,
  ) {
    super(message);
    this.name = "HttpError";
  }
}

export interface HttpErrorPayload {
  code: string;
  layer: string;
  message: string;
}

export async function throwHttpError(
  response: Response,
): Promise<never> {
  let payload: unknown;

  try {
    payload = await response.json();
  } catch {
    throw new HttpError(
      `HTTP request failed with status ${response.status}`,
      response.status,
    );
  }

  if (
    typeof payload === "object" &&
    payload !== null &&
    "error" in payload
  ) {
    const error = (payload as {
      error?: {
        code?: unknown;
        layer?: unknown;
        message?: unknown;
      };
    }).error;

    if (
      error &&
      typeof error.code === "string" &&
      typeof error.layer === "string" &&
      typeof error.message === "string"
    ) {
      throw new HttpError(
        error.message,
        response.status,
        {
          code: error.code,
          layer: error.layer,
          message: error.message,
        },
      );
    }
  }

  throw new HttpError(
    `HTTP request failed with status ${response.status}`,
    response.status,
  );
}