/// <reference types="cypress" />


describe('Funcionalidade: Detalhes da conta', () => {
    
    beforeEach(() => {
        cy.visit("minha-conta/edit-account")
        cy.fixture('perfil').then(login => {
            cy.login(login.usuario, login.senha)
        })
        
    });

    it('Deve completar os detalhes da conta', () => {
        cy.detalhesConta('Lucas', 'Acky' , 'Kazacky')
        cy.get('.woocommerce-message').should('exist')
    });
});