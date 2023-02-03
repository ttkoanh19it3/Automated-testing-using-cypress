import {register} from '../demoacc/register_obj.js';
import {randomNumber, randomUserName, randomEmail, randomFirstName,randomLastName,randomText} from '../../support/ramdomdata.js';

export default class RegisterPage{

    //----Action------------------
    static visit_registerPage(){
        cy.visit(Cypress.config().baseUrl+'registration.php');
    }
    static fill_Register() {

        let fill_fields = {};

        fill_fields.userName_txt=randomUserName(10);
        fill_fields.firstName_txt=randomFirstName(10);
        fill_fields.lastName_txt=randomLastName(10);
        fill_fields.email_txt=randomEmail();
        fill_fields.phoneNumber=randomNumber(9);
        fill_fields.password_txt=randomText(10);
        fill_fields.confirmPassword_txt=fill_fields.password_txt;
        fill_fields.deliveryAddress_txt = randomText(60);

        cy.get(register.userName_txt).type(fill_fields.userName_txt);
        cy.get(register.firstName_txt).type(fill_fields.firstName_txt);
        cy.get(register.lastName_txt).type(fill_fields.lastName_txt);
        cy.get(register.email_txt).type(fill_fields.email_txt);
        cy.get(register.phoneNumber_txt).type("0813234188");
        // cy.get('#Newsletter').check();
        cy.get(register.password_txt).type(fill_fields.password_txt);
        cy.get(register.confirmPassword_txt).type(fill_fields.confirmPassword_txt);
        cy.get(register.deliveryAddress_txt).type("09 Nguyen Trai, Ngu Hanh Son, Da Nang");
        var output = '';
        var currentdate = new Date();
        var datetime = currentdate.getDate()+"-"+ currentdate.getMonth()+"-"+ currentdate.getFullYear() + "_" + currentdate.getHours() + "-"+ currentdate.getMinutes() + "-" + currentdate.getSeconds();
        for (const key_field of Object.keys(fill_fields)) {
            output += key_field + ': ' + fill_fields[key_field]+';'+'\n';
        }
        cy.writeFile('infoRegister/TestResult_CreatedAccount_'+datetime+'.csv', output, {
            encoding: 'ascii',
            flag: 'a+',
          })
    }
    static fill_RegisterFull() {

        let fill_fields = {};

        fill_fields.userName_txt=randomUserName(10);
        fill_fields.firstName_txt=randomFirstName(10);
        fill_fields.lastName_txt=randomLastName(10);
        fill_fields.email_txt=randomEmail();
        fill_fields.phoneNumber=randomNumber(9);
        fill_fields.password_txt=randomText(10);
        fill_fields.confirmPassword_txt=fill_fields.password_txt;
        fill_fields.deliveryAddress_txt = randomText(60);

        cy.get(register.userName_txt).type("KimOanh123");
        cy.get(register.firstName_txt).type(fill_fields.firstName_txt);
        cy.get(register.lastName_txt).type(fill_fields.lastName_txt);
        cy.get(register.email_txt).type("ttkoanh.19i3@vku.udn.vn");
        cy.get(register.phoneNumber_txt).type("0813234188");
        // cy.get('#Newsletter').check();
        cy.get(register.password_txt).type("123456");
        cy.get(register.confirmPassword_txt).type("123456");
        cy.get(register.deliveryAddress_txt).type("09 Nguyen Trai, Ngu Hanh Son, Da Nang");
        var output = '';
        var currentdate = new Date();
        var datetime = currentdate.getDate()+"-"+ currentdate.getMonth()+"-"+ currentdate.getFullYear() + "_" + currentdate.getHours() + "-"+ currentdate.getMinutes() + "-" + currentdate.getSeconds();
        for (const key_field of Object.keys(fill_fields)) {
            output += key_field + ': ' + fill_fields[key_field]+';'+'\n';
        }
        cy.writeFile('infoRegister/TestResult_CreatedAccount_'+datetime+'.csv', output, {
            encoding: 'ascii',
            flag: 'a+',
          })
    }
    static fill_RegisterEmail() {

        let fill_fields = {};

        fill_fields.userName_txt=randomUserName(10);
        fill_fields.firstName_txt=randomFirstName(10);
        fill_fields.lastName_txt=randomLastName(10);
        fill_fields.email_txt=randomEmail();
        fill_fields.phoneNumber=randomNumber(9);
        fill_fields.password_txt=randomText(10);
        fill_fields.confirmPassword_txt=fill_fields.password_txt;
        fill_fields.deliveryAddress_txt = randomText(60);

        cy.get(register.userName_txt).type(fill_fields.userName_txt);
        cy.get(register.firstName_txt).type(fill_fields.firstName_txt);
        cy.get(register.lastName_txt).type(fill_fields.lastName_txt);
        cy.get(register.email_txt).type("ttkoanh.19it3@vku.udn.vn");
        cy.get(register.phoneNumber_txt).type("0813234188");
        cy.get(register.password_txt).type(fill_fields.password_txt);
        cy.get(register.confirmPassword_txt).type(fill_fields.confirmPassword_txt);
        cy.get(register.deliveryAddress_txt).type(fill_fields.deliveryAddress_txt);

  
    }
    static fill_RegisterUserName() {

        let fill_fields = {};

        fill_fields.userName_txt=randomUserName(10);
        fill_fields.firstName_txt=randomFirstName(10);
        fill_fields.lastName_txt=randomLastName(10);
        fill_fields.email_txt=randomEmail();
        fill_fields.phoneNumber=randomNumber(9);
        fill_fields.password_txt=randomText(10);
        fill_fields.confirmPassword_txt=fill_fields.password_txt;
        fill_fields.deliveryAddress_txt = randomText(60);

        cy.get(register.userName_txt).type("KimOanh123");
        cy.get(register.firstName_txt).type(fill_fields.firstName_txt);
        cy.get(register.lastName_txt).type(fill_fields.lastName_txt);
        cy.get(register.email_txt).type(fill_fields.email_txt);
        cy.get(register.phoneNumber_txt).type("0813234188");
        // cy.get('#Newsletter').check();
        cy.get(register.password_txt).type(fill_fields.password_txt);
        cy.get(register.confirmPassword_txt).type(fill_fields.confirmPassword_txt);
        cy.get(register.deliveryAddress_txt).type(fill_fields.deliveryAddress_txt);

    }
    static click_register(){
        cy.get(register.btnRegister_txt).click();
    }

}