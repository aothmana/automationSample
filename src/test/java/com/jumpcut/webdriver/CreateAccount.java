package com.jumpcut.webdriver;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.FindBy;

public class CreateAccount extends AbstractPage {

    
    @FindBy(id = "signUp_name")
    private WebElement iFullName;
    @FindBy(id = "signUp_email")
    private WebElement iEmail;
    @FindBy(id = "signUp_username")
    private WebElement iUserName;
    @FindBy(id = "signUp_password")
    private WebElement iPassword;
    @FindBy(id = "btn_submit_signUp")
    private WebElement iSignUpButton;
    @FindBy(id = "sucess_message")
    private WebElement iSuccessMessage;
    @FindBy(id = "login_link")
    private WebElement iLoginLink;

    @FindBy(id = "signup_name_err")
    private WebElement iFullNameError;
    @FindBy(id = "signup_username_err")
    private WebElement iUserNameError;
    @FindBy(id = "signup_email_err")
    private WebElement iEmailError;
    @FindBy(id = "signup_pwd_err")
    private WebElement iPasswordError;
    @FindBy(id = "signup_err_msg")
    private WebElement iSignUpError;

    
   

    
    /**
     * @param driver
     */
    public CreateAccount(RemoteWebDriver driver) {
        super(driver);
        // TODO Auto-generated constructor stub
    }
    
   
    /**
     * @param aFirstName: Full Name
     * Set full name.
     * @throws InterruptedException 
     */
    public void setFullName(String aFullName) throws InterruptedException {

        sendKeys(iFullName,aFullName);
    }
    
    /**
     * @param aEmail: Email address
     * Set email address.
     * @throws InterruptedException 
     */
    public void setEmail(String aEmail) throws InterruptedException {
        sendKeys(iEmail,aEmail);

    }
    

    /**
     * @param aUserName: username
     * Set username.
     * @throws InterruptedException 
     */
    public void setUserName(String aUserName) throws InterruptedException {

        sendKeys(iUserName,aUserName);
    }
    
    
    /**
     * @param aPassword: password
     * Set password.
     * @throws InterruptedException 
     */
    public void setPassword(String aPassword) throws InterruptedException {
        sendKeys(iPassword,aPassword);
    }
    
    /**
     *
     * click submit for signup.
     */
    public void submit() {
       
        iSignUpButton.click();
    }
    
    /**
     *
     * Get the error if email is empty
     */
    public String getSuccessMessage() {
        
        return iSuccessMessage.getText();
    }
    
    /**
    *
    * Click Login Link
    */
   public String clickLoginLink() {
       
       return iLoginLink.getText();
   }
   

   /**
    *
    * Get the error if email is empty
    */
   public String getEmailError() {
       
       return iEmailError.getText();
   }
   
   /**
    *
    * Get the error if full name 
    */
   public String getFullNameError() {
      
       return iFullNameError.getText();
   }
   /**
    *
    * Get the error if last name 
    */
   public String getUserNameError() {
       
       return iUserNameError.getText();
   }
   /**
    *
    * Get the error if password 
    */
   public String getPasswordError() {
       
       return iPasswordError.getText();
   }

   /**
    *
    * Get general SignUp Error
    */
   public String getSignUpError() {
      
       return iSignUpError.getText();
   }

   
    
  
}
