const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Ensure Prisma shuts down properly when the app exits
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit();
});

module.exports = prisma;
