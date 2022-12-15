Feature: Scrolling should be carried out

    As a user I want to scroll vertically and horizontally

    @actions @scrolling @vertical
    Scenario: I can scroll vertically
        Given I tap on home component with "member" section
        And I tap on component with id "add-member-button"
        When I scrolled 300px "down" in "formBackground"
        And I scrolled 100px "up" in "formBackground"
