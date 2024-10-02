describe("Test case REG-11", () => {
  beforeEach(() => {
    cy.visit(
      "https://dashboard.melaka.app/register"
    );
  });
  it("Melakukan pendaftran mengisi field email dengan format yang tidak sesuai.", function () {
    cy.get("input[id='input-:R36l6:']").type("andre");
    cy.get("input[id='input-:R156l6:']").type("8943734723");
    cy.get("input[id='input-:R76l6:']").type("Retail");
    cy.get("input[id='retail_store-:Ra96l6:']").click();
    cy.get("input[id='input-:Rb6l6:']").type("john@invalid");
    cy.get("input[id='input-:Rd6l6:']").type("Sml@12345");
    cy.get("input[id='input-:Rf6l6:']").type("Sml@12345");
    cy.get("#register__checkbox__tnc").click();
    cy.get("button[type='submit']").click();
    cy.get('[data-testid="register__text-field__email__error"]').should(
      "have.text",
      "Harap isi dengan format yang benar."
    );
  });
});
