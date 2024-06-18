const {Build, By, Key, until, Builder} = require("selenium-webdriver");

async function errorMsg() {

    //launch browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to webpage
    await driver.get("https://www.xe.com/");

    //input amount
    await driver.findElement(By.id("amount")).sendKeys("abc");

}

errorMsg()