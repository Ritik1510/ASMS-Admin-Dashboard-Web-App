/* THIS LAYER HAVE COMPLETE NEW STORY */

/** --------------- References --------------- */
/**
 * docs/http_infra/AuthTokenRooms/clerk-clientAndServerTokenProvider.D.md 
 * */
/** 
 * docs/http_infra/AuthTokenRooms/client/ClientTokenHandlng.D.md :-> 
 * for complelete mental model of client token injection and acqusition
*/


/**
 * This file is intended to provide a client-side token provider for Clerk authentication,
 * but it is currently not implemented. The commented-out code below outlines the structure of the token provider.
 * reason is that hooks cannot be rendered from outside of react functional components, Discussion are on progress to implement the client-side token provider for Clerk authentication.
 */

/*
import { AccessTokenProvider } from "../AccessTokenProvider.auth";

export const clerkClientTokenProvider: AccessTokenProvider = {
  // TODO: consider making seperate api hook that return the req object with appended client side token provider, see discussion chats 
  async getToken() {
    // Clerk client-side mechanism
  },
};
*/