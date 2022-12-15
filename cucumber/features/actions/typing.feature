Feature: Typing into input elements

    As a user I can type in suitable elements

    @actions @typing
    Scenario: I can type in an input field
        Given I tap on home component with "member" section
        When I tap on component with id "add-member-button"
        And I type "Who" in "form-input-name"
        And I replace "Ami" in "form-input-surname"
        And I clear text in "form-input-surname"
        And I tap backspace key in "form-input-name"
        And I tap return key in "form-input-name"
