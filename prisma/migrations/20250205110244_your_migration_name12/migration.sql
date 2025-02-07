-- CreateTable
CREATE TABLE "Student1" (
    "roll_number" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "startYear" INTEGER NOT NULL DEFAULT 2021,
    "password" TEXT,
    "remarks" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student1_pkey" PRIMARY KEY ("roll_number")
);

-- CreateTable
CREATE TABLE "Student2" (
    "roll_number" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "startYear" INTEGER NOT NULL DEFAULT 2021,
    "password" TEXT,
    "remarks" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student2_pkey" PRIMARY KEY ("roll_number")
);

-- CreateTable
CREATE TABLE "Student3" (
    "roll_number" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "startYear" INTEGER NOT NULL DEFAULT 2021,
    "password" TEXT,
    "remarks" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student3_pkey" PRIMARY KEY ("roll_number")
);

-- CreateTable
CREATE TABLE "Student4" (
    "roll_number" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "startYear" INTEGER NOT NULL DEFAULT 2021,
    "password" TEXT,
    "remarks" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student4_pkey" PRIMARY KEY ("roll_number")
);
