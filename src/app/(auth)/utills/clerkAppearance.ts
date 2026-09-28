import type { ComponentProps } from 'react'
import type { SignIn } from '@clerk/nextjs'

/**
 * Derived from the component's own props, so it stays correct across Clerk
 * versions without depending on where Clerk exports its `Appearance` type.
 * (On older/most current setups, `import type { Appearance } from '@clerk/types'` is equivalent.)
 */
export type ClerkAppearance = NonNullable<ComponentProps<typeof SignIn>['appearance']>

export const authAppearance: ClerkAppearance = {
  // Global tokens (colors, fonts)
  variables: {
    colorPrimary: 'var(--c-brand-900)',
    colorBackground: '#ffffff',
    colorForeground: 'var(--c-brand-900)',
    colorMutedForeground: 'var(--c-brand-600)',
  },

  // Structure & CSS of the form itself
  elements: {
    cardBox: {
      width: '100%',
      maxWidth: '100%',
      boxShadow: 'none',
      borderWidth: '0.657px',
      borderColor: 'var(--c-brand-300)',
    },
    card: {
      width: '100%',
      maxWidth: '100%',
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    formButtonPrimary: 'w-full rounded-md py-2 text-white',
  },
}