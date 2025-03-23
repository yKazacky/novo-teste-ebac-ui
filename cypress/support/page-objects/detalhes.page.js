class detalhesPage{

    visitarUrl(){
        cy.visit('minha-conta')

    }

    alterarDetalhes(nome, sobrenome, usuario){
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').clear().type(nome)
        cy.get('#account_last_name').clear().type(sobrenome)
        cy.get('#account_display_name').clear().type(usuario)
        cy.get('.woocommerce-Button').click()
    }
}
export default new detalhesPage()