import avaliarFilmePage from '../../pages/avaliarFilme/AvaliarFilmePage';
import { Given } from "cypress-cucumber-preprocessor/steps";



Given(/^que eu acesso a aplicação$/, () => {
	cy.visit('/')
});

When(/^avaliar um "([^"]*)"$/, (filme) => {
	avaliarFilmePage.accessForm();
	avaliarFilmePage.fillForm(filme);
	avaliarFilmePage.submit();
});

Then(/^devo visualizar a "([^"]*)" de avaliações do filme$/, (args1) => {

});
