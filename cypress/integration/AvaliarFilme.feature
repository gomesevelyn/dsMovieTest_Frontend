Feature: Avaliar Filmes

Scenario: Avaliar um filme com score alto
    Given que eu acesso a aplicação
    When avaliar um "filme" com score alto
    Then devo visualizar a "quantidade" de avaliações do filme 

Scenario: Avaliar um filme com score baixo
    Given que eu acesso a aplicação
    When avaliar um "filme" com score baixo
    Then devo visualizar a "quantidade" de avaliações do filme     