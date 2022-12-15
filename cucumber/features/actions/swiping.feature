Feature: Swiping can be carried out

    As a user I want to swip up and down

    @actions @swiping @vertical
    Scenario: I swiped up and down on add members screen
        Given I tap on home component with "member" section
        When I tap on component with id "add-member-button"
        And I swiped "up" in "formBackground"
        And I swiped "down" in "formBackground"
