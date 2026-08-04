import { PageHeader } from "@/components/shared/dashboard/tabPageHeader/tabPageHeader.component"
import { tabPageHeaderConfig } from "@/components/shared/dashboard/tabPageHeader/tabPageHeader.config"
import { Button, buttonVariants } from "@/components/ui/button"
import { useAuth } from "@clerk/nextjs"

function users() {
  return (
    <>
      {/* header */}
      <PageHeader config={tabPageHeaderConfig.user} /> 
      <Button 
        className={buttonVariants({variant: 'outline', size: 'default'})}
        onClick={getUsers}
        > 
        getUsers
      </Button>
      {/* invitation +  overview_card */}
      {/* user tabel */}
    </>
  )
}

export const getUsers = async ()=> {
  const { getToken } = useAuth();
  const token = await getToken();
  const res = await fetch("/api/v1/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  const data = await res.json();
  console.log(data);
}

export default users