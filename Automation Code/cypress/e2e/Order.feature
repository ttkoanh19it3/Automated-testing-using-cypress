Feature: Verify The Order Functionality
   Scenario: Order now
      Given user is login successfully
      When user click order now
      And user check out and check your order
      #Then users will see their order successfully placed in the your order page.