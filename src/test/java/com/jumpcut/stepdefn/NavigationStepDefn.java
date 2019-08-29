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




public class NavigationStepDefn  {
    
    
    
    
	@Given("^user navigates to enrollment page$")
	public void userNavigatesToEnrollmentPage() throws Throwable {
	    Hooks.driver.get("https://jumpcut.com/enrollement");
	}
    
   
    

}
