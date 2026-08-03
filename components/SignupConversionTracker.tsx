'use client'

import { trackSignUp } from '@/lib/ad-tracking'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'

const DEDUPE_KEY = 'vitalino_signup_tracked'

function SignupConversionTrackerInner() {
  const searchParams = useSearchParams()

  useEffect(() => {
    if (searchParams.get('boas-vindas') !== '1') return
    if (sessionStorage.getItem(DEDUPE_KEY)) return

    sessionStorage.setItem(DEDUPE_KEY, '1')
    trackSignUp()
  }, [searchParams])

  return null
}

// Cadastro completion redirects to `${destination}?boas-vindas=1`, which can
// land on any page (home, a course, a specific lesson) depending on where
// signup started. Mounting this once in the root layout catches it
// everywhere instead of wiring the same check into every landing page.
export function SignupConversionTracker() {
  return (
    <Suspense fallback={null}>
      <SignupConversionTrackerInner />
    </Suspense>
  )
}
