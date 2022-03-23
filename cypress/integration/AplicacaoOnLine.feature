Feature: Verificar se a aplicação está online

Scenario: Aplicação deve estar online
    Given que eu desejo acessar a aplicação
    When realizar a requisição
    Then devo visualizar a home da página de avaliações do filme 
