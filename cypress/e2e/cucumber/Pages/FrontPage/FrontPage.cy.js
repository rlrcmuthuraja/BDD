class FrontPage {
  enterURL(url) {
    cy.visit(url);
  }

  clickBuyNowButton() {
    cy.get('[data-cy="mainpage-hero-buy-now-btn"]').click();
    cy.get('[data-cy="configure-bundle"]').click();
  }

  selectMarker() {
    cy.get('[data-track-text="Marker Plus"]').click();
  }

  selectFolioAndChooseModel() {
    cy.get('[data-cy="mpf-step-folio"]').click();
    cy.get('[data-cy="model-type-folio"]').click();
  }

  clickAddToCartButton() {
    cy.get('[data-cy="add-to-cart-btn"]').click();
    cy.wait(1000);
  }

  checkIfWeAreInCartSection() {
    cy.contains("Cart");
  }

  clickCheoutButton() {
    cy.get('[data-cy="checkout"]').click();
    cy.wait(1000);
  }
  enterEmail(email) {
    cy.get('[id="email"]').type(email);
    cy.wait(1000);
    this.clickContinueButton();
  }
  enterFirstNameAndLastName(datatable) {
    datatable.hashes().forEach((element) => {
      cy.get('[id="shippingAddress.firstName"]').type(element.FirstName);
      cy.get('[id="shippingAddress.lastName"]').type(element.LastName);
      cy.wait(1000)
    });
  }
 
  enterAddress(datatable) {
    datatable.hashes().forEach((element) => {
      cy.get('[id="shippingAddress.addressLine1"]').type(element.Address1);
      cy.get('[id="shippingAddress.addressLine2"]').type(element.Address2);
      cy.get('[id="shippingAddress.zipCode"]').type(element.ZipCode);
      cy.get('[id="shippingAddress.city"]').type(element.City);
      cy.get('[name="phoneInput"]').type(element.PhoneNumber);
      cy.get('[name="billingAddressSameAsShipping"]').check();
      cy.wait(1000)
    });
  }

  clickContinueButton() {
    cy.contains("Continue").click();
  }
}
const frontPage = new FrontPage();
export default frontPage;
