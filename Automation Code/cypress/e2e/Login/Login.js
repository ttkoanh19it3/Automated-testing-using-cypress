import { Given, When, And } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pageoject/demoacc/login_page.js";
import '@percy/cypress';
//Login
Given("User is on page Login", () => {
  cy.percySnapshot()
  LoginPage.visit_login();
  cy.percySnapshot()
  cy.wait(1000);//wait 1s = 2000ms
  });
When('User enters {string} and {string}',(userName,password) =>{
  cy.percySnapshot()
  LoginPage.fill_enterinformation(userName,password);
  cy.percySnapshot()
  cy.pause();
});
And("User click login button", () => {
  LoginPage.click_login();
});




