'use client'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    gtag?: (...args: unknown[]) => void
  }
}

const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
const GOOGLE_ADS_SIGNUP_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_SIGNUP_LABEL
const GOOGLE_ADS_PURCHASE_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_PURCHASE_LABEL

// Fired once when a customer finishes free signup — the fast, high-volume
// event ad platforms need to actually learn who to target. The certificate
// purchase happens too far downstream (lessons + exam) to give algorithms
// enough data on its own.
export function trackSignUp() {
  window.fbq?.('track', 'CompleteRegistration')
  window.gtag?.('event', 'sign_up')

  if (GOOGLE_ADS_ID && GOOGLE_ADS_SIGNUP_LABEL) {
    window.gtag?.('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_SIGNUP_LABEL}`,
    })
  }
}

// transactionId de-duplicates the event (Meta eventID, GA4/Ads
// transaction_id) so revisiting the certificate page never double-counts it.
export function trackCertificatePurchase(valueCents: number, transactionId: string) {
  const value = valueCents / 100

  window.fbq?.(
    'track',
    'Purchase',
    { value, currency: 'BRL' },
    { eventID: transactionId },
  )
  window.gtag?.('event', 'purchase', {
    value,
    currency: 'BRL',
    transaction_id: transactionId,
  })

  if (GOOGLE_ADS_ID && GOOGLE_ADS_PURCHASE_LABEL) {
    window.gtag?.('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_PURCHASE_LABEL}`,
      value,
      currency: 'BRL',
      transaction_id: transactionId,
    })
  }
}
