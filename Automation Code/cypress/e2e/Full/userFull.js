import { Given, When, And} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pageoject/demoacc/login_page.js";
import '@percy/cypress';
import { category } from "../../pageoject/demoacc/category_obj.js";
import categoryPage from "../../pageoject/demoacc/category_page.js";

Given("user is on login page and user is a user ", () => {
  cy.percySnapshot()
  LoginPage.visit_login();
  cy.percySnapshot()
  cy.wait(2000);//wait 2s = 2000ms
  });
When('user enters userName as {string} and password as {string}',(userName,password) =>{
  cy.percySnapshot()
  LoginPage.fill_enterinformation(userName,password);
  cy.percySnapshot()
  cy.wait(2000);
});
And("clicks on login button", () => {
  LoginPage.click_login();
  
  cy.wait(2000);
});
//Check category----------------------------------------------------------
Given("User is on index page", () => {
  categoryPage.visit_index();
});
When("Users scroll down to the features restaurant section", () => {
  categoryPage.checkList();
});

