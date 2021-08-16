package MyStoreTests.Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class AddNewAddressPage {

    private final WebDriver driver;

    public AddNewAddressPage(WebDriver driver) {

        this.driver = driver;

    }

    public AddressListPage addNewAddress(String allias, String company, String address, String zipcode, String city, String phone, String country) {

        WebElement aliasField = driver.findElement(By.cssSelector("div.form-group:nth-child(5) > div:nth-child(2) > input:nth-child(1)"));
        WebElement companyField = driver.findElement(By.cssSelector("div.form-group:nth-child(8) > div:nth-child(2) > input:nth-child(1)"));
        WebElement addressField = driver.findElement(By.cssSelector("div.form-group:nth-child(10) > div:nth-child(2) > input:nth-child(1)"));
        WebElement zipcodeField = driver.findElement(By.cssSelector("div.form-group:nth-child(13) > div:nth-child(2) > input:nth-child(1)"));
        WebElement cityField = driver.findElement(By.cssSelector("div.form-group:nth-child(12) > div:nth-child(2) > input:nth-child(1)"));
        WebElement phoneField = driver.findElement(By.cssSelector("div.form-group:nth-child(15) > div:nth-child(2) > input:nth-child(1)"));
        WebElement countryList = driver.findElement(By.cssSelector(("select.form-control")));
        WebElement saveButton = driver.findElement(By.cssSelector("button.btn"));

        aliasField.sendKeys(allias);
        companyField.sendKeys(company);
        addressField.sendKeys(address);
        zipcodeField.sendKeys(zipcode);
        cityField.sendKeys(city);
        phoneField.sendKeys(phone);
        countryList.sendKeys(country);
        saveButton.click();

        return new AddressListPage(driver);

    }


}
