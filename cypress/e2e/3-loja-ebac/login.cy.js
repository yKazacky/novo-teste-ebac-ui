/// <reference types="cypress" />
const perfil = require('../../fixtures/perfil.json')


describe('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit("minha-conta")
    });
    afterEach(() => {
        cy.screenshot()
    });
    
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type("lucasacky@teste.com")
        cy.get('#password').type("lucas123")
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain',"Olá, lucasacky ")
    });

    it('Deve exibir uma mensagem de erro ao inserir um usuario invalido', () => {
        cy.get('#username').type("lucasacky@gmail.com")
        cy.get('#password').type("lucas123")
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain',"Endereço de e-mail desconhecido. ")
         
    });
    it('Deve exibir uma mensagem de erro ao inserir uma senha invalida', () => {
        cy.get('#username').type("lucasacky@teste.com")
        cy.get('#password').type("123lucas")
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
         
    });
    it('Deve fazer login com sucesso - Utilizando massa de dados.', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain',"Olá, lucasacky ")
    });
    it.only('Deve fazer login com sucesso - Utilizando Fixture.', () => {
        cy.fixture('perfil').then( dados =>{
            cy.get('#username').type(dados.usuario, {log: false})
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain',"Olá, lucasacky ")
        })
    });
    
});