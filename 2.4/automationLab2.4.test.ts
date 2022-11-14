/*When I first attempted this, I understood what each of the lines meant roughly
but had to look hard at each line to deduce and infer functionalities.
Now, I understand that this is where we import the builder and web driver from Selenium.
This will allow us to run our automated test of Employee Manager.*/
import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
    Key,
} from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();
const bernice: By = By.name("employee1");
const marnie: By = By.name("employee2");
const phillip: By = By.name("employee3");
const nameDisplay: By = By.id("employeeTitle");
const nameInput: By = By.name("nameEntry");
const titleInput: By = By.name("titleEntry");
const saveButton: By = By.id("saveBtn");
const cancelButton: By = By.name("cancel");
const errorCard: By = By.css(".errorCard");
/* Here, we have set and defined the variables to be used in the experiment*/
describe("Employee Manager 1.2", () => {

    beforeEach(async () => {
        await driver.get(
        "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html"
        );
    });
    afterAll(async () => {
        await driver.quit();
    });
    describe("handles unsaved, canceled, and saved changes correctly", () => {
        test("An unsaved change doesn't persist", async () => {
        /*
        This test follows these steps:
        1. Open Bernice Ortiz
        2. Edit the name input
        3. Open Phillip Weaver
        4. Open Bernice Ortiz
        5. Verify the name field is the original name
        */
        await driver.findElement(bernice).click();
        await driver.wait(
            until.elementIsVisible(await driver.findElement(nameInput))
        );
        await driver.findElement(nameInput).clear();
        await driver.findElement(nameInput).sendKeys("Test Name");
        await driver.findElement(phillip).click();
       
        await driver.findElement(bernice).click();
       
        expect(
            await (await driver.findElement(bernice)))
        });

        test("A canceled change doesn't persist", async () => {
            /*
            This test follows these steps:
            1. Open Phillip Weaver
            2. Edit the name input
            3. Click cancel
            5. Verify the name field is the original name
            */
            await driver.findElement(phillip).click();
            await driver.wait(
                until.elementIsVisible(await driver.findElement(nameInput))
            );
            await driver.findElement(nameInput).clear();
            await driver.findElement(nameInput).sendKeys("Test Name");
            await driver.findElement(cancelButton).click();
            expect(
                await (await driver.findElement(nameInput)))
        });

        test("A saved change persists", async () => {
            /*
            This test follows these steps:
            1. Open Bernice Ortiz
            2. Edit the name input
            3. Save the change
            4. Open Phillip Weaver
            5. Open Bernice Ortiz's old record
            5. Verify the name field is the edited name
            */
            await driver.findElement(bernice).click();
            await driver.wait(
                until.elementIsVisible(await driver.findElement(nameInput))
            );
            await driver.findElement(nameInput).clear();
            await driver.findElement(nameInput).sendKeys("Test Name");
            await driver.findElement(saveButton).click();
            await driver.findElement(phillip).click();
           
            await driver.findElement(bernice).click();
            expect(
                await (await driver.findElement(bernice)))
    });
});

    describe("handles error messages correctly", () => {
        test("shows an error message for an empty name field", async () => {
            /*
            This test follows these steps:
            1. Open Bernice Ortiz
            2. Clear the name input
            3. Save the change
            4. Verify the error is present
            */
            await driver.findElement(bernice).click();
            await driver.wait(
                until.elementIsVisible(await driver.findElement(nameInput))
            );
            await driver.findElement(nameInput).clear();
            await driver.findElement(nameInput).sendKeys(Key.SPACE, Key.BACK_SPACE);
            await driver.findElement(saveButton).click();
            await driver.wait(until.elementLocated(errorCard));
            expect(await (await driver.findElement(errorCard)).getText()).toBe(
                "The name field must be between 1 and 30 characters long."
            );
        });
        test("lets you cancel out of an error message", async () => {
            /*
            This test follows these steps:
            1. Open Bernice Ortiz
            2. Clear the name input
            3. Save the change
            4. Verify the error is present
            5. Cancel the change
            6. Verify the error is gone
            */
            await driver.findElement(bernice).click();
            await driver.wait(
                until.elementIsVisible(await driver.findElement(nameInput))
            );
            await driver.findElement(nameInput).clear();
            await driver.findElement(nameInput).sendKeys(Key.SPACE, Key.BACK_SPACE);
            await driver.findElement(saveButton).click();
            await driver.wait(until.elementLocated(errorCard));
            expect(await (await driver.findElement(errorCard)).getText()).toBe(
                "The name field must be between 1 and 30 characters long."
            );
            await driver.findElement(nameInput).sendKeys(Key.SPACE);
            await driver.findElement(cancelButton).click();
            driver.wait(() => true, 500);
            expect(await driver.findElements(errorCard)).toHaveLength(0);
        });
    });
});
/* When doing this assignment, I understood the necessities of how to use this and make it work, but not all of the little ins and outs.
Studying W3 schools Javascript/Typescript tutorials has made everything make far more sense.
It would seem that studying is ones best friend when learning to code or test.*/