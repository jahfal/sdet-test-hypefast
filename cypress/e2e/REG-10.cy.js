describe("Test case REG-10", () => {
  beforeEach(() => {
    cy.visit(
      "https://dashboard.melaka.app/register"
    );
  });
  it("Melakukan pendaftran tanpa mengisi field nama bisnis.", function () {
    cy.get("input[id='input-:R36l6:']").type("andre");
    cy.get("input[id='input-:R156l6:']").type("8943734723");
    cy.get("input[id='distributor-:R696l6:']").click();
    cy.get("input[id='input-:Rb6l6:']").type("testemail@gmail.com");
    cy.get("input[id='input-:Rd6l6:']").type("Sml@12345");
    cy.get("input[id='input-:Rf6l6:']").type("Sml@12345");
    cy.get("#register__checkbox__tnc").click();
    cy.get("button[type='submit']").click();
    cy.get('[data-testid="register__text-field__business-name__error"]').should(
      "have.text",
      "Wajib diisi."
    );
  });
});
