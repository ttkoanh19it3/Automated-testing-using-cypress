export default class adminPage{
    static visit_login(){
        cy.visit('http://localhost/FoodAndDrink/admin/#');
    }
    static fillInfomation(){
        cy.get('.login-form > [type="text"]').type('admin');
        cy.get('.login-form > [type="password"]').type('1234');
        cy.wait(1000);
    }
    static clickLogin(){
        cy.get('.login-form > [type="submit"]').click();
    }
    

}