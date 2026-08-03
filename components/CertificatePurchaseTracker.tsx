'use client'

import { trackCertificatePurchase } from '@/lib/ad-tracking'
import { useEffect } from 'react'

export function CertificatePurchaseTracker({
  valueCents,
  verificationCode,
}: {
  valueCents: number
  verificationCode: string
}) {
  useEffect(() => {
    const dedupeKey = `vitalino_certificate_tracked_${verificationCode}`

    if (sessionStorage.getItem(dedupeKey)) return

    sessionStorage.setItem(dedupeKey, '1')
    trackCertificatePurchase(valueCents, verificationCode)
  }, [valueCents, verificationCode])

  return null
}
