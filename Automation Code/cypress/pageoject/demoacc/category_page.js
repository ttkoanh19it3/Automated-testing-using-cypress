export default class categoryPage{
    
    static visit_index(){
        cy.visit(Cypress.config().baseUrl);

    }
    
    static checkList() {
        cy.get('.primary > ul > :nth-child(2) > a').click().pause();
        cy.get('.primary > ul > :nth-child(3) > a').click().pause();
        cy.get('.primary > ul > :nth-child(4) > a').click().pause();
        cy.get('.primary > ul > :nth-child(5) > a').click().pause();
        //cy.get('.primary > ul > :nth-child(6) > a').click() .pause();
    }

}