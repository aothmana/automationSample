package com.jumpcut.stepdefn;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import java.text.ParseException;

import java.util.Iterator;
import java.util.Map;
import java.util.Random;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.jumpcut.webdriver.CreateAccount;


import com.jumpcut.webdriver.LoginPage;


import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;


public class Hooks {

 

    
    public static RemoteWebDriver driver;
    
    public static LoginPage iLoginPage;
    public static CreateAccount iCreateAccount;
   
    public static int iRandomValue;
    
    

    private static JSONObject config;

    
    @Before
    public void setUp(Scenario scenario) throws ParseException, FileNotFoundException, IOException, org.json.simple.parser.ParseException{

        Random rand = new Random();

        //Random value to set email and username to allow for testcase to run multiple times
        iRandomValue = rand.nextInt(50) + 1;
        
       
        DesiredCapabilities capabilities = new DesiredCapabilities();
        JSONParser parser = new JSONParser();
        config = (JSONObject) parser.parse(new FileReader("src/test/resources/confg/" + System.getProperty("config")+".conf.json"));
  
        //Setup all capabilities
       
		


        Map<String, String> commonCapabilities = (Map<String, String>) config.get("capabilities");
        Iterator it = commonCapabilities.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry pair = (Map.Entry)it.next();
            if(capabilities.getCapability(pair.getKey().toString()) == null){
                capabilities.setCapability(pair.getKey().toString(), pair.getValue().toString());
            }

        }
        capabilities.setCapability("name",scenario.getId());
        if(config.get("browser").equals("chrome")) {
    		System.setProperty("webdriver.chrome.driver",".\\chromedriver.exe");
    		driver = new ChromeDriver();
            
            }
        
        driver.get((String) config.get("baseURL"));
        driver.manage().window().maximize();
        
        
        iLoginPage = new LoginPage(driver);
        iCreateAccount = new CreateAccount(driver);
        

        
    }
    


    @After
    public void killBrowser(Scenario scenario){
        if (scenario.isFailed()) {

            final byte[] screenshot = ((TakesScreenshot) driver)
                    .getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png"); //stick it in the report
        }
        driver.quit();
        
       
        

    }
   
}
