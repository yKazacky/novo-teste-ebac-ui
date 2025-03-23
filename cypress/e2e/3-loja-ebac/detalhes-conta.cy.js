/// <reference types="cypress" />
import detalhesConta from "../../support/page-objects/detalhes.page";


describe('Funcionalidade: Detalhes da conta', () => {
    
    beforeEach(() => {
        cy.visit("minha-conta/edit-account")
        cy.fixture('login').then(login => {
            cy.login(login[1].email, login[1].senha)
        })
        
    });

    it('Deve completar os detalhes da conta', () => {
        cy.detalhesConta('Lucas', 'Acky' , 'Kazacky')
        cy.get('.woocommerce-message').should('exist')
    });
    it('Deve completar os detalhes da conta - Utilizando massa de dados', () => {
        cy.fixture('detalhesConta').then(dados => {
            detalhesConta.alterarDetalhes(dados[1].nome, dados[1].sobrenome, dados[1].usuario)

        })
        
    });
});