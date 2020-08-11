Feature: Sample feature file to test CBOweb application

  @web
  Scenario Outline: Getting started with CBO login page 
    Given I launch the Url
    When I enter username "<username>"
    When I enter password "<password>"
    Then I click on login button
   Examples:
   |username|password|
   |Xxxxxx  |234abcd |