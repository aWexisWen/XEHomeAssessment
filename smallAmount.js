const {Build, By, Key, until, Builder} = require("selenium-webdriver");
const assert = require ("assert");

async function smallAmt(){

    //launh browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to webpage
    await driver.get("https://www.xe.com/");

    //input amount
    await driver.findElement(By.id("amount")).sendKeys("0.01")

    // Select 'From' currency by clicking the dropdown
    let fromCurrencyDropdown = await driver.findElement(By.id("midmarketFromCurrency"));
    await fromCurrencyDropdown.click();
    console.log("Clicked on 'From' currency dropdown");

    // Wait until the dropdown input field is visible
    await driver.wait(until.elementLocated(By.css("div#midmarketFromCurrency input.combobox-input")), 10000);
    let fromCurrencyInput = await driver.findElement(By.css("div#midmarketFromCurrency input.combobox-input"));
    
    // Clear any existing value and type "MYR"
    await fromCurrencyInput.clear();
    await fromCurrencyInput.sendKeys("MYR");
    console.log("Typed 'MYR' into 'From' currency input");

    // Wait a bit for the correct selection to appear
    await driver.sleep(1000);  // Adjust the delay if necessary

    // Press Enter to select the correct option
    await fromCurrencyInput.sendKeys(Key.RETURN);
    console.log("Pressed Enter to select 'MYR'");

    // Select 'To' currency by clicking the dropdown
    let toCurrencyDropdown = await driver.findElement(By.id("midmarketToCurrency"));
    await toCurrencyDropdown.click();
    console.log("Clicked on 'To' currency dropdown");

    // Wait until the dropdown input field is visible
    await driver.wait(until.elementLocated(By.css("div#midmarketToCurrency input.combobox-input")), 10000);
    let toCurrencyInput = await driver.findElement(By.css("div#midmarketToCurrency input.combobox-input"));
    
    // Clear any existing value and type "SGD"
    await toCurrencyInput.clear();
    await toCurrencyInput.sendKeys("SGD");
    console.log("Typed 'SGD' into 'To' currency input");

    // Wait a bit for the correct selection to appear
    await driver.sleep(1000);  // Adjust the delay if necessary

    // Press Enter to select the correct option
    await toCurrencyInput.sendKeys(Key.RETURN);
    console.log("Pressed Enter to select 'SGD'");

    // Click convert button
    let convertButtonXPath = '//*[@id="__next"]/div[4]/div[2]/section/div[2]/div/main/div/div[2]/button';
    await driver.wait(until.elementLocated(By.xpath(convertButtonXPath)), 10000);
    let convertButton = await driver.findElement(By.xpath(convertButtonXPath));
    await convertButton.click();
    console.log("Clicked convert button");

}

smallAmt()