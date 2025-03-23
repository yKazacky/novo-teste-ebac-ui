/// <reference types="cypress" />
import produtosPage from "../../support/page-objects/produtos.page";


describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
        .contains('Apollo Running Short')
        .click()

        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProdutoLista('Apollo Running Short')
    });

    it.only('Deve visitar a pagina do produto', () => {
        let produto = 'Kratos Gym Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
        
    });

    it('Deve adicionar o produto ao carrinho', () => {
        
    });
});
