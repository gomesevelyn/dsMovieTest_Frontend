
describe('home page', ()=>{
    it('aplicação deve estar online', ()=>{
        cy.viewport(1440, 900)
        cy.visit('/')
        cy.get('#root > header > nav > div h1').should('have.text', 'DSMovie') //faz a validação
    })
})