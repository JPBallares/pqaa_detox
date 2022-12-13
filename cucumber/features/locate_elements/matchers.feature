# inclosing the words with double quites ("") means it will be passed as parameters in the steps
Feature: Element matchers

    Elements can be located by various matchers supported by detox

    @matchers @text
    Scenario: I can locate elements by text
    Given I tap on the "Counters" section by text
    When I tap on the "WATER COUNTER" by text
    And I tap on the "ELECTRICITY COUNTER" by text
    And I tap on the "GAS COUNTER" by text
    Then I tap on the "BROADBAND COUNTER" by text
