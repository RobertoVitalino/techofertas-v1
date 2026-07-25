-- CreateTable
CREATE TABLE "LessonQuestion" (
    "id" SERIAL NOT NULL,
    "customerId" INTEGER NOT NULL,
    "courseSlug" TEXT NOT NULL,
    "lessonSlug" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "resolved" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LessonQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "LessonQuestion_customerId_idx" ON "LessonQuestion"("customerId");

-- CreateIndex
CREATE INDEX "LessonQuestion_courseSlug_lessonSlug_idx" ON "LessonQuestion"("courseSlug", "lessonSlug");

-- CreateIndex
CREATE INDEX "LessonQuestion_createdAt_idx" ON "LessonQuestion"("createdAt");

-- AddForeignKey
ALTER TABLE "LessonQuestion" ADD CONSTRAINT "LessonQuestion_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
