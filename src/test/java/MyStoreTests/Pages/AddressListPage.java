package MyStoreTests.Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class AddressListPage {

    private final WebDriver driver;

    public AddressListPage(WebDriver driver) {

        this.driver = driver;

    }

    public String getAddress() {
        String address;

        address = driver.findElement(By.cssSelector(".address-body")).getText();

        return address;
    }

    public void deleteAddress() {

        WebElement deleteButton = driver.findElement(By.cssSelector(".address-footer > a:nth-child(2) > span:nth-child(2)"));
        deleteButton.click();

    }

    public String verifyAddressDeletion() {

        String Message;

        Message = driver.findElement(By.cssSelector(".alert")).getText();

        return Message;
    }


}
