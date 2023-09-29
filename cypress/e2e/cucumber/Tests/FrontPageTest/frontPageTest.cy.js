/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import frontPage from "../../Pages/FrontPage/FrontPage.cy";

Given("I navigate to the Website {string}", (url) => {
  frontPage.enterURL(url);
});

When("I click on the Buy now button", () => {
  frontPage.clickBuyNowButton();
});

And("I select a marker", () => {
  frontPage.selectMarker();
});

And("I select folio and choose the model", () => {
  frontPage.selectFolioAndChooseModel();
});

And("I click Add to cart button", () => {
  frontPage.clickAddToCartButton();
});

Then("I should see the cart page", () => {
  frontPage.checkIfWeAreInCartSection();
});

Then("I click on the checkout button", () => {
  frontPage.clickCheoutButton();
});

When(
  "I enter email {string} in the email field and click on the continue button",
  (email) => {
    frontPage.enterEmail(email);
  }
);

And("I enter the first and last name", (datatable) => {
  frontPage.enterFirstNameAndLastName(datatable);
  
});

And("I enter the address", (datatable) => {
  frontPage.enterAddress(datatable);
});


And("I click on the continue button", () => {
 frontPage.clickContinueButton();
});