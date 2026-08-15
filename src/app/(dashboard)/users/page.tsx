'use client'
import { FeatureDevelopmentCard } from "@/components/Development-and-Maintenance/featureDevelopmentCard.component"
import { PageHeader } from "@/components/shared/dashboard/tabPageHeader/tabPageHeader.component"
import { tabPageHeaderConfig } from "@/components/shared/dashboard/tabPageHeader/tabPageHeader.config"
// import { useAuth } from "@clerk/nextjs"

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

function Users() {

  /*
  const { getToken } = useAuth()
  const handleFetchUsers = async () => {
     const token = await getToken()
      const users = await getUsers(token)
      const complaints = await getComplaints(token)
  };
  */

  return (
    <>
      {/* header */}
      <PageHeader config={tabPageHeaderConfig.user} />

      {/* test button for fetching users/user and for the token_provider tests */}
      {/* <button
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
      </button> */}

      {/* invitation +  overview_card */}
      {/* user tabel */}
      <FeatureDevelopmentCard title="Users" />
    </>
  )
}

export default Users

