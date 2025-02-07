const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const fs = require("fs");

async function example() {
    let options = new chrome.Options();
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    try {
        await driver.get('https://mgitexams.in');
        await driver.sleep(3000);

        await driver.findElement(By.id('lnkLogins')).click();
        await driver.sleep(3000);
        await driver.findElement(By.id('lnkStudent')).click();
        await driver.sleep(3000);

        await driver.findElement(By.id('txtUserId')).clear();
        await driver.findElement(By.id('txtUserId')).sendKeys("21261A04D0");
        await driver.findElement(By.id('txtPwd')).clear();
        await driver.findElement(By.id('txtPwd')).sendKeys("07/06/2004");
        await driver.findElement(By.id('btnLogin')).click();
        await driver.sleep(3000);

        
        await driver.wait(until.elementLocated(By.id('LinkButton2')), 5000);

        const hoverElement = await driver.findElement(By.id('LinkButton2'));
        const actions = driver.actions({ bridge: true });
        await actions.move({ origin: hoverElement }).perform();
        await driver.sleep(1500);

        const clickElement = await driver.findElement(By.id('lnkOverallMarksSemwise'));
        await clickElement.click();

        const idList = [
            "cpStudCorner_btn1", "cpStudCorner_btn2", "cpStudCorner_btn3", "cpStudCorner_btn4",
            "cpStudCorner_btn5", "cpStudCorner_btn6", "cpStudCorner_btn7", "cpStudCorner_btn8"
        ];

        const semWiseData = [];
        for (const id of idList) {
            const element = await driver.wait(until.elementLocated(By.id(id)), 50000).catch(() => null);
            if (element) {
                await element.click();
                await driver.sleep(1000);

                const examData = await driver.executeScript(() => {
                    const rows = document.querySelectorAll('#cpStudCorner_grdSemwise tr');
                    const data = {};
                    for (let i = 1; i < rows.length; i++) {
                        const cells = rows[i].querySelectorAll('td');
                        const rowData = {
                            examCode: cells[2].innerText.trim(),
                            subject: cells[3].innerText.trim(),
                            monthYear: cells[4].innerText.trim(),
                            finalGrade: cells[5].innerText.trim(),
                            points: parseFloat(cells[6].innerText.trim()) || cells[6].innerText.trim(),
                            credits: cells[7].innerText.trim(),
                            status: cells[8].innerText.trim(),
                        };
                        data[cells[0].innerText.trim()] = rowData;
                    }
                    return data;
                });

                semWiseData.push(examData);
            } else {
                semWiseData.push(null);
            }
        }

        console.log(semWiseData);

        let imgElement = await driver.findElement(By.id('ImgStudent'));
        let imgSrc = await imgElement.getAttribute('src');

        let pageUrl = await driver.getCurrentUrl();
        let absoluteImgUrl = new URL(imgSrc, pageUrl).href;
        console.log("Absolute Image URL:", absoluteImgUrl);

        await driver.executeScript(`window.open("${absoluteImgUrl}", "_blank");`);
        await driver.sleep(3000); 

        let tabs = await driver.getAllWindowHandles();
        await driver.switchTo().window(tabs[1]);

        let base64String = await driver.executeScript(async () => {
            let img = document.querySelector("img"); 
            let canvas = document.createElement("canvas");
            let ctx = canvas.getContext("2d");
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            return canvas.toDataURL("image/jpeg").split(",")[1];
        });

        console.log("Base64 Image Data:", base64String);

        let imageBytes = Buffer.from(base64String, "base64");
        fs.writeFileSync("student_image.jpg", imageBytes);
        console.log("Image saved!");

    } catch (error) {
        console.error("Error:", error);
    } finally {
        await driver.quit();
    }
}

example();
