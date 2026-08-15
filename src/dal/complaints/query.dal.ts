import { clerkServerTokenProvider } from "@/network/auth/accessTokenProvider/server/server.client";
import { request } from "@/network/http/client";
import { useAuth } from "@clerk/nextjs"; // client hook for token extraction
import { auth } from "@clerk/nextjs/server"; // server-side auth for token extraction

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   role: string;
// }

async function getTokenFromClerk() {
  const { getToken } = useAuth()
  const token = await getToken()
  console.log("Token in query.dal.ts:", token);
  return token;
}

export async function getComplaints(token: string | null) {
  // const token = await getTokenFromClerk();
  console.log("Token in getComplaints function:", token);
  return request("/api/v1/complaints/get",{
    method: "GET",
    tokenProvider: clerkServerTokenProvider, // Use the server-side token provider
    query: {
      page: 1,
      limit: 5
    }
  })
}