-- CreateTable
CREATE TABLE "Student" (
    "roll_number" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("roll_number")
);
