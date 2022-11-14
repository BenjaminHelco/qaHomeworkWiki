import { Builder, By, Capabilities, WebDriver} from "selenium-webdriver"

const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome())
.build();

describe("practicing with xpath selectors", () => {
beforeEach(async() => {
    await driver.get("https://www.amazon.com");
});
afterAll(async() =>)
})