
Feature: Contribute new Quote of the Day

  Scenario: Contribute a new Quote of the Day in a complete fresh database
    When I visit the contribute quote page
    And I contribute quote
      | Quote | Author | Location | Date | Language | Contributor | ContributionDate |
      | Imitation is suicide. | Ralph Waldo Emerson | Essays: First Series | 1841 | English | Ivan | 22 January 2019 |
    Then the "immitation is suicide." quote should be in the database

  Scenario: Contribute a new Quote of the Day when there are already quotes in the database
    Given current quotes in the database
      | ID | Quote | Author | Location | Date | Language | Contributor | ContributionDate |
      | 3 | I'm sorry, Dave. I'm afraid I can't do that. | HAL | 2001: A Space Oddesy | 1968 | English | Bas | 22 January 2019 |
    When I visit the contribute quote page
    And I contribute quote
      | Quote | Author | Location | Date | Language | Contributor | ContributionDate |
      | Imitation is suicide. | Ralph Waldo Emerson | Essays: First Series | 1841 | English | Ivan | 22 January 2019 |
    Then the "immitation is suicide." quote should be in the database
