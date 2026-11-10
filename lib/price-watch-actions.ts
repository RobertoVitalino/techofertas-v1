'use server'

import { watchProductPrice } from '@/lib/price-watch'

export async function watchProductPriceAction(productId: number, email: string) {
  return watchProductPrice(productId, email)
}
