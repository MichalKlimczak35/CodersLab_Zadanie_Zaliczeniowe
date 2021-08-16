package MyStoreTests.Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class AccountInfoPage {

    private final WebDriver driver;

    public AccountInfoPage(WebDriver driver) {

        this.driver = driver;

    }

    public AddNewAddressPage goToAddNewAddressPage() {

        WebElement addAddressButton = driver.findElement(By.id("address-link"));
        addAddressButton.click();
        return new AddNewAddressPage(driver);

    }

    public MainSite returnToMainSite() {

        WebElement siteLogo = driver.findElement(By.id("_desktop_logo"));
        siteLogo.click();

        return new MainSite(driver);
    }


}
