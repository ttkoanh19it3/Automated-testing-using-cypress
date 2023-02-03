Feature: Register
    Scenario: Check registration successful
        Given User is on register page
        When User input registration infomation 
        And User click Register button
    Scenario: Check registration unsuccessful- Email Already exist
        Given User is on register page
        When User input registration infomation-enter email already 
        And User click Register button
    Scenario: Check registration unsuccessful- User name Already exist
        Given User is on register page
        When User input registration infomation-enter user name already  
        And User click Register button   




    




    
