import MarketingHeaderNavigation from '@/components/navigation/marketing/navigation/marketing.navigation'
import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton
} from '@clerk/nextjs'

function MarketingHeader() {
  return (
    <header className="flex justify-around items-center p-4 gap-4 h-16">
      <div className="logo">
        <h1>
          ASMS
        </h1>
      </div>
      <MarketingHeaderNavigation />
      <div className="auth-btn-container flex justify-center items-center gap-2.5">
        <Show when="signed-out">
          <SignInButton>
            <button className="hover:outline-[#6c47ff] hover:outline hover:outline-offset-0 text-black rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </header>
  )
}

export default MarketingHeader