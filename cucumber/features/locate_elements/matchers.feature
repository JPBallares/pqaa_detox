Feature: Element matchers
    Elements can be located by various matchers supported by detox

  Background: 
    Given I tap on the "Counters" section by text

  @matchers @text
  Scenario: I can locate elements by text
    When I tap on the "WATER COUNTER" by text
    And I tap on the "ELECTRICITY COUNTER" by text
    And I tap on the "GAS COUNTER" by text
    Then I tap on the "BROADBAND COUNTER" by text

  @matchers @label
  Scenario: I can locate elements by label
    When I tap on component with label "waterCounterLabel"
    Then I tap on component with label "Home"
