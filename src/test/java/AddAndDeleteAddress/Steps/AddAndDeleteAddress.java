package AddAndDeleteAddress.Steps;

import AddAndDeleteAddress.Pages.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;

public class AddAndDeleteAddress {

    private WebDriver driver;
    private LogInOrCreateNewAccountPage loginSite;
    private AccountInfoPage accountInfoPage;
    private AddNewAddressPage addNewAddressPage;
    private AddressListPage addressListPage;

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

        MainSite mainSite = new MainSite(driver);
        loginSite = mainSite.goToSignInSite();

    }

    @And("User logs in using email and password. (.*) , (.*)")
    public void logIn(String email, String password) {

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


}
