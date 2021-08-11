package MyStoreTests.Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class LogInOrCreateNewAccountPage {

    private WebDriver driver;

    public LogInOrCreateNewAccountPage(WebDriver driver){

            this.driver = driver;

    }

    public AccountInfoPage signIn(String email, String password){

        WebElement emailField = driver.findElement(By.cssSelector("div.form-group:nth-child(2) > div:nth-child(2) > input:nth-child(1)"));
        emailField.sendKeys(email);
        WebElement passwordField = driver.findElement(By.cssSelector(".js-child-focus"));
        passwordField.sendKeys(password);
        WebElement signInButton = driver.findElement(By.id("submit-login"));
        signInButton.click();

        return new AccountInfoPage(driver);

    }

}
