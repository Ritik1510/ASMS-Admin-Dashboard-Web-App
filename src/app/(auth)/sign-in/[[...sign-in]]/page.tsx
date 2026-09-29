import { SignIn } from '@clerk/nextjs'
import { authAppearance } from '../../utills/clerkAppearance'
import { AuthShell } from '../../utills/authShell'

export default function SignInPage() {
  return (
    <AuthShell
      title="Gate-G"
      description="Sign in to manage your society."
    >
      <SignIn appearance={authAppearance} />
    </AuthShell>
  )
}