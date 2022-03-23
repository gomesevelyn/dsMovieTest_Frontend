
Given(/^que eu acesso a aplicação$/, () => {
	cy.visit('/')
});

When(/^avaliar um "([^"]*)"$/, (descricaoFilme) => {
    cy.get('a[href="/form/29"]').click() //clica no botão de avaliar o filme 

    var email = faker.internet.email()

    cy.get('#email').type(email);

    cy.get('#score').select

});

Then(/^devo visualizar a "([^"]*)" de avaliações do filme$/, (args1) => {
	console.log(args1);
	return true;
});
