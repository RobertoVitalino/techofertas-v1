import { getCustomerCourseReminders } from '@/lib/course-reminders'
import { getCurrentCustomer } from '@/lib/require-customer'
import { NextResponse } from 'next/server'

export async function GET() {
  const customer = await getCurrentCustomer()

  if (!customer) {
    return NextResponse.json(
      { incomplete: [], certificatePending: [] },
      { headers: { 'Cache-Control': 'private, no-store' } },
    )
  }

  const reminders = await getCustomerCourseReminders(customer.id)

  return NextResponse.json(reminders, {
    headers: { 'Cache-Control': 'private, no-store' },
  })
}
