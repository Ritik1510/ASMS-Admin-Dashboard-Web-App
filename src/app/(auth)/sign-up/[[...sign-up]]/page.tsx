import { SignUp } from '@clerk/nextjs'
import { authAppearance } from '../../utills/clerkAppearance'
import { AuthShell } from '../../utills/authShell'

export default function SignUpPage() {
  return (
    <AuthShell
      title="Gate-G"
      description="Get started managing your society."
    >
      <SignUp appearance={authAppearance} />
    </AuthShell>
  )
}