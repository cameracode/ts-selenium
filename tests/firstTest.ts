const {Builder, By, Key} = require ("selenium-webdriver");

async function example() {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

    // navigate to our app
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    // add a todo
    await driver.findElement(By.id("sampletodotext")).sendKeys(
        "Learn TS Selenium", 
        Key.RETURN);

    // close the browser
    await driver.quit();
}
example();