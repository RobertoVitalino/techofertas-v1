-- CreateTable
CREATE TABLE "DealAlertSubscriber" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "unsubscribeToken" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "unsubscribedAt" TIMESTAMP(3),

    CONSTRAINT "DealAlertSubscriber_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DealAlertSubscriber_email_key" ON "DealAlertSubscriber"("email");

-- CreateIndex
CREATE UNIQUE INDEX "DealAlertSubscriber_unsubscribeToken_key" ON "DealAlertSubscriber"("unsubscribeToken");

-- CreateIndex
CREATE INDEX "DealAlertSubscriber_unsubscribedAt_idx" ON "DealAlertSubscriber"("unsubscribedAt");
