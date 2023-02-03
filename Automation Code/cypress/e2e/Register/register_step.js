import { Given,When, And } from "@badeball/cypress-cucumber-preprocessor";
import RegisterPage from "../../pageoject/demoacc/register_page.js";
import '@percy/cypress';
Given("User is on register page", () => {
    cy.visit("http://localhost/FoodAndDrink/registration.php");
    //RegisterPage.visit_registerPage();
    //cy.screenshot();
    cy.percySnapshot();
  });
When("User input registration infomation", () =>{
    RegisterPage.fill_Register();
    cy.percySnapshot();
});
And("User click Register button", () => {
    RegisterPage.click_register();
    //cy.screenshot();
    cy.percySnapshot();
    cy.pause();
});
//------------------------------------------------------------
When("User input registration infomation-enter email already",()=>{
    RegisterPage.fill_RegisterEmail();
    cy.percySnapshot()
});
//--------------------------------------------------------------------
When("User input registration infomation-enter user name already",()=>{
    RegisterPage.fill_RegisterUserName();
    cy.percySnapshot()
});
//--------------------------------------------------------------------
When("User input registration infomation full", () =>{
    //cy.get('#FirstName').type("Tran");
    //cy.get('#LastName').type("Oanh");
    //cy.get('#gender-male').check();
    //cy.get('[name="DateOfBirthDay"]').select('9');
    RegisterPage.fill_RegisterFull();
    //cy.screenshot();
    cy.percySnapshot();
    cy.pause();
});


