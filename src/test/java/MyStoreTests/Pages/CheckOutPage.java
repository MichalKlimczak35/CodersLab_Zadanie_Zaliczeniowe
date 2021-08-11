package MyStoreTests.Pages;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.io.IOException;

public class CheckOutPage {


    private WebDriver driver;

    public CheckOutPage(WebDriver driver) {

        this.driver = driver;

    }

    public void fillCheckOutForm(String address, String zipCode, String city, String country) {

        WebElement addressField = driver.findElement(By.cssSelector("div.form-group:nth-child(9) > div:nth-child(2) > input:nth-child(1)"));
        WebElement zipcodeField = driver.findElement(By.cssSelector("div.form-group:nth-child(11) > div:nth-child(2) > input:nth-child(1)"));
        WebElement cityField = driver.findElement(By.cssSelector("div.form-group:nth-child(12) > div:nth-child(2) > input:nth-child(1)"));
        WebElement countryList = driver.findElement(By.cssSelector(("select.form-control")));
        WebElement continueButton1 = driver.findElement(By.cssSelector(".continue"));

        addressField.sendKeys(address);
        zipcodeField.sendKeys(zipCode);
        cityField.sendKeys(city);
        countryList.sendKeys(country);
        continueButton1.click();

        WebDriverWait wait = new WebDriverWait(driver, 5);
        WebElement shippingRadial = driver.findElement(By.cssSelector("div.delivery-option:nth-child(1) > div:nth-child(1) > span:nth-child(1) > span:nth-child(2)"));
        shippingRadial.click();
        WebElement continueButton2 = driver.findElement(By.cssSelector("button.continue:nth-child(2)"));
        continueButton2.click();

        WebElement paymentMethodRadial = driver.findElement(By.cssSelector("#payment-option-1"));
        paymentMethodRadial.click();
        driver.findElement(By.id("conditions_to_approve[terms-and-conditions]")).click();

        WebElement placeOrderButton = driver.findElement(By.cssSelector("div.ps-shown-by-js > button:nth-child(1)"));
        placeOrderButton.click();
    }

    public void makeAScreenshotOfTheOrder() throws IOException {

        File file = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(file, new File("./out/screenshot.png"));

    }


}
