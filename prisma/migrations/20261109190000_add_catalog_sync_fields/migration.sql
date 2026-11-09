-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "lastSyncedAt" TIMESTAMP(3),
ADD COLUMN     "priceDroppedAt" TIMESTAMP(3),
ADD COLUMN     "syncFailures" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE INDEX "Product_active_idx" ON "Product"("active");
