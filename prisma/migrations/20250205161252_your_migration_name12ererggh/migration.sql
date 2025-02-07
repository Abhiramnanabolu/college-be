/*
  Warnings:

  - You are about to drop the `Student1` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Student2` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Student3` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Student4` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[roll_number]` on the table `StudentData` will be added. If there are existing duplicate values, this will fail.

*/
-- DropTable
DROP TABLE "Student1";

-- DropTable
DROP TABLE "Student2";

-- DropTable
DROP TABLE "Student3";

-- DropTable
DROP TABLE "Student4";

-- CreateIndex
CREATE UNIQUE INDEX "StudentData_roll_number_key" ON "StudentData"("roll_number");

-- AddForeignKey
ALTER TABLE "StudentData" ADD CONSTRAINT "StudentData_roll_number_fkey" FOREIGN KEY ("roll_number") REFERENCES "Student"("roll_number") ON DELETE RESTRICT ON UPDATE CASCADE;
