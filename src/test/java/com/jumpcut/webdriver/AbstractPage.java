package com.jumpcut.webdriver;



import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

public abstract class AbstractPage {
    
    protected final RemoteWebDriver driver;
    protected final WebDriverWait wait;
    
    
    public AbstractPage(RemoteWebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
        wait = new WebDriverWait(driver, 20);
    }
    
    /**
     * @param aElement: webdriver element
     * @param aValue: value to be set
     * Method to send value to field
     * 
     */

    public void sendKeys(WebElement aElement, String aValue) throws InterruptedException {
    	aElement.clear();
    	aElement.sendKeys(aValue);
    }

    /**
     
     * Method to take screenshot to be used in the cucumber report
     * 
     */
    protected void takeScreenShot(){
        driver.getScreenshotAs(OutputType.BASE64);
    }
    
}