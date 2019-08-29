package com.jumpcut.webdriver;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class LoginPage extends AbstractPage {
    //Login Form

    @FindBy(id = "login_username")
    private WebElement iUserName;
    @FindBy(id = "login_password")
    private WebElement iPassword;
    @FindBy(id = "btn_login_submit")
    private WebElement iLoginButton;
   

    

    /**
     * @param driver
     */
    public LoginPage(RemoteWebDriver driver) {
        super(driver);
        // TODO Auto-generated constructor stub
    }



    /**
     * @param aEmail: Email address
     * Set email address for login page and the forgot password popup
     * @throws InterruptedException 
     */
    public void setUserName(String aUserName) throws InterruptedException {
        sendKeys(iUserName,aUserName);
        
    }

    /**
     * @param aPassword: password
     * Set password
     * @throws InterruptedException 
     */
    public void setPassword(String aPassword) throws InterruptedException {
        sendKeys(iPassword,aPassword);

        
    }

    /**
     *
     * click Login
     */
    public void clickLogin() {
             iLoginButton.click();
    }
    
    
}
