Feature: I want to Purchase through the front page

  Background: Navigate to the Website
    Given I navigate to the Website "https://remarkable.com/"

  Scenario: Purchase throug the front page
    When I click on the Buy now button
    And I select a marker
    And I select folio and choose the model
    And I click Add to cart button
    Then I should see the cart page
    Then I click on the checkout button
    When I enter email "test@test.com" in the email field and click on the continue button
    And I enter the first and last name
      | FirstName | LastName |
      | Test      | Test     |
    And I enter the address
      | Address1 | Address2 | City | ZipCode | Country | PhoneNumber | BillingChekbox |
      | Test      | Test      | Test | 12345    | Test    | 123456789    | true            |
    And I click on the continue button
    #And I select Card as payment method
    #And I click place order button




