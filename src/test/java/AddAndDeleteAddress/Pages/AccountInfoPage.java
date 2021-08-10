package AddAndDeleteAddress.Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class AccountInfoPage {

    private WebDriver driver;

    public AccountInfoPage(WebDriver driver) {

        this.driver = driver;

    }

    public AddNewAddressPage goToAddNewAddressPage() {

        WebElement addAddressButton = driver.findElement(By.id("address-link"));
        addAddressButton.click();
        return new AddNewAddressPage(driver);

    }


}
