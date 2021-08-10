package AddAndDeleteAddress.Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class MainSite {

    private WebDriver driver;

    public MainSite(WebDriver driver) {
        this.driver = driver;
    }

    public LogInOrCreateNewAccountPage goToSignInSite() {

        WebElement signInButton = driver.findElement(By.cssSelector(".user-info > a:nth-child(1) > span:nth-child(2)"));
        signInButton.click();
        return new LogInOrCreateNewAccountPage(driver);
    }


}
