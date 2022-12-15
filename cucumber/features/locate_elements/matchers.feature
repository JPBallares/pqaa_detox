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

  @matchers @id
  Scenario: I can locate elements by id
    When I tap 3 times on component with id "waterCounter"
    And I long press on component with id "electricityCounter" for 2000 ms
    And I tap at 2, 2 on component with id "gasCounter"
    Then I tap on component with id "broadbandCounter"

  @matchers @multiple
  Scenario: I can locate elements by multiple matchers
    When I tap on element with type and text "WATER COUNTER"
    And I tap on element with trait and text "ELECTRICITY COUNTER"
    And I tap on element with parent id and descendant text "GAS COUNTER"
    And I tap on element with child text "BROADBAND COUNTER" and ancestor type
    Then I tap on back button
