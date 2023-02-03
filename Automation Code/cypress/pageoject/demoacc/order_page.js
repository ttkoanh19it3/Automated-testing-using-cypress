import {order} from '../demoacc/order_obj.js';
export default class OrderPage{
    static visit_login(){
        cy.visit(Cypress.config().baseUrl+'login.php');
    }
    
    static orderNow() {
        cy.visit(Cypress.config().baseUrl+'restaurants.php');
        cy.visit(Cypress.config().baseUrl+'dishes.php?res_id=48');
        cy.get(order.amount_txt).clear();
        cy.pause();
        cy.get(order.amount_txt).type("2");
        cy.pause();
        cy.get(order.btnAdd).click();
        cy.pause();
        cy.get(order.btnCheckout).click();
        cy.pause();
        cy.get(order.btnPaymentOder).click();
        cy.pause();
    }
    static viewYourOrders(){
        cy.get(':nth-child(3) > .nav-link').click();
        cy.pause();
    }
}