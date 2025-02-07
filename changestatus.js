const prisma = require("./prismaClient");

async function changeStatus() {
    
        await prisma.student.updateMany({
            data: {
                status: "pending",
            },
            where: {
                status: "processing",
            },
        });
    
}

async function changeStatusForCompleted() {
    await prisma.student.updateMany({
        data: {
            status: "completed",
        },
        where: {
            password: {
                not: null,
            },
        }
    });
}

//changeStatusForCompleted();
changeStatus();