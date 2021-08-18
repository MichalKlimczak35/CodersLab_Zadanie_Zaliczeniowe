package MyStoreTests.Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.Objects;

public class ProductPage {

    private final WebDriver driver;

    //----------------------------------------------------------------------------------------------------------------//
    //--------------------------------------------    Constructor    -------------------------------------------------//
    //----------------------------------------------------------------------------------------------------------------//

    public ProductPage(WebDriver driver) {

        this.driver = driver;

    }

    //----------------------------------------------------------------------------------------------------------------//
    //----------------------------------------------    Methods    ---------------------------------------------------//
    //----------------------------------------------------------------------------------------------------------------//

    public String checkPromotion() {

        return driver.findElement(By.cssSelector("span.discount")).getText();
    }

    //----------------------------------------------------------------------------------------------------------------//

    public void selectSize(String size) {

        WebElement sizeList = driver.findElement(By.id("group_1"));
        if (Objects.equals(size, "S")) {
            sizeList.findElement(By.cssSelector("#group_1 > option:nth-child(1)")).click();
        } else if (Objects.equals(size, "M")) {
            sizeList.findElement(By.cssSelector("#group_1 > option:nth-child(2)")).click();
        } else if (Objects.equals(size, "L")) {
            sizeList.findElement(By.cssSelector("#group_1 > option:nth-child(3)")).click();
        } else if (Objects.equals(size, "XL")) {
            sizeList.findElement(By.cssSelector("#group_1 > option:nth-child(4)")).click();
        } else {
            System.out.println("Nie ma takiego rozmiaru lub źle wprowadzono rozmiar. Prawidłowe rozmiary(duże litery) to S,M,L,XL");
        }
    }
    //----------------------------------------------------------------------------------------------------------------//

    public void selectAmount(String amount) {

        WebElement amountField = driver.findElement(By.id("quantity_wanted"));
        amountField.clear();
        amountField.sendKeys(amount);

    }

    //----------------------------------------------------------------------------------------------------------------//

    public CheckOutPage addProductToCartAndGoToCheckOut() {

        WebElement addToCartButton = driver.findElement(By.cssSelector("button.btn-primary"));
        addToCartButton.click();
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.cssSelector("a.btn"))));
        WebElement  goToCart = driver.findElement(By.cssSelector("a.btn"));
        goToCart.click();
        WebElement goToCheckOutButton = driver.findElement(By.cssSelector("a.btn"));
        goToCheckOutButton.click();

        return new CheckOutPage(driver);
    }
}
