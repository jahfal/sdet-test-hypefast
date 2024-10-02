describe("Test case REG-9", () => {
  beforeEach(() => {
    cy.visit(
      "https://dashboard.melaka.app/register"
    );
  });
  it("Melakukan pendaftran tanpa mengisi nomor telepon.", function () {
    cy.get("input[id='input-:R36l6:']").type("andre");
    cy.get("input[id='input-:R76l6:']").type("Retail");
    cy.get("input[id='online_seller-:Ri96l6:']").click();
    cy.get("input[id='input-:Rb6l6:']").type("testemail@gmail.com");
    cy.get("input[id='input-:Rd6l6:']").type("Sml@12345");
    cy.get("input[id='input-:Rf6l6:']").type("Sml@12345");
    cy.get("#register__checkbox__tnc").click();
    cy.get("button[type='submit']").click();
    cy.get('[data-testid="register__text-field__phone-number__error"]').should(
      "have.text",
      "Wajib diisi. Nomor telepon tidak boleh kurang dari 10 atau lebih dari 12 karakter."
    );
  });
});
