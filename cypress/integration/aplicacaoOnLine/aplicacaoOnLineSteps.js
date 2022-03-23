import { Given } from "cypress-cucumber-preprocessor/steps";
import homePage from "../../pages/home/homePage";


Given(/^que eu desejo acessar a aplicação$/, () => {
    
});

When(/^realizar a requisição$/, () => {
   homePage.go(); 
});

Then(/^devo visualizar a home da página de avaliações do filme$/, () => {
	homePage.validPage();
});

