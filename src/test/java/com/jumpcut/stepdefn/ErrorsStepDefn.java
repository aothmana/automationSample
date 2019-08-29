package com.jumpcut.stepdefn;

import java.util.List;
import java.util.Map;
import org.junit.Assert;
import cucumber.api.java.en.Then;




public class ErrorsStepDefn  {
    
    
    // This step defination handles any errors presented by forms for Account creation,
    //login, edit profile and it is based on Location keyword defined in the feature file
    @Then("^errors are presented to the user$")
    
    public final void errorsOnAccountPage(List<Map<String, String>> aDataTable) throws InterruptedException{

        
        for(Map<String, String> lRow: aDataTable) {
            if(lRow.get("Location").equalsIgnoreCase("Name")) {
                Assert.assertTrue(Hooks.iCreateAccount.getFullNameError().equals(lRow.get("Error")));

            }
            if(lRow.get("Location").equalsIgnoreCase("UserName")) {
                Assert.assertTrue(Hooks.iCreateAccount.getUserNameError().equals(lRow.get("Error")));

            }
            if(lRow.get("Location").equalsIgnoreCase("Email")) {
                Assert.assertTrue(Hooks.iCreateAccount.getEmailError().equals(lRow.get("Error")));

            }
            if(lRow.get("Location").equalsIgnoreCase("Password")) {
                Assert.assertTrue(Hooks.iCreateAccount.getPasswordError().equals(lRow.get("Error")));

            }
            if(lRow.get("Location").equalsIgnoreCase("SignUp")) {
                Assert.assertTrue(Hooks.iCreateAccount.getSignUpError().equals(lRow.get("Error")));

            }
           
            
            
        }
    }
    
    

}
