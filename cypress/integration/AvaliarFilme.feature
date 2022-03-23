Feature: Avaliar Filmes

Scenario: Avaliar um filme 
    Given que eu acesso a aplicação
    When avaliar um "filme"
    Then devo visualizar a "quantidade" de avaliações do filme 