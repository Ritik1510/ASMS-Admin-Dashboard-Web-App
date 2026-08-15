// These are just for testing the token_retrivel/token_provider layer test purposes, not intented to use in production, that why they are commented out. The code is still here for reference and testing purposes.

/*import { clerkServerTokenProvider } from "@/network/auth/accessTokenProvider/server/server.client";
import { request } from "@/network/http/client";
import { useAuth } from "@clerk/nextjs"; // client hook for token extraction
import { auth } from "@clerk/nextjs/server"; // server-side auth for token extraction

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}
async function getTokenFromClerk() {
  const { getToken } = useAuth()
  const token = await getToken()
  console.log("Token in query.dal.ts:", token);
  return token;
}

export async function getUsers(token: string | null) {
  // const token = await getTokenFromClerk();
  console.log("Token in getUsers function:", token);
  return request<User[]>("/api/v1/users",{
    method: "GET",
    tokenProvider: clerkServerTokenProvider, // Use the server-side token provider
    query: {
      page: 1,
      limit: 5
    }
  })
}*/