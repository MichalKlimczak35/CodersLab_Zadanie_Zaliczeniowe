package MyStoreTests;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features/AddAndDeleteAddress.feature", plugin = {"pretty", "html:out"})

public class AddAndDeleteAddressTest {

}
