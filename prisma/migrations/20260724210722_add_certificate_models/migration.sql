-- CreateTable
CREATE TABLE "CertificatePurchase" (
    "id" SERIAL NOT NULL,
    "customerId" INTEGER NOT NULL,
    "externalReference" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "amountCents" INTEGER NOT NULL,
    "mpPreferenceId" TEXT,
    "mpPaymentId" TEXT,
    "checkoutUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CertificatePurchase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Certificate" (
    "id" SERIAL NOT NULL,
    "customerId" INTEGER NOT NULL,
    "purchaseId" INTEGER NOT NULL,
    "verificationCode" TEXT NOT NULL,
    "courseSlug" TEXT NOT NULL DEFAULT 'seguranca-da-informacao',
    "hoursTotal" TEXT NOT NULL DEFAULT '21h',
    "issuedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Certificate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CertificatePurchase_externalReference_key" ON "CertificatePurchase"("externalReference");

-- CreateIndex
CREATE UNIQUE INDEX "CertificatePurchase_mpPaymentId_key" ON "CertificatePurchase"("mpPaymentId");

-- CreateIndex
CREATE INDEX "CertificatePurchase_customerId_idx" ON "CertificatePurchase"("customerId");

-- CreateIndex
CREATE INDEX "CertificatePurchase_status_idx" ON "CertificatePurchase"("status");

-- CreateIndex
CREATE UNIQUE INDEX "Certificate_purchaseId_key" ON "Certificate"("purchaseId");

-- CreateIndex
CREATE UNIQUE INDEX "Certificate_verificationCode_key" ON "Certificate"("verificationCode");

-- CreateIndex
CREATE INDEX "Certificate_customerId_idx" ON "Certificate"("customerId");

-- AddForeignKey
ALTER TABLE "CertificatePurchase" ADD CONSTRAINT "CertificatePurchase_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certificate" ADD CONSTRAINT "Certificate_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certificate" ADD CONSTRAINT "Certificate_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "CertificatePurchase"("id") ON DELETE CASCADE ON UPDATE CASCADE;
