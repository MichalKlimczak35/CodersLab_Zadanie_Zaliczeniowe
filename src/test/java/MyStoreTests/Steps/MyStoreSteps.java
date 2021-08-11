package MyStoreTests.Steps;

import MyStoreTests.Pages.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

public class MyStoreSteps {

    private WebDriver driver;
    private MainSite mainSite;
    private LogInOrCreateNewAccountPage loginSite;
    private AccountInfoPage accountInfoPage;
    private AddNewAddressPage addNewAddressPage;
    private AddressListPage addressListPage;
    private ProductPage productPage;
    private CheckOutPage checkOutPage;

    @Given("User is on Main site")
    public void goToMainPage() {

        System.setProperty("webdriver.gecko.driver",
                "D:\\Programy\\GITHUB\\CodersLab_Zadanie_Zaliczeniowe\\src\\test\\resources\\drivers\\geckodriver.exe");
        driver = new FirefoxDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get("https://prod-kurs.coderslab.pl/index.php");

    }

    @When("User goes to sign in site")
    public void goToLogInSite() {

        mainSite = new MainSite(driver);
        loginSite = mainSite.goToSignInSite();

    }

    @And("User logs in using email and password. (.*) , (.*)")
    public void logInAndGoToAddNewAddressSite(String email, String password) {

        accountInfoPage = loginSite.signIn(email, password);
        addNewAddressPage = accountInfoPage.goToAddNewAddressPage();
    }

    @And("User fill the new address form with the following information: (.*) , (.*) , (.*) , (.*) , (.*) , (.*) , (.*)")
    public void addNewAddress(String allias, String company, String address, String zipcode, String city, String phone, String country) {

        addressListPage = addNewAddressPage.addNewAddress(allias, company, address, zipcode, city, phone, country);

    }

    @Then("User will verify if the address he provided is correct. (.*) , (.*) , (.*) , (.*) , (.*) , (.*) , (.*)")
    public void compareAddresses(String allias, String company, String address, String zipcode, String city, String phone, String country) {

        String expectedResult = allias + "\n" + "Michał Klimczak" + "\n" + company + "\n" + address + "\n" + zipcode + "\n" + city + "\n" + country + "\n" + phone;
        Assert.assertEquals(expectedResult, addressListPage.getAddress());

    }

    @And("User can delete the address")
    public void deleteAddress() {

        addressListPage.deleteAddress();

    }

    @And("User can verify address deletion")
    public void verifydeletion() {

        Assert.assertEquals("Address successfully deleted!", addressListPage.verifyAddressDeletion());

    }

    @And("User logs in onto his account using email and password. (.*) , (.*)")
    public void logIn(String email, String password) {

        accountInfoPage = loginSite.signIn(email, password);
        mainSite = accountInfoPage.returnToMainSite();

    }

    @And("User can select Hummingbird printed sweater")
    public void searchForProduct() {

        productPage = mainSite.selectHummingBirdPrintedSweater();

    }

    @And("User can see if the product has an discount")
    public void checkPromotion() {

        Assert.assertEquals("SAVE 20%", productPage.checkPromotion());
    }

    @And("User can select desired size of the product (.*)")
    public void selectSize(String size) {

        productPage.selectSize(size);

    }

    @And("User can select (.*) of products to order")
    public void selectAmount(String amount) {

        productPage.selectAmount(amount);

    }

    @And("User can proceed to checkout")
    public void addToCartAndProceedToCheckOut() {

        checkOutPage = productPage.addProductToCartAndGoToCheckOut();
    }

    @And("User can place an order filling necessary information. (.*), (.*) , (.*) , (.*)")
    public void fillCheckOutForm(String address ,String zipCode , String city , String country){

        checkOutPage.fillCheckOutForm(address, zipCode, city, country);

    }

    @Then("User makes a screenshot of their order")
    public void makeScreenshot() throws IOException {
        checkOutPage.makeAScreenshotOfTheOrder();
    }


}
