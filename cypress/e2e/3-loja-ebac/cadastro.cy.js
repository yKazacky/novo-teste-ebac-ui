/// <Reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade Cadastro', () => {
    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
    });
    
    
    it('Deve completar um cadastro', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('exist')
    });
    
    it.only('Deve completar um cadastro - Usando Variaveis', () => {
        var primeiroNome=faker.person.firstName()
        var email=faker.internet.email(primeiroNome)
        var senha=faker.internet.password()
        var ultimoNome=faker.person.lastName()


        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(senha)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(primeiroNome)
        cy.get('#account_last_name').type(ultimoNome)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('exist')
    });
});