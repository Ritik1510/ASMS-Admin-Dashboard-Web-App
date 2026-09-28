import { SignUp } from '@clerk/nextjs'
import { authAppearance } from '../../utills/clerkAppearance'
import { AuthShell } from '../../utills/authShell'

export default function SignUpPage() {
  return (
    <AuthShell
      title="Gate-G"
      description="Set up your account to continue into the dashboard."
    >
      <SignUp appearance={authAppearance} />
    </AuthShell>
  )
}