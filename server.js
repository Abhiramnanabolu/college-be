const express = require('express');
const cors = require('cors');
const prisma = require("./prismaClient");

const app = express();
const port = process.env.PORT || 5181;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/getrollnumber',async (req, res) => {

    console.log("Getting Roll Number");

    let rollNumbers = await prisma.student.findMany({
        where: {
          status: "pending",
        },
        orderBy: {
          updatedAt: "asc",
        },
        select: {
            roll_number: true,
        },
        take: 1, 
    });

    async function changeToProcessing(rollNumbers) {
        for (let rollNumber of rollNumbers) {
            await prisma.student.update({
                where: { roll_number: rollNumber.roll_number },
                data: { status: "processing" }
            });
        }
    }

    changeToProcessing(rollNumbers);
    res.send(rollNumbers[0]);

});

app.post('/postpassword',async (req, res) => {
    console.log(req.body);
    const { roll_number, password } = req.body;

    await prisma.student.update({
        where: { roll_number },
        data: {
            status: "completed",
            password: password
        }
    });

    res.send("Password saved!");

});

app.get('/getcount',async (req, res) => {

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

    res.send({
        "Completed Count": completedCount,
        "Pending Count": pendingCount,
        "Processing Count": processingCount
    });

});

app.get('/changestatus', async (req, res) => {

    console.log("Changing Status");
    await prisma.student.updateMany({
        where: {
            status: "processing"
        },
        data: {
            status: "pending"
        }
    });
    res.send("Done");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Access the server at http://localhost:${port}/`);
});