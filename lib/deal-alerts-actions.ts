'use server'

import { subscribeToDealAlerts } from '@/lib/deal-alerts'

export async function subscribeToDealAlertsAction(email: string) {
  return subscribeToDealAlerts(email)
}
