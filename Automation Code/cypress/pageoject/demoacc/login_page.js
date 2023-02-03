export default class LoginPage{
    
    static visit_login(){
        cy.visit(Cypress.config().baseUrl+'login.php');
    }
    
    static fill_enterinformation(userName, password) {
        cy.get('[type="text"]').type(userName);
        cy.get('[type="password"]').type(password);
    }
    static click_login(){
        cy.get('#buttn').click();
    }
}