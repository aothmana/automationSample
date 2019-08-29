# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
This is a sample automation framework for JumpCut Project
Framework used: Cucumber, Junit
Build: Maven
Report: Cucumber Report //build/cucumber-reports
Note: This is work in progress, to see the progress please visit: <Insert the ticket number>
* Version


### How do I get set up? ###

* Summary of set up
To run testcases locally from terminal
Install Maven and JRE and set Home variables for JAVA, M2
mvn install -Dconfig="local"
From Eclipse, right click on RunAnnotatedCucmberTests, select RunAs add to Arguments VM variable -Dconfig=local

### Improvement ###
1. Setup to run on browserstack or sauce lab to allow for more browser
2. Add Selenium grid to be able to run locally on multiple browser

### Reports ###
Test reports are located at jumpcut_e2e\build\reports\cucumber\runAnnotatedCucumberTest
https://help.testobject.com/docs/guides/creating-ipa/
* Configuration
* Dependencies
* Database configuration
* How to run tests
Annonate the feature file you would like to run with @RunThis or if you want to run all of them annonate all the feature files with @Regression
* Deployment instructions

### Contribution guidelines ###


* Code review
Code Review has to be accepted by Alya Othman
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
Alya Othman
* Other community or team contact