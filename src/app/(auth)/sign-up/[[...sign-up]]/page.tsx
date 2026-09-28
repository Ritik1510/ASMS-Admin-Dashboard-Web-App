import { Spinner } from '@/components/ui/spinner'
import { SignUp, ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import { authAppearance } from '../../utills/clerkAppearance'

export default function SignUpPage() {
  return (
    <div className="grid w-auto items-center justify-center gap-4 font-marketing!">
      <ClerkLoading>
        <div className="flex items-center justify-center py-4">
          <Spinner />
          <span className="ml-2 text-sm">Loading form...</span>
        </div>
      </ClerkLoading>

      <ClerkLoaded>
        <div className="grid gap-0">
          <h1 className="mx-auto text-xl font-semibold">Create your account</h1>
          <p className="mx-auto text-sm">Set up your account to continue into the dashboard.</p>
        </div>

        {/* <SignUp forceRedirectUrl="/dashboard" signInUrl="/sign-in" /> */}
        <SignUp appearance={authAppearance} />
      </ClerkLoaded>
    </div>
  )
}