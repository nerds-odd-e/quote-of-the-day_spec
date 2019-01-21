Feature: Quote of the day
  This feature shows a random quote of the day.
  Scenario: Showing the quote of the day
    Given there is a quote
    | Quote  | What is essential is invisible to the eyes |
    | Author | Antoine de Saint-Exupery                   |
    When I visit the quote of the day
    Then I should see the quote
