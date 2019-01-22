Feature: Quote of the day site shows new quotes every day

  Background:
    Given There are the following quotes
      | ID | Quote | Author | Location | Date | Languaghe | Contributor | Date of Contribution |
      | 1 | What is essential is invisible to the eyes | Antoine de Saint-Exupéry | Little Prince | 1943 | English | Terry | 21 January 2019 |
      | 2 | Imitation is suicide. | Ralph Waldo Emerson | Essays: First Series | 1841 | English | Ivan | 22 January 2019 |
      | 3 | I'm sorry, Dave. I'm afraid I can't do that. | HAL | 2001: A Space Oddesy | 1968 | English | Bas | 22 January 2019 |
      | 4 | Wij accepteren u zoals ik ben. | Herman Brood | Unknown | Unknown | Dutch | Bas | 22 January 2019 |
      | 5 | 1f u c4n r34d th1s u r34lly n33d t0 g37 l41d | Anonymous | T-Shirt | Unknown | English | Jane | 24 January 2019 |
    And The following random quotes map to the days
      | Visit Date | Quote ID |
      | 22 January 2019  | 1 |
      | 23 January 2019  | 2 |
      | 22 Feburary 2019 | 3 |
      | 22 January 2020 | 3 |

  Scenario: QOTD welcomes quote seekers
    When I visit QOFT
    Then I should be welcomed with "Welcome Quote Seeker"

  Scenario: There is a random quote on the QOTD page
    When I visit QOFT on "22 January 2019"
    Then I should see the "What is essential is invisible to the eyes"
    And I should see "-- Antoine de Saint-Exupéry"

  Scenario: The same quote will appear on the same day
    When I visit QOFT on "23 January 2019"
    Then I should see the "Immitation is suicide."
    And When I refresh
    Then I should see the "Immitation is suicide."

  Scenario: The next day should be a new quote
    When I visit QOFT on "22 January 2019"
    Then I should see the "What is essential is invisible to the eyes"
    And When I wait One Day and refresh
    Then I should see "Immitation is suicide"

  Scenario: When I visit in Dutch, I should get Dutch quotes
    When I visit QOFT on "22 January 2019"
    And my Browser Language is "Dutch"
    Then I should see the "Wij accepteren u zoals ik ben."

  Scenario: When I visit in a language that doesn't have quote, default to English
    When I visit QOFT on "22 January 2019"
    And my Browser Language is "Thai"
    Then I should see the "What is essential is invisible to the eyes"

