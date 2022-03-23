

class HomePage {
    go() {
        cy.viewport(1440, 900)
        cy.visit('/')
    }

    validPage() {
        cy.get('#root > header > nav > div h1').should('have.text', 'DSMovie') //faz a validação
    }

}

export default new HomePage;