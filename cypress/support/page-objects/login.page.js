class loginPage{

    visitarUrl(){
        cy.visit('minha-conta')
    }

    logar(email, senha){
        cy.get('#username').type(email)
        cy.get('#password').type(senha)
        cy.get('.woocommerce-form > .button').click()
    }

    
}

export default new loginPage()