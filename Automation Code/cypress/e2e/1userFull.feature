Feature: User is performing the functions in the website

#Register
Scenario: Check registration is successful
        Given User is on register page
        When User input registration infomation full 
        And User click Register button

#Login->Order
Scenario: Check Order now is successful
        Given user is login successfully
        When user click order now
        And user check out and check your order

#Check list product category
Scenario: Check list product category now is successful
        Given User is on index page
        When Users scroll down to the features restaurant section 



