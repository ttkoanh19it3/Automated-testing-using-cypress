import { Given, When, And } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pageoject/demoacc/login_page.js";
import OrderPage from "../../pageoject/demoacc/order_page.js";
import '@percy/cypress';
Given("user is login successfully", () => {
  cy.percySnapshot()
  LoginPage.visit_login();
  cy.get('[type="text"]').type("KimOanh123");
  cy.get('[type="password"]').type("123456");
  cy.get('#buttn').click();
  //cy.location("pathname").should("include", "/profile");
  cy.pause();
  cy.percySnapshot()
  //cy.get(':nth-child(4) > .nav-link').should("be.visible");
  cy.wait(2000);//wait 2s = 2000ms
  });
When('user click order now',() =>{
  OrderPage.orderNow();
  cy.percySnapshot()
});
And("user check out and check your order", () => {
  OrderPage.viewYourOrders();
  cy.percySnapshot()
});
