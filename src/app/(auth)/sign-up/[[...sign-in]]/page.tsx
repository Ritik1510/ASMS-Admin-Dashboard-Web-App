import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div>
      <h1 className='mb-2 text-2xl font-semibold'>Create your account</h1>
      <p className='mb-6 text-sm'>Set up your account to continue into the dashboard.</p>
      {/* <SignUp forceRedirectUrl='/dashboard' signInUrl='/sign-in' /> */}
      <SignUp />
    </div>
  )
}