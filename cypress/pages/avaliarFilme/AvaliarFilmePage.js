//import biblioteca
var faker = require('faker')

class AvaliarFilmePage {

    //clica no botão de avaliar o filme 
    accessForm() {
        cy.get('a[href="/form/23"]').click() 
    }

    //preencher formulario de avaliação
    fillForm(filme) {
        var email = faker.internet.email()
        cy.get('#email').type(email)
        cy.get('select').select('5')
    }

    //confirmar preeenchimento do form
    submit() {
        cy.get('div button[type="submit"]').click()
    }
}

export default new AvaliarFilmePage;