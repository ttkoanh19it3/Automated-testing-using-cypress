import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import '@percy/cypress';
import adminPage from "../../pageoject/demoacc/Admin_page.js";

Given("Admin is login successful", () => {
    adminPage.visit_login();
    cy.percySnapshot()
    adminPage.fillInfomation();
    cy.percySnapshot()
    cy.get('.login-form > [type="submit"]').click();
    
});
When('Admin performs the functions All',() =>{
    cy.visit('http://localhost/FoodAndDrink/admin/dashboard.php');
    cy.pause();
    cy.get('.m-l-10 > .nav-link').click();
    cy.get(':nth-child(5) > .has-arrow');
    // All User
    cy.get('a[href*="allusers.php"]').click({force: true});
    cy.wait(3000);
    cy.get('label > input').type('KimOanh123{enter}');
    cy.pause();
    cy.get('label > input').clear();
    cy.get('label > input').type('gauconnhonhan1@gmail.com{enter}');
    cy.pause();
    //All Stores
    cy.get('a[href*="allrestraunt"]').click({force: true});
    cy.pause();
    cy.get('label > input').type('Salad{enter}');
    cy.pause();
    cy.get('label > input').clear();
    cy.get('label > input').type('gauconnhonhan@gmail.com{enter}');
    cy.pause();
    cy.get('.buttons-pdf').click();
    cy.pause();
    //Add Category
    cy.get('a[href*="add_category"]').click({force: true});
    cy.get('.form-group > .form-control').type('China Food');
    cy.pause();
    cy.get('.btn-success').click({force: true});
    cy.pause();
    cy.get(':nth-child(1) > :nth-child(4) > .btn-danger').click();
    cy.pause();
    

    //add menu
    cy.get('a[href*="add_menu"]').click({force: true});
    cy.get(':nth-child(2) > :nth-child(1) > .form-group > .form-control').type('Moziela123');
    cy.get(':nth-child(2) > :nth-child(2) > .form-group > .form-control').type('Halohalohalo');
    cy.get(':nth-child(3) > :nth-child(1) > .form-group > .form-control').type('30');
    cy.get('#lastName').selectFile('img/addimg.jpg');
    cy.get('.col-md-12 > .form-group > .form-control').select('Hari Burger');
    cy.pause();
    cy.get('.btn-success').click();
    cy.pause();

    //all menu
    cy.get('a[href*="all_menu"]').click({force: true});
    cy.pause();
    cy.get('label > input').type('Halohalohalo{enter}');
    cy.pause();
    cy.get('.btn-danger').click();
    cy.pause();

    //all order
    cy.get('a[href*="all_orders"]').click({force: true});
    cy.pause();
    cy.get('.even > :nth-child(8) > .btn-info').click();
    cy.pause();
    cy.visit('http://localhost/FoodAndDrink/admin/order_update.php?form_id=102');
    cy.get('#status').select('Closed');
    cy.get('textarea').type('we will deliver to you soon{enter}');
    cy.get('.btn-primary').click({force: true});
    cy.visit('http://localhost/FoodAndDrink/admin/all_orders.php');
    cy.pause();
});

//-----------------------------------------------------
