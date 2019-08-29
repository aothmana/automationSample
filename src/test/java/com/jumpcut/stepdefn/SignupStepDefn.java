package com.jumpcut.stepdefn;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;
import org.junit.Assert;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;




public class SignupStepDefn  {
    
    
    /**
     *  Password for account
     */
    private static final String PASSWORD = "PASSWORD";
    /**
     *  User Last name
     */
    private static final String FULLNAME = "FULLNAME";
    /**
     *  User first name
     */
    private static final String USERNAME = "USERNAME";
    /**
     *  Email prefix to create account
     */
    private static final String EMAIL_PREFIX = "EMAIL_PREFIX";
    private static final String EMAIL_DOMAIN = "@gmail.com";
    private  String iRandomEmail;
    private  String iRandomUser;
    
    @And("^user creates a new account from enrollment page$")
    public final void createNewAccountFromMainPage(List<Map<String, String>> aDataTable) throws InterruptedException {
        
        Map<String, String> lRow = aDataTable.get(0);
        DateFormat dateformat = new SimpleDateFormat("MMddyyyy");
        Date date = new Date();
        iRandomEmail = lRow.get(EMAIL_PREFIX) +Hooks.iRandomValue+ dateformat.format(date) + EMAIL_DOMAIN;
        iRandomUser = lRow.get(USERNAME) +Hooks.iRandomValue+ dateformat.format(date) ;

        createNewAccount(lRow);
        

    }
    
    @And("^user submit form empty on Account$")
    public final void submitEmptyFormAccount() throws InterruptedException {
    	Hooks.iCreateAccount.submit();
       
        

    }
    
    @Then("^user submit a form with invalid data$")
    public void userSubmitAFormWithInvalidData(List<Map<String, String>> aDataTable) throws InterruptedException {
    	Map<String, String> lRow = aDataTable.get(0); 
    	iRandomEmail = lRow.get(EMAIL_PREFIX) ;	
        iRandomUser = lRow.get(USERNAME);
     	createNewAccount(lRow);
       
        

    }
    
    @Then("^user is presented with success message$")
    public void userIsPresentedWithSuccessMessage() throws Throwable {
        Assert.assertTrue(Hooks.iCreateAccount.getSuccessMessage().contains("Congratulations"));

    }
    

    
   

    
    private void createNewAccount(Map<String, String> lRow) throws InterruptedException {
        
        Hooks.iCreateAccount.setFullName(lRow.get(FULLNAME));
        Hooks.iCreateAccount.setUserName(lRow.get(USERNAME));
        Hooks.iCreateAccount.setEmail(iRandomEmail);
        Hooks.iCreateAccount.setPassword(lRow.get(PASSWORD));
        Hooks.iCreateAccount.submit();

    }
    
    

}
