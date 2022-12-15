Feature: Advance element matchers

    Elements can be matched dynamically and navigation elements can be located

    @advancematchers @dynamic
    Scenario: Home section components can be matched dynamically
        Given I tap on home component with "<section>" section
        Examples:
            | section   |
            | counters  |
            | member    |
            | cities    |
            | animation |
            | extras    |

    @advancematchers @dynamic
    Scenario: List element can be matched dynamically
        Given I tap on home component with "cities" section
        Then I tap on the "<continent>" title and image

        Examples:
            | continent  |
            | europe     |
            | usa/canada |
            | asia       |
