import { SignIn } from '@clerk/nextjs'
import { authAppearance } from '../../utills/clerkAppearance'
import { AuthShell } from '../../utills/authShell'

export default function SignInPage() {
  return (
    <AuthShell title="Welcome back" description="Sign in to access the product dashboard.">
      <SignIn appearance={authAppearance} />
    </AuthShell>
  )
}