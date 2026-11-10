-- CreateTable
CREATE TABLE "PriceWatch" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "priceAtSignup" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastNotifiedAt" TIMESTAMP(3),
    "unsubscribedAt" TIMESTAMP(3),

    CONSTRAINT "PriceWatch_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PriceWatch_token_key" ON "PriceWatch"("token");

-- CreateIndex
CREATE INDEX "PriceWatch_productId_idx" ON "PriceWatch"("productId");

-- CreateIndex
CREATE INDEX "PriceWatch_email_idx" ON "PriceWatch"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PriceWatch_productId_email_key" ON "PriceWatch"("productId", "email");
