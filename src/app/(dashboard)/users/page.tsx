
import { FeatureDevelopmentCard } from "@/components/Development-and-Maintenance/featureDevelopmentCard.component"
import { PageHeader } from "@/components/shared/dashboard/tabPageHeader/tabPageHeader.component"
import { tabPageHeaderConfig } from "@/components/shared/dashboard/tabPageHeader/tabPageHeader.config"
import { useApiClient } from "@/hooks/use-api-client"
import { systemServerApi } from "@/http-infrastructure/src/accessors/system/system-server.accessors"
import { createHttpClient } from "@/http-infrastructure/src/http/client/createHttpClient.http"

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

async function Users() {
  /**
   * LEVEL 1 — Server-side API accessor
   *
   * The request is executed on the server through the server accessor.
   * The server accessor is responsible for providing the authentication
   * capability required by the HTTP client.
   *
   * This is the server-side request path.
   */
  const me = await systemServerApi.request<User[]>("/api/v1/users/me");
  console.log("test of systemServerApi: ", me);

  /**
   * LEVEL 2 — Client-side API hook
   *
   * The request is initiated from a Client Component through the
   * `useApiClient` hook.
   *
   * The hook owns the React/Clerk integration and provides the
   * authentication capability to the HTTP client.
   *
   * This keeps React/Clerk-specific logic outside the HTTP infrastructure.
   */
  /*
  const api = useApiClient();

  async function loadProfile() {
    const me = await api.request<User[]>("/api/v1/users/me");
    console.log("test of useApiClientHook: ", me);
  }

  loadProfile();
  */

  /**
   * LEVEL 3 — Direct HTTP client construction
   *
   * This bypasses the higher-level API hook/accessor and directly creates
   * an HTTP client by supplying the authentication capability.
   *
   * `createHttpClient` does not know about React or Clerk.
   * It only receives the capability required to acquire an access token.
   * 
   * Here Token is provided to the usage point. 
   */
  /*
  const { getToken } = useAuth();
  const api = createHttpClient(getToken);

  async function loadProfile() {
    // The HTTP client is already configured with the authentication capability.
    const me = await api.request("/api/v1/users/me");
    console.log("test of createHttpClient: ", me);
  }
  */

  /**
   * LEVEL 4 — Direct token acquisition
   *
   * The token is acquired explicitly by the caller and then passed to
   * the API functions.
   *
   * In this approach, the caller is responsible for obtaining the token
   * before making each authenticated API request.
   */
  /*
  const { getToken } = useAuth();

  const handleFetchUsers = async () => {
    const token = await getToken();

    const users = await getUsers(token);
    const complaints = await getComplaints(token);
  };
  */

  return (
    <>
      {/* Header */}
      <PageHeader config={tabPageHeaderConfig.user} />

      {/* Test button for the client-side API hook */}
      {/*
      <button
        onClick={loadProfile}
        className="cursor-pointer hover:border-border"
      >
        Load profile
      </button>
      */}

      {/*
        Test buttons for fetching users/complaints and validating
        the token-provider implementations.
      */}
      {/*
      <button
        onClick={handleFetchUsers}
        className={buttonVariants({ variant: "outline", size: "default" })}
      >
        Fetch Results
      </button>

      <button
        onClick={handleFetchUsers}
        className={buttonVariants({ variant: "outline", size: "default" })}
      >
        Fetch Complaints
      </button>
      */}

      {/* Invitation + overview card */}
      {/* User table */}
      <FeatureDevelopmentCard title="Users" />
    </>
  )
}

export default Users