import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div>
      <h1 className='mb-2 text-2xl font-semibold text-zinc-900'>Welcome back</h1>
      <p className='mb-6 text-sm text-zinc-600'>Sign in to access the product dashboard.</p>
      <SignIn forceRedirectUrl='/dashboard' signUpUrl='/sign-up' />
    </div>
  )
}