import { auth } from "@clerk/nextjs/server";
import { AccessTokenProvider } from "../../AccessTokenProvider.auth";

export const clerkServerTokenProvider: AccessTokenProvider = async () => {
  const { getToken } = await auth();
  return getToken();
};