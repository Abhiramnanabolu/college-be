-- CreateTable
CREATE TABLE "StudentData" (
    "roll_number" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "sem" TEXT NOT NULL,
    "sem_data" JSONB NOT NULL,

    CONSTRAINT "StudentData_pkey" PRIMARY KEY ("roll_number")
);
