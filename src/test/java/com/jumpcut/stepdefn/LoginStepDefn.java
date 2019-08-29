package com.jumpcut.stepdefn;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;





public class LoginStepDefn  {


    /**
     *  Password for account
     */
    private static final String PASSWORD = "PASSWORD";
    /**
     *  Email prefix to create account
     */
    private static final String USERNAME = "USERNAME";
    private  String iRandomUser;
   


    @And("^user login$")

    public final void login(List<Map<String, String>> aDataTable) throws InterruptedException{
        
        Map<String, String> lRow = aDataTable.get(0);
        DateFormat dateformat = new SimpleDateFormat("MMddyyyy");
        Date date = new Date();
        iRandomUser = lRow.get(USERNAME) +Hooks.iRandomValue+ dateformat.format(date) ;
        
        Hooks.iCreateAccount.clickLoginLink();
        Hooks.iLoginPage.setUserName(iRandomUser);
        Hooks.iLoginPage.setPassword(lRow.get(PASSWORD));
        Hooks.iLoginPage.clickLogin();
        Thread.sleep(1000);

    }
    
    @Then("^user logout$")
    public void userLogout() throws Throwable {
        //TODO: Add logout process
    }
    
    


    
    
}
