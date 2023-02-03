Feature: Login Module for the User
    Scenario Outline: Verify Login Functionality
        Given User is on page Login
        When User enters '<userName>' and '<password>'
        And User click login button
    Examples:
        | userName | password |
        | KimOanh123 | 123456 |
        | UserFail  | 123456 |
        | KimOanh123  | 654321 |
        | UserFail  | 654321 | 

    