const prisma = require("./prismaClient");

async function getCount() {
    
    const completedCount = await prisma.student.count({
        where: {
          status: 'completed',
        },
    });

    const pendingCount = await prisma.student.count({
        where: {
          status: 'pending',
        },
    });

    const processingCount = await prisma.student.count({
        where: {
          status: 'processing',
        },
    });
    
    console.log(`Count of records with status 'completed':`, completedCount);
    console.log(`Count of records with status 'pending':`, pendingCount);
    console.log(`Count of records with status 'processing':`, processingCount);
    
}

getCount();