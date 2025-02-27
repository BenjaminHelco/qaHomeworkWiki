import {By, WebDriver, until} from "selenium-webdriver"

export class employeePage {
    driver: WebDriver;
    url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
      //FILL OUT LOCATORS CONSTRUCTOR AND METHODS IN ORDER TO PASS THE TEST
  header: By = By.css('.titleText')
  addEmployee: By = By.name('addEmployee')
  newEmployee: By = By.xpath('//li[text()= "New Employee"]')
  nameInput: By = By.css('[name= "nameEntry"]')
  phoneInput: By = By.name('phoneEntry')
  titleInput: By = By.name('titleEntry')
  saveBtn: By = By.xpath('//button[@id="saveBtn"]')
  constructor(driver: WebDriver) {
      this.driver = driver   
  }
  async navigate() {
      await this.driver.get(this.url)
      await this.driver.wait(until.elementLocated(this.header))
  }
  async click(elementBy: By) {
      await this.driver.wait(until.elementLocated(elementBy))
      return (await this.driver.findElement(elementBy)).click()
  }
  async sendKeys(elementBy: By, keys) {
      await this.driver.wait(until.elementLocated(elementBy))
      return this.driver.findElement(elementBy).sendKeys(keys)
  }

}