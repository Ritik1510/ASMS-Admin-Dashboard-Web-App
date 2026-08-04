import { SignIn, ClerkLoaded, ClerkLoading } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div>
      <h1 className='mb-2 text-2xl font-semibold '>Welcome back</h1>
      <p className='mb-6 text-sm '>Sign in to access the product dashboard.</p>
      {/* 1. This shows ONLY while Clerk is preparing behind the scenes */}
      <ClerkLoading>
        <div className="flex justify-center items-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zinc-900"></div>
          <span className="ml-2 text-sm ">Loading form...</span>
        </div>
      </ClerkLoading>

      {/* 2. This reveals the actual component the millisecond it's ready */}
      <ClerkLoaded>
        {/* <SignIn forceRedirectUrl='/dashboard' signUpUrl='/sign-up' /> */}
        <SignIn />
      </ClerkLoaded>
    </div>
  )
}