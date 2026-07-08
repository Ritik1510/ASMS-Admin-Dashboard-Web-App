"use client"

import { Button } from "@/components/ui/button";
import { RedirectToSignIn, useAuth } from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";

export default function Home() {

  const { isSignedIn, isLoaded } = useAuth(); 

  if(!isLoaded){
    return <h1>Loading...</h1>
  }

  if (!isSignedIn) {
    // Add logic to handle the unauthenticated user
    // This example uses the `redirectToSignIn()` method to redirect the user to the sign-in page
    return <RedirectToSignIn />
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button onClick={() => redirect('/sign-up')}>
        click me
      </Button>
    </div>
  );
}
