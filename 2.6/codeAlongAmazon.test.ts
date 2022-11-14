import { Builder } from "selenium-webdriver"

import { Builder, By, Capabilities, WebDriver} from "selenium-webdriver"

const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome())
.build();


describe("practicing CSS selectors", () => {
    beforeEach(async () => {
        await driver.get("https://amazon.com");
    });
    afterAll(async () => {
        await driver.get("https://www.amazon.com/");
    });
    const searchBar: By = By.id(`twotabsearchtestbox`);
    const results: By = By.css(`s-main-slot`);

    test("searching for an item on amazon")
})