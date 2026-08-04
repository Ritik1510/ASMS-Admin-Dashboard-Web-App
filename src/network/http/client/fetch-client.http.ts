// import { useAuth } from "@clerk/nextjs"

// export const getUsers = async () => {
//   const { getToken } = useAuth();
//   const token = await getToken();
//   const res = await fetch("/api/v1/users", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     }
//   });
//   const data = await res.json();
//   console.log(data);
// }