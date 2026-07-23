'use client'

import { track } from '@vercel/analytics'
import type { AnchorHTMLAttributes } from 'react'

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string
  eventData?: Record<string, string | number | boolean>
}

export function TrackedLink({
  eventName,
  eventData,
  onClick,
  ...anchorProps
}: TrackedLinkProps) {
  return (
    <a
      {...anchorProps}
      onClick={(event) => {
        track(eventName, eventData)
        onClick?.(event)
      }}
    />
  )
}
