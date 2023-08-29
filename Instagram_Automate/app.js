const { Builder, By, Key, until } = require('selenium-webdriver');
const robot = require('robotjs');
const f1=async(imgPath)=> {
    // Create a new instance of the browser
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        // Navigate to a website
        await driver.get('https://instagram.com');
        await new Promise(resolve => setTimeout(resolve, 5000));
        const inputSelector = 'div > label > input[name="username"]';
        const inputSelector2 = 'div > label > input[name="password"]';
        await driver.wait(until.elementLocated(By.css(inputSelector)),10000);
        await driver.wait(until.elementLocated(By.css(inputSelector2)),10000);
        const inputField = await driver.findElement(By.css(inputSelector));
        const inputField2 = await driver.findElement(By.css(inputSelector2));
         // Replace with the actual selector of your button
         const buttonSelector2 = 'button[type="submit"]';
        const button2 = await driver.findElement(By.css(buttonSelector2));
        // Find the input field within the parent div
        await inputField.sendKeys('Pro_plot');
        await new Promise(resolve => setTimeout(resolve, 1900));
        await inputField2.sendKeys('pilot@123');
        await new Promise(resolve => setTimeout(resolve, 2000));
        await button2.click();
        await new Promise(resolve => setTimeout(resolve, 5000));
        // const textToClick = 'Not now'; Uncomment for MacOS
        const textToClick = 'Not Now';
        const textToClick1 = 'Not Now';
        await new Promise(resolve => setTimeout(resolve, 3000));        
        const elementWithText = await driver.findElement(By.xpath(`//div[contains(text(), '${textToClick}')]`));
        // Click on the element
        await new Promise(resolve => setTimeout(resolve, 2500));
        await elementWithText.click();
        await new Promise(resolve => setTimeout(resolve, 5000));
        const elementWithText1 = await driver.findElement(By.xpath(`//button[text()="${textToClick1}"]`));
        await new Promise(resolve => setTimeout(resolve, 5000));
        // const elementWithText2 = await driver.findElement(By.xpath(`//div[contains(text(), '${textToClick2}')]`));
        await elementWithText1.click();
        await new Promise(resolve => setTimeout(resolve, 1400));
        // await elementWithText2.click();
        const ariaLabelToClick = 'New post'; // Replace with the actual aria-label text
        const svgWithAriaLabel = await driver.findElement(By.css(`svg[aria-label="${ariaLabelToClick}"]`));
        await new Promise(resolve => setTimeout(resolve, 400));
        // Type content into the input field
        await svgWithAriaLabel.click();
        await new Promise(resolve => setTimeout(resolve, 5000));
        // const buttonText = 'Select From Computer'; //Uncomment for MacOS
        const buttonText = 'Select from computer'; // Replace with the actual button text
        const buttonWithText = await driver.findElement(By.xpath(`//button[text()="${buttonText}"]`));
        // Wait for a specific condition (e.g., page title)
        await buttonWithText.click();
        await new Promise(resolve => setTimeout(resolve, 1200));
        const ariaLabelToClick2 = 'Icon to represent media such as images or videos'; // Replace with the actual aria-label text
        const dropArea = await driver.findElement(By.css(`svg[aria-label="${ariaLabelToClick2}"]`));
        await dropArea.click();
        await new Promise(resolve => setTimeout(resolve, 5000));
        const str=String.raw`C:\Users\vaibhav\Code\Instagram_Automate\Instagram_Automate\Images\1.png`;
        robot.typeString(imgPath); // Replace with your file path
        robot.keyTap('enter');
        await driver.sleep(2000);
        robot.keyTap('enter');
        await new Promise(resolve => setTimeout(resolve, 5000));
        const textToClick23 = 'Next';
        await new Promise(resolve => setTimeout(resolve, 3000));
        const elementWithText2 = await driver.findElement(By.xpath(`//div[contains(text(), '${textToClick23}')]`));
        // Click on the element
        await new Promise(resolve => setTimeout(resolve, 2000));
        // const elementWithText2 = await driver.findElement(By.xpath(`//div[contains(text(), '${textToClick2}')]`));
        await elementWithText2.click();
        await driver.sleep(2000);
        const elementWithText3 = await driver.findElement(By.xpath(`//div[contains(text(), '${textToClick23}')]`));
        await elementWithText3.click();
        await driver.sleep(2000);
        const pElement = await driver.findElement(By.tagName('p')); // Replace with your appropriate locator

        // Simulate typing in the input element
        const textToType = 'Test Image Caption';
        await pElement.sendKeys(textToType);
        await driver.sleep(2000);
        const textToClick24 = 'Share';
        const elementWithText4 = await driver.findElement(By.xpath(`//div[contains(text(), '${textToClick24}')]`));
        await elementWithText4.click();
        
    } finally {
        // Close the browser window
        await driver.quit();
      
    }
}

module.exports['f1']=f1
