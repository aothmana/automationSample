$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateAccountLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Test Account Creation and Login",
  "description": "",
  "id": "test-account-creation-and-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 10179584083,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Scenario-1 User create a new account on enrollment Page",
  "description": "",
  "id": "test-account-creation-and-login;scenario-1-user-create-a-new-account-on-enrollment-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user navigates to enrollment page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user creates a new account from enrollment page",
  "rows": [
    {
      "cells": [
        "FULLNAME",
        "USERNAME",
        "EMAIL_PREFIX",
        "PASSWORD"
      ],
      "line": 7
    },
    {
      "cells": [
        "Jane Doe",
        "jDoe",
        "alyaothman+a1",
        "password1"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is presented with success message",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user logout",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user login",
  "rows": [
    {
      "cells": [
        "USERNAME",
        "PASSWORD"
      ],
      "line": 12
    },
    {
      "cells": [
        "jDoe",
        "password1"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user is presented with success message",
  "keyword": "Then "
});
formatter.match({
  "location": "NavigationStepDefn.userNavigatesToEnrollmentPage()"
});
formatter.result({
  "duration": 3142395428,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefn.createNewAccountFromMainPage(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 72629367,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"signUp_name\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-C5BA00CK\u0027, ip: \u0027192.168.43.199\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.45.615291 (ec3682e3c9061c..., userDataDir: C:\\Users\\16137\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:64187}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 546c14d409562bd19516486c39f38e27\n*** Element info: {Using\u003did, value\u003dsignUp_name}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.clear(Unknown Source)\r\n\tat com.jumpcut.webdriver.AbstractPage.sendKeys(AbstractPage.java:31)\r\n\tat com.jumpcut.webdriver.CreateAccount.setFullName(CreateAccount.java:56)\r\n\tat com.jumpcut.stepdefn.SignupStepDefn.createNewAccount(SignupStepDefn.java:85)\r\n\tat com.jumpcut.stepdefn.SignupStepDefn.createNewAccountFromMainPage(SignupStepDefn.java:48)\r\n\tat ✽.And user creates a new account from enrollment page(CreateAccountLogin.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefn.userIsPresentedWithSuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefn.userLogout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefn.login(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignupStepDefn.userIsPresentedWithSuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1877178842,
  "status": "passed"
});
formatter.before({
  "duration": 9041203961,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Scenario-2 User gets errors on create account form if left empty or if invalid data",
  "description": "",
  "id": "test-account-creation-and-login;scenario-2-user-gets-errors-on-create-account-form-if-left-empty-or-if-invalid-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "user navigates to enrollment page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user submit form empty on Account",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "errors are presented to the user",
  "rows": [
    {
      "cells": [
        "Error",
        "Location"
      ],
      "line": 20
    },
    {
      "cells": [
        "Please enter full name.",
        "Name"
      ],
      "line": 21
    },
    {
      "cells": [
        "Please enter username.",
        "UserName"
      ],
      "line": 22
    },
    {
      "cells": [
        "Please enter email.",
        "Email"
      ],
      "line": 23
    },
    {
      "cells": [
        "Please enter password.",
        "Password"
      ],
      "line": 24
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user submit a form with invalid data",
  "rows": [
    {
      "cells": [
        "FULLNAME",
        "USERNAME",
        "EMAIL_PREFIX",
        "PASSWORD"
      ],
      "line": 26
    },
    {
      "cells": [
        "Jane14",
        "jDoe@1",
        "alyaothman~",
        "12345"
      ],
      "line": 27
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "errors are presented to the user",
  "rows": [
    {
      "cells": [
        "Error",
        "Location"
      ],
      "line": 29
    },
    {
      "cells": [
        "Name should not contain any numeric values.",
        "Name"
      ],
      "line": 30
    },
    {
      "cells": [
        "Please make sure that the username does not contain any special characters.",
        "UserName"
      ],
      "line": 31
    },
    {
      "cells": [
        "Email format is invalid.",
        "Email"
      ],
      "line": 32
    },
    {
      "cells": [
        "Please make sure that the password has at least 6 characters.",
        "Password"
      ],
      "line": 33
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "NavigationStepDefn.userNavigatesToEnrollmentPage()"
});
formatter.result({
  "duration": 2674239849,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefn.submitEmptyFormAccount()"
});
formatter.result({
  "duration": 40261120,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"btn_submit_signUp\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-C5BA00CK\u0027, ip: \u0027192.168.43.199\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.45.615291 (ec3682e3c9061c..., userDataDir: C:\\Users\\16137\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:64287}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: bda664bd961f01cf1f4d49f7331910f0\n*** Element info: {Using\u003did, value\u003dbtn_submit_signUp}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.jumpcut.webdriver.CreateAccount.submit(CreateAccount.java:96)\r\n\tat com.jumpcut.stepdefn.SignupStepDefn.submitEmptyFormAccount(SignupStepDefn.java:55)\r\n\tat ✽.And user submit form empty on Account(CreateAccountLogin.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ErrorsStepDefn.errorsOnAccountPage(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignupStepDefn.userSubmitAFormWithInvalidData(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ErrorsStepDefn.errorsOnAccountPage(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1891927138,
  "status": "passed"
});
});