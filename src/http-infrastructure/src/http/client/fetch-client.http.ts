export async function fetchClient(
  url: string,
  options?: RequestInit
): Promise<Response> {
  const request = new Request(url, options);

  /**
   * Diagnostic logs for inspecting the final fetch request. 
   * Uncomment during development/testing when request details need inspection. 
   * Authorization is intentionally truncated to avoid logging the full token. 
  */

  /*
  console.log("========== FETCH CLIENT INFORMATION ==========");
  console.log("URL:", request.url);
  console.log("METHOD:", request.method);

  console.log("HEADERS:");

  for (const [key, value] of request.headers.entries()) {
    if (key === "authorization") {
      console.log(
        key, ":",
        `${value.slice(0, 30)}...`
      );
    } else {
      console.log(key, ":", value);
    }
  }

  console.log("==============================================");
  */

  return fetch(url, options);
}

/**
 * NORMAL REQUEST TESING USING FETCH FNC
*/

/*
import { useAuth } from "@clerk/nextjs"

export const getUsers = async () => {
  const { getToken } = useAuth();
  const token = await getToken();
  const res = await fetch("/api/v1/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  const data = await res.json();
}
*/